import User from '../User';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import coffee from '../../assets/coffee.png';
import journal from '../../assets/journal.png';

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" data-testid="bootstrap-navbar">
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

        <a href={'/'} data-testid="navlink-home">home</a>

        <a href={'/my-recipes'} data-testid="navlink-my-recipes">my recipes</a>

        <a href={'/all-recipes'} data-testid="navlink-all-recipes">all recipes</a>

        <a href={'/ratings'} data-testid="navlink-ratings">ratings</a>

        <a href={'/login'} data-testid="navlink-login">login</a>

        <a href={'/register'} data-testid="navlink-register">register</a>
      </Container>
    </Navbar>
  );
}

export default Navigation;
