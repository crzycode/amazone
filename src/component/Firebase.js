
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// import { firestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyC6PCvXG_qWtcb9JMRMPlPunwY6ZaPJZL4",
  authDomain: "e-clone-8453c.firebaseapp.com",
  projectId: "e-clone-8453c",
  storageBucket: "e-clone-8453c.appspot.com",
  messagingSenderId: "922300143068",
  appId: "1:922300143068:web:56d7bb3c134b2c0fc3eb19",
  measurementId: "G-KG3ZPE3YR3"
};


const app = initializeApp(firebaseConfig);
// export const db = firestore(app);
export const auth = getAuth(app);

