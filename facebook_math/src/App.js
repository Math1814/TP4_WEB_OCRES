
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Bouton from './components/Bouton';
import Profil from './components/Profil';

const profils = [
  {
    nom: "Collin",
    prenom : "Jeanne",
    date_naiss : "24 Mai 1996",
    couleur : "black",
    last_post : "TP ",
    jaime : 0,
  },
  {
    nom: "Collin",
    prenom : "Martine",
    date_naiss : "12 juin 1998",
    couleur : "yellow",
    last_post : "DE",
    jaime : 0,
  },
  {
    nom: "Collin",
    prenom: "Claude",
    date_naiss : "02 septembre 1994",
    couleur : "pink",
    last_post : "WEB",
    jaime : 0,

  }
];

function App() {
  console.log(window.location.pathname); //si on peut voir l'url en haut
  var id=window.location.pathname[1] === undefined ? 0 : window.location.pathname[1]
  console.log(id)
  return (
    
      
      <Profil user= {profils[id]}/>
    
   
    
  );
}

export default App;