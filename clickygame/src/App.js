import React, { Component } from 'react';
import Wrap from "./components/wrap";
import Score from "./components/score";
import imgCard from "./components/imgCard";
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
      this.setState({ topscore: this.state.score }, function () {
        console.log(this.state.highscore);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over! Your score: ${this.state.score}`);
    this.setState({ score: 0 });
    return true;
  }
  // count clicks get card. if card is click add 1 to its count then randomize position. else return gameOver()
  countClick = id => {
    this.state.cards.find((c, i) => {
      if (c.id === id) {
        if (cards[i].count === 0) {
          cards[i].count = cards[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function () {
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  }

  // Map over this.state.cards and render a cardCard component for each card object
  render() {
    return (
      <Wrap>
        <Score score={this.state.score} highscore={this.state.highscore}>Clicky Game</Score>
        {this.state.cards.map(card => (
          <imgCard
            countClick={this.countClick}
            id={card.id}
            key={card.id}
            image={require("./image/" + card.image)}
          />
        ))}
      </Wrap>
    );
  }


};

export default App;
