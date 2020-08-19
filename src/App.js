import React, { Component } from 'react';
import images from "./doodles.json";
import ImageCard from "./components/ImageCard";
import NavBar from "./components/Navbar";
import Header from "./components/Header";
import normalGrade from "./images/c.png";
import highGrade from "./images/a+.png";
import lowGrade from "./images/f.png";
import './App.css';
import "./components/ImageCard.css";

//function to shuffle array
const shuffleArray = (array) => {
  let counter = array.length;
  while(counter>0){
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
};

class App extends Component {
  state = {
    images,
    currentScore: 0,
    topScore: 0,
    result: "",
    clicked: [],
    grade: normalGrade,
    gameOver: false
  }

  //right when user loads the page, this will appear
  componentDidMount(){
    this.setState({result: "Homework #15"})
  }

  clickedPlayer = (id) => {
    if(!this.state.clicked.includes(id)){
      this.pointIncrease();
      this.state.clicked.push(id);
      this.setState({ gameOver:false });
    } else{
      this.resetGame();
    }
  }

  pointIncrease = () => {
    let score = this.state.currentScore + 1;
    if(score === this.state.images.length){
      this.setState({
        result: "You got the A+!",
        topScore: score,
        grade: highGrade,
        currentScore: 0,
        clicked: [],
        images,
        gameOver:false
      });
    } else if (score > this.state.topScore){
      this.setState({
        topScore: score,
        currentScore: score,
        result: "New Max Extra Credit!",
        grade: highGrade
      });
    } else {
      this.setState({
        currentScore: score,
        result: "On your way to an A!"
      });
    }
    this.resetIconArray();
  }

  resetGame = () => {
    this.setState({
      points: 0,
      currentScore: 0,
      topScore: this.state.topScore,
      result: "You failed! Try Again.",
      grade: lowGrade,
      clicked: [],
      images,
      gameOver: true
    });
    this.resetIconArray();
  }

  resetIconArray = () => {
    let newArray = shuffleArray(images);
    this.setState({
      images: newArray })
  }

  render(){
    return (
      <div className = "mainApp">
      <div className="container">
         <NavBar topScore={this.state.topScore} currentScore={this.state.currentScore} grade = {this.state.grade}/>
         <Header status = {this.state.result}/>
         <div className = 'main'>
        {this.state.images.map(images => (
          <ImageCard
        id = {images.id}
        key = {images.id}
        image = {images.image}
        clickedPlayer = {this.clickedPlayer}
        gameOver = {this.state.gameOver}
         />
        ))}
        </div>
      </div>
      </div>
    );
  }
}

export default App;
