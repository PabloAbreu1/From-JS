/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let form = document.querySelector("form");

  function enviarDatos(e) {
    e.preventDefault();
    let Alert = document.getElementById("Alert");
    let Card = document.getElementById("Card");
    let CVC = document.getElementById("CVC");
    let Amount = document.getElementById("Amount");
    let FristName = document.getElementById("FristName");
    let LastName = document.getElementById("LastName");
    let City = document.getElementById("City");
    let PostalCode = document.getElementById("PostalCode");
    let Pickastate = document.getElementById("select");
    let Message = document.getElementById("Message");

    let DatosLlenos = true;
    if (Card.value === "") {
      Card.style.backgroundColor = "pink";
      Alert.style.display = "block";
      DatosLlenos = false;
    }
    if (Card.value === "") {
      Card.style.backgroundColor = "pink";
      Alert.style.display = "block";
      DatosLlenos = false;
    }
    if (CVC.value === "") {
      CVC.style.backgroundColor = "pink";
      Alert.style.display = "block";
      DatosLlenos = false;
    }
    if (Amount.value === "") {
      Amount.style.backgroundColor = "pink";
      Alert.style.display = "block";
      DatosLlenos = false;
    }
    if (FristName.value === "") {
      FristName.style.backgroundColor = "pink";
      Alert.style.display = "block";
      DatosLlenos = false;
    }
    if (LastName.value === "") {
      LastName.style.backgroundColor = "pink";
      Alert.style.display = "block";
      DatosLlenos = false;
    }
    if (City.value === "") {
      City.style.backgroundColor = "pink";
      Alert.style.display = "block";
      DatosLlenos = false;
    }
    if (PostalCode.value === "") {
      PostalCode.style.backgroundColor = "pink";
      Alert.style.display = "block";
      DatosLlenos = false;
    }
    if (Pickastate.value === "Pick a state") {
      document.querySelector("select").style.background = "pink";
      DatosLlenos = false;
    }
    if (Message.value === "") {
      Message.style.backgroundColor = "pink";
      Alert.style.display = "block";
      DatosLlenos = false;
    }
    if (DatosLlenos === false);
  }

  function showAlert() {
    document.querySelector(".alert-danger").style.visibility = "visible";
  }
  form.addEventListener("submit", enviarDatos);
};
