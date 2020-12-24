import React, { useState } from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const NavMenu = () => {
  return (
    <Menu size="massive" widths={10} fixed="top">
      <Menu.Item as={Link} to='/'>
        <Menu.Header>Home</Menu.Header>
      </Menu.Item>
      <Menu.Item as={Link} to='/about'>
        <Menu.Header>About</Menu.Header>
      </Menu.Item>
      <Menu.Item as={Link} to='/projects'>
        <Menu.Header>Projects</Menu.Header>
        {/* <Menu.Menu>
          <Menu.Item as={Link} to='/projects/art_sorting' 
            name="art_sorting"/>
          <Menu.Item as={Link} to='/projects/distributed_drawing'
            name="distributed_drawing"/>
          <Menu.Item as={Link} to='/projects/procedural_mazes'
            name="procedural_mazes"/>
          <Menu.Item as={Link} to='/projects/drone_simulator'
            name="drone_simulator"/>
          <Menu.Item as={Link} to='/projects/magikart'
            name="magikart"/>
          <Menu.Item as={Link} to='/projects/halomod'
            name="halomod"/>
        </Menu.Menu> */}
      </Menu.Item>
      <Menu.Item as={Link} to='/resume'>
        <Menu.Header>Resume</Menu.Header>
      </Menu.Item>
      <Menu.Item as={Link} to='/contact'>
        <Menu.Header>Contact</Menu.Header>
      </Menu.Item>
    </Menu>
  )
}

export default NavMenu;