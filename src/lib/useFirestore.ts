// hooks/useFirestore.ts
import { useState, useEffect, useCallback } from 'react';
import { QueryConstraint } from 'firebase/firestore';
import { FirestoreDoc } from '@/firebase/types';
import { FirestoreService } from '@/firebase/firestoreService';

interface FirestoreState<T> {
  data: T[];
  loading: boolean;
  error: Error | null;
}

interface FirestoreHookOptions {
  queryConstraints?: QueryConstraint[];
  autoFetch?: boolean;
}

interface FirestoreHookReturn<T extends FirestoreDoc> {
  // State
  data: T[];
  loading: boolean;
  error: Error | null;
  
  // CRUD operations
  fetchData: () => Promise<void>;
  getById: (id: string) => Promise<T | null>;
  create: (data: Omit<T, 'id'>) => Promise<string>;
  update: (id: string, data: Partial<T>) => Promise<boolean>;
  remove: (id: string) => Promise<boolean>;
  
  // State management
  setData: (data: T[]) => void;
  resetState: () => void;
}

export const useFirestore = <T extends FirestoreDoc>(
  collectionName: string,
  options: FirestoreHookOptions = {}
): FirestoreHookReturn<T> => {
  const { queryConstraints = [], autoFetch = true } = options;

  const initialState: FirestoreState<T> = {
    data: [],
    loading: autoFetch,
    error: null
  };

  const [state, setState] = useState<FirestoreState<T>>(initialState);

  // Helper to update state partially
  const updateState = (newState: Partial<FirestoreState<T>>) => {
    setState(prev => ({ ...prev, ...newState }));
  };

  // Fetch all documents
  const fetchData = useCallback(async () => {
    try {
      updateState({ loading: true, error: null });
      const documents = await FirestoreService.getCollection<T>(
        collectionName,
        queryConstraints
      );
      updateState({ data: documents, loading: false });
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to fetch data');
      updateState({ error, loading: false });
      throw error;
    }
  }, [collectionName, queryConstraints]);

  // Get single document by ID
  const getById = async (id: string): Promise<T | null> => {
    try {
      updateState({ error: null });
      return await FirestoreService.getDocument<T>(collectionName, id);
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to fetch document');
      updateState({ error });
      throw error;
    }
  };

  // Create new document
  const create = async (data: Omit<T, 'id'>): Promise<string> => {
    try {
      updateState({ error: null });
      const id = await FirestoreService.addDocument<T>(collectionName, data);
      
      // Optionally refresh the list
      await fetchData();
      
      return id;
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to create document');
      updateState({ error });
      throw error;
    }
  };

  // Update document
  const update = async (id: string, data: Partial<T>): Promise<boolean> => {
    try {
      updateState({ error: null });
      const success = await FirestoreService.updateDocument<T>(
        collectionName,
        id,
        data
      );
      
      if (success) {
        // Optimistic update
        updateState({
          data: state.data.map(item => 
            item.id === id ? { ...item, ...data } : item
          )
        });
        
        // Fetch fresh data
        await fetchData();
      }
      
      return success;
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to update document');
      updateState({ error });
      throw error;
    }
  };

  // Delete document
  const remove = async (id: string): Promise<boolean> => {
    try {
      updateState({ error: null });
      const success = await FirestoreService.deleteDocument(collectionName, id);
      
      if (success) {
        // Optimistic update
        updateState({
          data: state.data.filter(item => item.id !== id)
        });
        
        // Fetch fresh data
        await fetchData();
      }
      
      return success;
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to delete document');
      updateState({ error });
      throw error;
    }
  };

  // Reset state to initial values
  const resetState = () => {
    setState(initialState);
  };

  // Initial fetch
  useEffect(() => {
    if (autoFetch) {
      fetchData();
    }
  }, [autoFetch, fetchData]);

  return {
    // State
    data: state.data,
    loading: state.loading,
    error: state.error,
    
    // CRUD operations
    fetchData,
    getById,
    create,
    update,
    remove,
    
    // State management
    setData: (data: T[]) => updateState({ data }),
    resetState
  };
};
