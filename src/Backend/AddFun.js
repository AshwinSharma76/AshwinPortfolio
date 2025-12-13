import {
  addDoc,
  getDocs,
  collection,
  serverTimestamp,
  orderBy,
  limit,
  query,
} from "firebase/firestore";

import { db } from "./firebase";

export const addProjects = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), {
      ...data,
      createdAt: new Date(),
    });

    console.log("Data added with ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding data:", error);
    throw error;
  }
};
export const fetchProjects = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "Projects"));
    const projects = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log("Projects:", projects);
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
};
export const saveResumeUrl = async (resumeUrl) => {
  try {
    if (!resumeUrl || !resumeUrl.trim()) {
      throw new Error("Resume URL is required");
    }

    const docRef = await addDoc(collection(db, "resume"), {
      resumeUrl: resumeUrl.trim(),
      createdAt: serverTimestamp(),
    });

    return {
      success: true,
      id: docRef.id,
    };
  } catch (error) {
    console.error("Error saving resume URL:", error);
    return {
      success: false,
      message: error.message,
    };
  }
};

export const fetchLatestResumeUrl = async () => {
  try {
    const q = query(
      collection(db, "resume"),
      orderBy("createdAt", "desc"),
      limit(1)
    );

    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      return null;
    }

    return snapshot.docs[0].data().resumeUrl || null;
  } catch (error) {
    console.error("Error fetching latest resume URL:", error);
    return null;
  }
};
