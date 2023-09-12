import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB_eZ4eNwq__6uZNw3AF4uFdt0cwzqqCr8",
  authDomain: "netflix-clone-b6827.firebaseapp.com",
  projectId: "netflix-clone-b6827",
  storageBucket: "netflix-clone-b6827.appspot.com",
  messagingSenderId: "432296522522",
  appId: "1:432296522522:web:c4f6a3a9ef3c83f95872a3",
  measurementId: "G-NVBM0HNEPP"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
