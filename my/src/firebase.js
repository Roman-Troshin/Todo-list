import { initializeApp } from 'firebase/app';
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyBf_hCB7pXjDDYb_2GrZGMM6Lb_QTeli3Q',
	authDomain: 'todo-list-firebase-3a8e1.firebaseapp.com',
	projectId: 'todo-list-firebase-3a8e1',
	storageBucket: 'todo-list-firebase-3a8e1.appspot.com',
	messagingSenderId: '1005534626905',
	appId: '1:1005534626905:web:312ba7fcb8f4b1bba21d48',
	databaseURL: 'https://todo-list-firebase-3a8e1-default-rtdb.europe-west1.firebasedatabase.app',
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
