import React from 'react';
import {
  Navbar, Nav, Container, Row, Col,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import './App.css';

const App = () => (
  <Router>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Mobile-First React</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="justify-content-end"
      >
        <Nav>
          <Nav.Item>
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to="forms">
              <Nav.Link>Forms</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to="lists">
              <Nav.Link>Lists</Nav.Link>
            </LinkContainer>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Container>
      <Row>
        <Col sm={3} md={2} className="sidebar">
          <Nav className="flex-column">
            <Nav.Item>
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to="forms">
                <Nav.Link>Forms</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to="lists">
                <Nav.Link>Lists</Nav.Link>
              </LinkContainer>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9} smOffset={3} md={10} mdOffset={2} className="content">
          <Route exact path="/" component={Home} />
        </Col>
      </Row>
    </Container>
  </Router>
);

export default App;
