import React, { Component } from 'react';
import Wrap from "./components/wrap";
import Score from "./components/score";
import Card from "./components/Card";
import cards from "./card.json";
import './App.css';

class App extends Component {

  state = {
    cards: cards,
    pickedCards:[],
    score: 0,
    topscore: 0,
    alert: ""
  };

  handlePicked = event => {
    // document.getElementById('foo').addEventListener('keyup', e => {
    //   let val = e.target.value.toLowerCase();
    const id = this.state.cards.find(item => item.id);
  // });
    console.log(id)
    this.shuffleTeam()
    this.checkGuess(id, this.updateTopScore)
  }

  shuffleTeam = () => {
    this.setState(this.state.cards = this.shuffleArray(this.state.cards))
  }

  checkGuess = (id, cb) => {
    const newState = { ...this.state };
    if (newState.pickedCards.includes(id)) {
      newState.alert = `YOU ALREADY PICKED HIM!`
      newState.pickedCards = []
      this.setState(this.state = newState)
    } else {
      newState.pickedCards.push(id)
      newState.alert = `GOOD CHOICE!`
      this.setState(this.state = newState)
    }
    cb(newState, this.alertChamp)
  }

  updateTopScore = (newState, cb) => {
    if (newState.pickedCards.length > newState.topScore) {
      newState.topScore++
      this.setState(this.state = newState)
    }
    cb(newState)
  }

  alertChamp = (newState) => {
    if (newState.pickedCards.length === 9) {
      newState.alert = "CHAMPION!";
      newState.pickedCards = [];
      this.setState(this.state = newState)
    }
  }
  shuffleArray = (a) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }
  

  // Map over this.state.cards and render a cardCard component for each card object
  render() {
    return (
      <Wrap>
        <Score score={this.state.pickedCards.length} topscore={this.state.topscore}>Clicky Game</Score>
        {this.state.cards.map(card => (
          <Card
            // countClick={this.countClick}
            id={card.id}
            key={card.id}
            image={require("./image/" + card.image)}
            handlePicked={this.handlePicked}
          />
        ))}
      </Wrap>
    );
  }


};

export default App;
