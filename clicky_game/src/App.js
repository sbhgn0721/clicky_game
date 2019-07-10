import React from 'react';
import './App.css';
import NavTabs from './components/NavTabs/NavTabs';
import Footer from "./components/Footer/Footer";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import FriendCard from "./components/FriendCard/FriendCard";
import Wrapper from "./components/Wrapper/Wrapper";
import friends from "./friends.json";


class App extends React.Component {
  state = {
    friends: friends
  }



render () {
return (
     <div>
    <NavTabs />
    <Jumbotron />
    <Wrapper>
    {this.state.friends.map(friend => (
    <FriendCard 
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
