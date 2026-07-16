// Replace this file with your existing Firebase initializer if it was not copied
// into this workspace. app.js only needs the exported Firestore instance named db.
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyDvoDx2Xw_vg7TCUJPJeq4sFyuYbmQXinU",
  authDomain: "ph-dispatch.firebaseapp.com",
  projectId: "ph-dispatch",
  storageBucket:"ph-dispatch.firebasestorage.app",
  messagingSenderId: "67874808748",
  appId:"1:67874808748:web:e625c83a2500a33ea01009",
  easurementId: "G-SXXDDFDDGX"
};
export const db = getFirestore(initializeApp(firebaseConfig));
