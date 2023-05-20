import React, { Component } from "react";
import { Button, Container, Grid, Header, Icon, Segment, Image } from 'semantic-ui-react'
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


  componentDidMount() {
    document.body.style.background = "linear-gradient(to right,  rgba(69,102,249,1) 0%,rgba(68,244,241,1) 100%)";
  }



  render() {


    return (

      <>
        <Navbar />

        <Grid columns={2} divided style={{ height: '100vh' }}>
          <Grid.Column>
            

          </Grid.Column>
          <Grid.Column verticalAlign='middle' style={{ backgroundColor: 'white', height: '65vh', padding: '0px 0px 0px 15%' }}>

          </Grid.Column>
        </Grid>


      </>
    );

  }
}

export default Home;