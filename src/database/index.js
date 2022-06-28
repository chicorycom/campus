import { initializeApp } from "firebase/app";
import { getFirestore  } from "firebase/firestore";
import { 
    query, 
    getDocs, 
    collection, 
    where, 
    addDoc, 
    updateDoc, 
    serverTimestamp, 
    doc,
    deleteDoc
} from "firebase/firestore";

import {
    getAuth,
    signInWithPopup,
    GithubAuthProvider,
    GoogleAuthProvider,
    FacebookAuthProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    RecaptchaVerifier
  } from "firebase/auth";

  //https://chicoryconnection.firebaseapp.com/__/auth/handler

const firebaseConfig = {
    apiKey: "AIzaSyCA-wjW__vkYWca936KZsbqnSmaRB6HwX4",
    authDomain: "chicoryconnection.firebaseapp.com",
    databaseURL: "https://chicoryconnection.firebaseio.com",
    projectId: "chicoryconnection",
    storageBucket: "chicoryconnection.appspot.com",
    messagingSenderId: "845320136092",
    appId: "1:845320136092:web:a6e843c4723e5040e89459"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const firbaseAuth = getAuth(app);
firbaseAuth.useDeviceLanguage();
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();


//const timestamp = Timestamp.fromDate(new Date());


export async function fetchData(url){
  return fetch(url, {
    method: 'GET'
  }).then(d => d.json())
} 


/**
 * 
 * @param {object} data 
 * @param {string} action 
 * @returns {string}
 */
const add = async (action, data) => {
    data.timestamp = serverTimestamp()
   const ref = await addDoc(collection(db, action), data)
   return ref.id;
}

/**
 * 
 * @param {string} action 
 * @returns 
 */
const get = async (action) => {
  const res = collection(db, action);
  const docSnap = await getDocs(res);
  return docSnap.docs.map(doc => ({...doc.data(), id: doc.id}));
}


/**
 * 
 * @param {object} data 
 * @param {string} action 
 * @returns {void}
 */
const put = async (action, data) => {
    const docRef = doc(db, action, data.id);

// Update the timestamp field with the value from the server
    const updateTimestamp = await updateDoc(docRef, {
        ...data,
        timestamp: serverTimestamp()
    });

    return updateTimestamp;
}

/**
 * 
 * @param {string} action 
 * @param {object} data 
 * @returns 
 */
const destroy = async (action, data) => {
    const docRef = doc(db, action, data.id);
    return await deleteDoc(docRef)
}


const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(firbaseAuth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};


const signInWithGithub = async () => {
  try {
    const res = await signInWithPopup(firbaseAuth, githubProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};


const signInWithFacebook = async () => {
  try {
    const res = await signInWithPopup(firbaseAuth, facebookProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};



const logInWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(firbaseAuth, email, password)
};



const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(firbaseAuth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(firbaseAuth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  
  const logout = () => {
    signOut(firbaseAuth);
  };

export {  
    add, 
    put, 
    get,
    signInWithGoogle,
    signInWithGithub,
    signInWithFacebook,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    RecaptchaVerifier,
    sendPasswordReset,
    logout,
    collection, 
    db, 
    getDocs,
    firbaseAuth,
    destroy
};
