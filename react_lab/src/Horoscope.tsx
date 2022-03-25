import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TextBox from './TextBox';
import axios from 'axios';
// @ts-ignore 
import {AwesomeButton} from "react-awesome-button";
import "react-awesome-button/dist/styles.css";


function Horoscope() {
  const [sn, setSun] = useState("");
  const [mn, setMoon] = useState("");
  const [rg, setRising] = useState("");
  const [horoscope, setHoroscope] = useState("");
  const requestHoroscope = () => {
    const toSend = {
      //TODO: Pass in the values for the data. Follow the format the route expects!
      sun : sn,
      moon : mn,
      rising : rg
  };

  let config = {
      headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*',
      }
  }

  axios.post("http://localhost:4567/horoscope", toSend, config)
  .then(response => {
    setHoroscope(response.data["horoscope"]);
  })
  .catch(error => {
    console.log(error);
  });
}

  
  return (
    console.log("Horoscope:" + horoscope),
    <div className="Horoscope"> 
      <header className="Horoscope-header">
        <TextBox text = "starSign" change = {setSun}></TextBox>
        <TextBox text = "moonSign" change = {setMoon}></TextBox>
        <TextBox text = "rising" change = {setRising}></TextBox>
      </header>
      <AwesomeButton onPress={() => requestHoroscope()}>Submit</AwesomeButton>
    <div>    
      <p>{horoscope[3]}</p>
      <p>{horoscope[4]}</p>
    </div>
    </div>
  );
};

export default Horoscope;
