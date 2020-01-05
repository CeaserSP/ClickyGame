import React, { Component } from 'react';
import Alert from "./components/wrap";
import Alert from "./components/score";
import Alert from "./components/imgCard";
import cards from "./card.json";
import './App.css';

class App extends Component {

  state = {
    cards,
    score: 0
  };

};

export default App;
