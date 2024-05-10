// Importa las funciones que necesitas de los SDK que necesitas
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDpDzMn-4QcetF1yE-hRqvqIYu2aaOa1B0",
  authDomain: "prestex-85200.firebaseapp.com",
  projectId: "prestex-85200",
  storageBucket: "prestex-85200.appspot.com",
  messagingSenderId: "30852617177",
  appId: "1:30852617177:web:761af8bbcb8282f4787fc8"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
export default app;
