import React from "react";
import {
  Button,
  Carousel,
  Container,
  Row,
  Col,
  Card,
  Image,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import { FaFacebookF } from "react-icons/fa";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";

export default function Footer() {
  return (
    <div>
      <footer id="footer1">
        <Row>
          <Col lg="3" md="3" sm="12">
            <Card id="card1">
              <Card.Body>
                <Card.Title className="t1">ABOUT</Card.Title>

                <Card.Text>
                  <Card.Link as={Link} to="/Contactus" id="cardlink1">
                    {" "}
                    Contact Us
                  </Card.Link>{" "}
                  <br />
                  <Card.Link id="cardlink1" as={Link} to='/Aboutus'>About Us</Card.Link> <br />
                  <Card.Link href="#" id="cardlink1">
                    Careers
                  </Card.Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg="3" md="3" sm="12">
            <Card id="card1">
              <Card.Body>
                <Card.Title className="t1">HELP</Card.Title>
                <Card.Text>
                  <Card.Link href="#" id="cardlink1">
                    Payments
                  </Card.Link>{" "}
                  <br />
                  <Card.Link href="#" id="cardlink1" as={Link} to='/Cart'>
                    {" "}
                    Shipping
                  </Card.Link>{" "}
                  <br />
                  <Card.Link href="#" id="cardlink1">
                    Cancellation & Returns
                  </Card.Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" md="3" sm="12">
            <Card id="card1">
              <Card.Body>
                <Card.Title className="t1"> POLICY</Card.Title>
                <Card.Text>
                  <Card.Link as={Link} to="/ReturnsPolicy" id="cardlink1">
                    Return Policy
                  </Card.Link>{" "}
                  <br />
                  <Card.Link href="#" id="cardlink1">
                    Terms Of Use
                  </Card.Link>{" "}
                  <br />
                  <Card.Link href="#" id="cardlink1">
                    Security
                  </Card.Link>{" "}
                  <br />
                  <Card.Link href="#" id="cardlink1">
                    Privacy
                  </Card.Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" md="3" sm="12">
            <Card id="card1">
              <Card.Body>
                <Card.Title className="t1">SOCIAL</Card.Title>
                <Card.Text>
                  <Card.Link href="#" id="cardlink1">
                    Facebook
                  </Card.Link>{" "}
                  <br />
                  <Card.Link href="#" id="cardlink1">
                    Twitter
                  </Card.Link>{" "}
                  <br />
                  <Card.Link href="#" id="cardlink1">
                    Youtube
                  </Card.Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col></Col>
        </Row>
      </footer>

      <div id="copyright">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <p id="foottext">©2020-2021 Arpan's Store</p>
            </Col>
            <Col lg="6" md="6" sm="12">
              <p id="foottext">
                {" "}
                (123) 456-789 - 1255-1258 email@domainname.com
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
