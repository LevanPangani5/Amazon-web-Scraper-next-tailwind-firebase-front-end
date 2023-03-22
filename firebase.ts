import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCiTcUYKDB5ue2C-bc-lP-neWmrr8nlMVI",
    authDomain: "webscaraper-btightdata.firebaseapp.com",
    projectId: "webscaraper-btightdata",
    storageBucket: "webscaraper-btightdata.appspot.com",
    messagingSenderId: "877524941079",
    appId: "1:877524941079:web:198580249233d7ca149f52"
  };

const app = getApps().length ? getApp(): initializeApp(firebaseConfig)

const db = getFirestore(app)

export {db}