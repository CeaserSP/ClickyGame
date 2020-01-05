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
  // Calculate score and check if topscore should be updated and get allert end of game
  gameOver = () => {
    if (this.state.score > this.state.topscore) {
      this.setState({topscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over! Your score: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }
// count clicks get card. if card is click add 1 to its count then randomize position. else return gameOver()



};

export default App;
