export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

// Generic interface for Firestore documents
export interface FirestoreDoc {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Example of a typed document - extend FirestoreDoc
export interface UserDoc extends FirestoreDoc {
  name: string;
  email: string;
  role: "admin" | "user";
  age?: number;
}
