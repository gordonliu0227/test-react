import React, { useState } from "react";
import firebase, { googleProvider } from "../firebase";
import {  useHistory } from "react-router-dom"
import { Button } from "react-bootstrap"

// const [loading, setLoading] = useState(false)
export default function GoogleLogin() {
  const [loading, setLoading] = useState(false);
  const history = useHistory()

  function onSubmit() {
    var provider = new googleProvider();

    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState("");
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        
      })
      .catch((error) => {
        console.log(error);
      });

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log(user);
        console.log(user.email);
        console.log("login");
        setLoading(true)
        history.push("/")
      } else {
        console.log("no user sign in");
      }
    });
  }
  return (
    <Button type="button" onClick={onSubmit} className="w-100" >
      使用Google账号登录
    </Button>
    
  );
}
