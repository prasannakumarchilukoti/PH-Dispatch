import { db } from './firebase.js';
import { collection, addDoc, updateDoc, deleteDoc, doc, serverTimestamp, onSnapshot, query, orderBy, getDocs } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

const refs = { bookings: collection(db, 'bookings'), customers: collection(db, 'customers'), resellers: collection(db, 'resellers') };
export const saveBooking = data => addDoc(refs.bookings, { ...data, createdAt: serverTimestamp() });
export const updateBooking = (id, data) => updateDoc(doc(db, 'bookings', id), data);
export const removeBooking = id => deleteDoc(doc(db, 'bookings', id));
export const saveEntity = (type, data) => addDoc(refs[type], { ...data, createdAt: serverTimestamp() });
export const removeEntity = (type, id) => deleteDoc(doc(db, type, id));
export const watch = (type, callback, onError = console.error) => onSnapshot(query(refs[type], orderBy('createdAt', 'desc')), snap => callback(snap.docs.map(d => ({ id:d.id, ...d.data() }))), onError);
export const listBookings = async () => (await getDocs(query(refs.bookings, orderBy('createdAt', 'desc')))).docs.map(d => ({id:d.id,...d.data()}));
