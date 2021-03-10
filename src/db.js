//this is going to store Firebase realtime database API code
import firebase from "firebase/app";
import React, { useContext, useState, useEffect } from "react";


//##########3 user API

//create an user and store it at users/id path (it's an asynchronous func)
// export const doCreateUser = (id, username, email) =>
//   db.ref(`users/${id}`).set({
//     username,
//     email,
//   });

// export function doCreateUser(userId, email, username) {
//   return db.ref("users/" + userId).set({
//       email,
//       username
//   });
// }

// //returns all users from firebase realtime db
// export const onceGetUsers = () => db.ref("users").once("value");

// export const doGetAnUnser = (uid) => db.ref(`users/${uid}`).once("value");

// other APIs could come below
export default function selecttimezone(timezone) {
  const user = firebase.auth().currentUser;

  user
    .updateProfile({
      displayName: timezone,
    })
    .then(function () {
      // Update successful.
    })
    .catch(function (error) {
      // An error happened.
    });
}

