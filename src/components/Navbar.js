import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {

  render() {

    const styleMenu = {
      backgroundColor: "#ffffff",
      borderRadius: 0,
      border: 0,
      boxShadow: 0,
    }

    const styleSegment = {
      backgroundColor: "#ffffff",
      borderRadius: 0,
      border: 0,
      boxShadow: "0px 0px 0px",
    }

    return (

      <Segment style={styleSegment}>
        <Menu pointing secondary style={styleMenu}>
          <Menu.Item header>Sort By</Menu.Item>
          <Menu.Item as={Link} to="/menu" > Menu 1 </Menu.Item>
          <Menu.Item as={Link} to="/menu" > Menu 2 </Menu.Item>
          <Menu.Item as={Link} to="/menu" > Menu 3 </Menu.Item>

        </Menu>
      </Segment>
    )
  }
}
