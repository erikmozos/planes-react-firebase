// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import { getFirestore, setDoc, doc, getDocs, query, orderBy, limit, collection, onSnapshot } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

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



export const addPlanes = async (plane)=>{

  const lastid = await getLastPlaneId();
  const planeid = lastid + 1;

  await setDoc(doc(db, "plane-react-crud", planeid.toString()), {
    id : planeid,
    model: plane.model,
    producer: plane.producer,
    capacity: plane.capacity,
    accidents: plane.accidents,
  })
  console.log(plane);
}

const getLastPlaneId = async () => {
  const q = query(collection(db, "plane-react-crud"), orderBy("planeid", "desc"), limit(1));
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    const lastDoc = querySnapshot.docs[0];
    return lastDoc.data().planeid;
  } else {
    return 0;
  }
};

export const getPlanes = (callback) =>{

  const planesRef = collection(db, "plane-react-crud");

  return onSnapshot(planesRef, (querySnapshot) => {
    const planes = [];
    querySnapshot.forEach((doc) => {
      planes.push({ id: doc.id, ...doc.data() });
    });
    callback(planes);
  });

}