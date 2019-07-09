import React from 'react';
import './App.css';
import NavTabs from './components/NavTabs/NavTabs';
import Footer from "./components/Footer/Footer";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import FriendCard from "./components/FriendCard/FriendCard";
import Wrapper from "./components/Wrapper/Wrapper";

 function App () {
   return (
     <div>
    <NavTabs />
    <Jumbotron />
    <Wrapper>
    
    <FriendCard />

    </Wrapper>
   


    <Footer />
    </div>
   )
 }

export default App;
