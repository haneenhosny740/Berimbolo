import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3">
      <Container className="text-center">
        <p>&copy; 2024 Security Solutions, <b>Berimbolo.</b></p>
        <p>
          <a href="#facebook" className="text-white me-3">Facebook</a>
          <a href="#twitter" className="text-white me-3">Twitter</a>
          <a href="#linkedin" className="text-white">LinkedIn</a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
