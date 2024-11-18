import app from "./config";
import { FirestoreDoc } from "./types";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  addDoc,
  updateDoc,
  deleteDoc,
  QueryConstraint,
  Timestamp,
  Firestore,
  getFirestore,
} from "firebase/firestore";

const db: Firestore = getFirestore(app);


// Generic type-safe Firestore utility functions
export class FirestoreService {
  /**
   * Get all documents from a collection with type safety
   */
  static async getCollection<T extends FirestoreDoc>(
    collectionName: string,
    queryConstraints: QueryConstraint[] = [],
  ): Promise<T[]> {
    try {
      const q = query(collection(db, collectionName), ...queryConstraints);
      const querySnapshot = await getDocs(q);

      return querySnapshot.docs.map(
        (doc) =>
          ({
            id: doc.id,
            ...doc.data(),
            createdAt: doc.data().createdAt?.toDate(),
            updatedAt: doc.data().updatedAt?.toDate(),
          }) as T,
      );
    } catch (error) {
      console.error("Error getting collection:", error);
      throw error;
    }
  }

  /**
   * Get a single document by ID with type safety
   */
  static async getDocument<T extends FirestoreDoc>(
    collectionName: string,
    documentId: string,
  ): Promise<T | null> {
    try {
      const docRef = doc(db, collectionName, documentId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return {
          id: docSnap.id,
          ...docSnap.data(),
          createdAt: docSnap.data().createdAt?.toDate(),
          updatedAt: docSnap.data().updatedAt?.toDate(),
        } as T;
      }
      return null;
    } catch (error) {
      console.error("Error getting document:", error);
      throw error;
    }
  }

  /**
   * Add a new document with type safety
   */
  static async addDocument<T extends FirestoreDoc>(
    collectionName: string,
    data: Omit<T, "id">,
  ): Promise<string> {
    try {
      const docData = {
        ...data,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
      };

      const docRef = await addDoc(collection(db, collectionName), docData);
      return docRef.id;
    } catch (error) {
      console.error("Error adding document:", error);
      throw error;
    }
  }

  /**
   * Update a document with type safety
   */
  static async updateDocument<T extends FirestoreDoc>(
    collectionName: string,
    documentId: string,
    data: Partial<T>,
  ): Promise<boolean> {
    try {
      const docRef = doc(db, collectionName, documentId);
      await updateDoc(docRef, {
        ...data,
        updatedAt: Timestamp.now(),
      });
      return true;
    } catch (error) {
      console.error("Error updating document:", error);
      throw error;
    }
  }

  /**
   * Delete a document with type safety
   */
  static async deleteDocument(
    collectionName: string,
    documentId: string,
  ): Promise<boolean> {
    try {
      const docRef = doc(db, collectionName, documentId);
      await deleteDoc(docRef);
      return true;
    } catch (error) {
      console.error("Error deleting document:", error);
      throw error;
    }
  }
}

export { db };
