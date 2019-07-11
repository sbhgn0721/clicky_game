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


  }



imageClick =  () => {
  let shuffledFriends = shuffleFriends(friends);
  this.setState({friends: shuffledFriends})
}

render () {
return (
     <div>
    <NavTabs />
    <Jumbotron />
    <Wrapper>
    {this.state.friends.map(friend => (
    <FriendCard 
    imageClick ={this.imageClick}
    image = {friend.image}
    />


    ))}

    </Wrapper>
   


    <Footer />
    </div>
   )
 }

}

export default App;
