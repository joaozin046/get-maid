import React, { Component } from "react";
import { Button, Container, Header, Icon, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
//import { useAuth0 } from "@auth0/auth0-react";
//import LoginButton from "../components/LoginButton"; // Import the LoginButton component
//import LogoutButton from "../components/LogoutButton";
//import Profile from "../components/Profile";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }





  render() {

    const styleContainer = {
      width: '100%',
      height: '100vh', 
      background: "linear-gradient(to right,  rgba(69,102,249,1) 0%,rgba(68,244,241,1) 100%)"


    }


    return (
      <>
      <div style={styleContainer}>
      
    
        <Navbar />

        
        

        <Button as={Link} to="/menu" primary>Click Here</Button>
        </div>
      </>
    );

  }
}

export default Home;