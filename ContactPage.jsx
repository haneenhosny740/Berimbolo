import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Navbar from './Navbar'; // Ensure you have the Navbar component

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
    // You can add form submission logic here (e.g., API call)
  };

  return (
    <>
      <Navbar />
      <Container className="my-5">
        <Row className="g-4">
          {/* Contact Form Section */}
          <Col md={6} className="d-flex align-items-stretch">
            <div className="contact-card p-5 rounded shadow-xl bg-white w-100">
              <h4 className="mb-4 text-center">Send Us a Message</h4>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="shadow-sm border-0 rounded form-control-lg"
                  />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="shadow-sm border-0 rounded form-control-lg"
                  />
                </Form.Group>

                <Form.Group controlId="formMessage" className="mb-3">
                  <Form.Label>Your Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Enter your message here"
                    className="shadow-sm border-0 rounded form-control-lg"
                  />
                </Form.Group>

                <Button
                  variant="dark"
                  type="submit"
                  className="w-100 shadow-lg btn-lg mt-4 rounded-pill"
                >
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>

          {/* Contact Info Section */}
          <Col md={6} className="d-flex align-items-stretch">
            <div className="contact-card p-4 rounded shadow-xl bg-white w-100">
              <h4 className="mb-3">Contact Information</h4>
              <p><strong>Email:</strong> Berimbolo@securitysolutions.com</p>
              <p><strong>Phone:</strong> +1 234 567 890</p>
              <p><strong>Address:</strong> 28WQ+9F3, International Garden, Nasr City, Cairo Governorate, 4441430</p>

              {/* Map Section */}
              <h5 className="mt-4">Find Us</h5>
              <div className="embed-responsive embed-responsive-16by9 rounded">
                <iframe
                  title="Map Location"
                  className="embed-responsive-item"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.6848708978087!2d31.34124052492742!3d30.045897374922845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f7c38fc3531%3A0x689b1a620c8d8eea!2z2YXYr9ix2LPYqSBXRSDZhNmE2KrZg9mG2YjZhNmI2KzZitinINin2YTYqti32KjZitmC2YrYqSAtINmB2LHYuSDZhdiv2YrZhtipINmG2LXYsQ!5e0!3m2!1sar!2seg!4v1734943090596!5m2!1sar!2seg"
                  style={{ border: '0', width: '100%', height: '250px' }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Inline CSS (you can also create a separate CSS file for better maintainability) */}
      <style>{`
        .contact-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }

        .contact-card:hover {
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        body {
          font-family: 'Roboto', sans-serif;
        }

        h4 {
          font-family: 'Lora', serif;
          color: #333;
        }

        p {
          font-size: 1.1rem;
          line-height: 1.5;
          font-family: 'Roboto', sans-serif;
        }

        strong {
          font-weight: bold;
          color: #007BFF;
        }

        button {
          font-family: 'Roboto', sans-serif;
          font-weight: bold;
          transition: background-color 0.3s ease;
        }

        button:hover {
          background-color: #0056b3;
        }

        .form-control-lg {
          height: 50px;
          padding: 20px;
          font-size: 1.1rem;
        }

        .rounded-pill {
          border-radius: 50px;
        }
      `}</style>
    </>
  );
};

export default ContactPage;
