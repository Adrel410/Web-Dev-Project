import './sass/App.scss';
import React from 'react';
import MainBody from "./components/MainBody";
import NavbarComponent from "./components/Navbar";
import Footer from "./components/Footer.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col><NavbarComponent></NavbarComponent></Col>
      </Row>
      <Row>
        <Col><MainBody></MainBody></Col>
      </Row>
      <Row>
        <Col><Footer></Footer></Col>
      </Row>
    </Container>
    
  );
}

export default App;
