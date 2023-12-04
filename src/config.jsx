
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD9Ap9WR8xW-SjNCDsDiqf5YYOCxdqK4aQ",
  authDomain: "shopping-app-7892a.firebaseapp.com",
  databaseURL: "https://shopping-app-7892a-default-rtdb.firebaseio.com",
  projectId: "shopping-app-7892a",
  storageBucket: "shopping-app-7892a.appspot.com",
  messagingSenderId: "104491428580",
  appId: "1:104491428580:web:5efff83d2d968d8ec41af1",
  measurementId: "G-97WFJHEMDP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const database = getDatabase(app);
export const storage = getStorage(app);
