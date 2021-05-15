import { Container } from "@material-ui/core";
import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "react-router-dom";
import Header from "../Layout/Header/Header";
import { FaLocationArrow } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { FaFax } from "react-icons/fa";
import { Ri24HoursFill } from "react-icons/ri";

import { FaFacebookF } from "react-icons/fa";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import img5 from '../Images/contact.jpg'
export default function Contactus() {
  return (
    <div>
      <Header />
      <img className='d-block w-100' src={img5} alt="" />
      <section id="sectionppp1">
        <Container>
          <Row>
            <Col lg="6">
              <h3>Contact us</h3>
            </Col>
            <Col lg="6">
              <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" as={Link} to="/Home">
                  Home
                </Link>

                <Typography color="textPrimary">Contact us</Typography>
              </Breadcrumbs>
            </Col>
          </Row>
        </Container>
      </section>
      <Container>
        <Row>
          <div id="part1CU">
            <Col lg="6">
              <h3>Here To Help</h3>
              <p>
                Have a question? You may find an answer in our FAQs. But you can
                also contact us.
              </p>
              <h6>
                {" "}
                <FaLocationArrow /> Location: Wonder Street, USA, New York
              </h6>
              <h6>
                {" "}
                <FiPhoneCall />
                Call Us: +1-541-754-3010
              </h6>
              <h6>
                <AiOutlineMail />
                Email Us: hello@livani.com
              </h6>
              <h6>
                <FaFax />
                Fax: +123456789
              </h6>
            </Col>
            <br />
            <Col lg="6">
              <h3>Opening Hours:</h3>

              
              <h6>
                <Ri24HoursFill />
               24/7
              </h6>
            </Col>{" "}
            <br />
            <Col lg="6">
              <h3>Follow Us:</h3>

              <FaFacebookF id="ficon" />
              <TiSocialLinkedin id="ficon" />
              <TiSocialTwitter id="ficon" />
              <TiSocialInstagram id="ficon" />
              <TiSocialYoutube id="ficon" />
            </Col>
          </div>

          <Col lg="6" id="part1CU">
            <h3>Drop Us A Line</h3>
            <p>
              We're happy to answer any questions you have or provide you with
              an estimate. Just send us a message in the form below with any
              questions you may have.
            </p>

            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Full Name" /> <br />
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                />{" "}
                <br />
                <Form.Label>Phone Number*</Form.Label>
                <Form.Control type="number" placeholder="+91" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Feedback Level</Form.Label>
                <Form.Control as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect2"></Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>YOUR MESSAGE *</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Link to='/Home'>
              <Button variant="primary" type="submit">
                Submit
              </Button>
              </Link>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
