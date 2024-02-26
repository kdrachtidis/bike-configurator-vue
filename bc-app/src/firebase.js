import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAdZK3HaX1zMd0TgB2ZcvEUMpB-7rkQ7fU",
  authDomain: "bike-configurator.firebaseapp.com",
  projectId: "bike-configurator",
  storageBucket: "bike-configurator.appspot.com",
  messagingSenderId: "245392560097",
  appId: "1:245392560097:web:fb131982f924ab93968ca0",
  measurementId: "G-QVJS7NV5E4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

