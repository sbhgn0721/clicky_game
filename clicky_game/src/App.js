import React from 'react';
import './App.css';
import NavTabs from './components/NavTabs/NavTabs';
import Footer from "./components/Footer/Footer";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import FriendCard from "./components/FriendCard/FriendCard";
import Wrapper from "./components/Wrapper/Wrapper";
import friends from "./friends.json";

//handle shuffle images
function shuffleFriends (array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


class App extends React.Component {
  state = {
    friends: friends,
    guessedResult: "",
    currentScore: 0,
    topScore: 0,
    clickedImage: []
    


  }


  //handle image click
  imageClick = id => {
    //if the image id cannot be found in the clickedImage array, which means the image has not been clicked before, then the socre increase by 1
    if (this.state.clickedImage.indexOf(id) === -1) {
      this.scoreIncrement();
      this.setState({clickedImage: this.state.clickedImage.concat(id)})
    
    }
    //if the image has been clicked before, the game will be reset
    else {
      this.gameReset();
    }

  }

  //define the function scoreIncrement
  scoreIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState ({
      currentScore: newScore,
      guessedResult: "You guessed correctly!"
    });
    //update topScore
    if (newScore >= this.state.topScore ) {
      this.setState ({topScore: newScore})
    }
    if (newScore === 12) {
      this.setState ({ guessedResult: "You Win!!!"}, function (){
        if(!alert("You win, game will be restart")){
          this.setState({currentScore:0, clickedImage:[]})
        }
      })
    }
    
      this.shuffleImages()
    
  }

  //define the function 
  gameReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      guessedResult: "You Lost!!!",
      clickedImage: []
    });
    this.shuffleImages()
  }


//define function shuffleImages
shuffleImages =  () => {
  let shuffledFriends = shuffleFriends(friends);
  this.setState({friends: shuffledFriends})
}

render () {
return (
     <div>
    <NavTabs 
     currentScore = {this.state.currentScore}
     topScore = {this.state.topScore}
     guessedResult = {this.state.guessedResult}

     />
    <Jumbotron />
    <Wrapper>
    {this.state.friends.map(friend => (
    <FriendCard 
    imageClick ={this.imageClick}
    scoreIncrement = {this.scoreIncrement}
    gameReset = {this.gameReset}
    shuffleImages = {this.shuffleImages}
    image = {friend.image}
    key={friend.id}
    id={friend.id}
    />


    ))}

    </Wrapper>
   


    <Footer />
    </div>
   )
 }

}

export default App;
