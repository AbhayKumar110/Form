import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
import firebaseConfig from "./config/firebaseconfig";
import { getMessaging } from "firebase/messaging";



const firebaseApp = initializeApp(firebaseConfig)
const messaging = getMessaging(firebaseApp);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);



export { auth, db,messaging,firebaseApp}