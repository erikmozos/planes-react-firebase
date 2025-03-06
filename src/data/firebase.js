// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import { getFirestore, getDoc, doc, updateDoc, deleteDoc, where, addDoc, getDocs, query, orderBy, limit, collection, onSnapshot } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB51TY4RY2sbtWlA59m8-ZJ0vX0UEwhDiE",
  authDomain: "plane-react.firebaseapp.com",
  projectId: "plane-react",
  storageBucket: "plane-react.firebasestorage.app",
  messagingSenderId: "1059079933335",
  appId: "1:1059079933335:web:8f3a7631b89b2ea3c408d2",
  measurementId: "G-8MZYVJ567P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("Firestore conectado:", db);

export { db };

const COLLECTION_NAME = "plane-react-crud";

export const addPlanes = async (plane) => {
  const lastid = await getLastPlaneId(); 
  const planeid = lastid + 1;

  await addDoc(collection(db, COLLECTION_NAME), {
    id: planeid, // Ahora sí se guarda bien
    model: plane.model,
    producer: plane.producer,
    capacity: plane.capacity,
    accidents: plane.accidents,
    description: plane.description,
    img: plane.img
  });

  console.log("Plane added with ID:", planeid);
};

const getLastPlaneId = async () => {
  const planesRef = collection(db, COLLECTION_NAME);
  const q = query(planesRef, orderBy("id", "desc"), limit(1));
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    const lastDoc = querySnapshot.docs[0];
    return lastDoc.data().id; 
  } else {
    return 0;
  }
};


export const getPlanes = (callback) => {
  try {
    const planesRef = collection(db, COLLECTION_NAME);
    return onSnapshot(planesRef, (snapshot) => {
      const planesData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      callback(planesData);
    });
  } catch (error) {
    console.error("Error al obtener aviones:", error);
    callback([]);
    return () => {};
  }
};

export const getPlaneByCustomId = async (planeId) => {
  try {
    const planesRef = collection(db, "plane-react-crud");
    console.log(planeId , "dins fire");
    const q = query(planesRef, where("id", "==", Number(planeId)));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      return {
        docId: doc.id, 
        ...doc.data() 
      };
    }
    return null;
  } catch (error) {
    console.error("Error en getPlaneByCustomId:", error);
    return null;
  }
};

export const updatePlane = async (docId, updatedData) => {
  try {
    const planeRef = doc(db, COLLECTION_NAME, docId);
    await updateDoc(planeRef, {
      model: updatedData.model,
      producer: updatedData.producer,
      capacity: Number(updatedData.capacity),
      accidents: Number(updatedData.accidents),
      description: updatedData.description,
      img : updatedData.img
    });
    return true;
  } catch (error) {
    console.error("Error en updatePlane:", error);
    throw error;
  }
};

export const deletePlane = async (docId) => {
  try {
    const planeRef = doc(db, COLLECTION_NAME, docId);
    await deleteDoc(planeRef);
    return true;
  } catch (error) {
    console.error("Error en deletePlane:", error);
    throw error;
  }
};





