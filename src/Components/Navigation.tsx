import User from './User';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import coffee from '../assets/coffee.png';
import journal from '../assets/journal.png';

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" data-testid="navigation">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={coffee}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          <img
            alt=""
            src={journal}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          BrewJournal
        </Navbar.Brand>
      </Container>
      <Container className={'d-flex p-2'}>
        <User variant={'chip'} />

        <a href={'/'}>home</a>

        <a href={'/my-recipes'}>my recipes</a>

        <a href={'/all-recipes'}>all recipes</a>

        <a href={'/ratings'}>ratings</a>

        <a href={'/login'}>login</a>

        <a href={'/register'}>register</a>
      </Container>
    </Navbar>
  );
}

export default Navigation;
