import { func } from "prop-types";
import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [timeSelect, settimeSelect]= useState();

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
    // .then(function doCreateUser(authUser) {
    //   doCreateUser(authUser.user.uid, email, timezone);
    // });
  }
  
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function signInWithPopup(provider) {
    return auth.signInWithPopup(provider);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signInWithPopup,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    timeSelect
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
