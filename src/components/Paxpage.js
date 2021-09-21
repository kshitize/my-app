import React, { Component, useEffect, useState } from "react";
import { Login, paxEmailtest } from "./Login";

const Paxpage = () => {

  const [passenger, setPassenger] = useState({
    email:paxEmailtest,
    test:"",
  });

  const callPaxinfo = async (e) => {
    console.log("in call func");
    //e.preventDefault();
    
    const { email, test } = passenger;
    const res = await fetch("/getpaxinfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        test,
      }),
    });

    const data = await res.json();
    console.log("This is data= " + data.email);
  };


  useEffect(() => {
    console.log("in use effect")
    callPaxinfo();
  }, []);
  return (
    <>
      <h1>This is PaxPage</h1>
      <h1>{paxEmailtest}</h1>
    </>
  );
};

export default Paxpage;
