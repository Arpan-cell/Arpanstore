import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Image,
  Carousel,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import img4 from '../Images/service.jpg'
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

// icon
import { FaShippingFast } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";

export default function services() {
  return (
    <div>
      <Image
      className='img4 w-100'
        src={img4}
        fluid
      />
      <section id="sectionppp1">
        <Container>
          <Row>
            <Col lg="6">
              <h3>Services</h3>
            </Col>
            <Col lg="6">
              <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" as={Link} to="/Home">
                  Home
                </Link>

                <Typography color="textPrimary">Services</Typography>
              </Breadcrumbs>
            </Col>
          </Row>
        </Container>
      </section>

      <div>
        <section>
          <h2 id="headingservice">
            {" "}
            <FaShippingFast /> Shipping Times and Costs
          </h2>

          <li className="li2">
            Complimentary ground shipping within 1 to 7 business days
          </li>
          <li className="li2">
            In-store collection available within 1 to 7 business days
          </li>
          <li className="li2">
            Next-day and Express delivery options also available
          </li>
          <li className="li2">
            Purchases are delivered in an orange box tied with a Bolduc ribbon,
            with the exception of certain items
          </li>
          <li className="li2">
            See the delivery FAQs for details on shipping methods, costs and
            delivery times
          </li>
        </section>
        <section>
          <h2 id="headingservice">
            {" "}
            <GiMoneyStack /> Payment Methods
          </h2>

          <li className="li2">
            Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa
            Electron. The total will be charged to your card when the order is
            shipped.
          </li>
          <li className="li2">
            {" "}
            Xton features a Fast Checkout option, allowing you to securely save
            your credit card details so that you don't have to re-enter them for
            future purchases.
          </li>
          <li className="li2">
            {" "}
            Xton features a Fast Checkout option, allowing you to securely save
            your credit card details so that you don't have to re-enter them for
            future purchases.
          </li>
          <li className="li2">
            PayPal: Shop easily online without having to enter your credit card
            details on the website.Your account will be charged once the order
            is completed. To register for a PayPal account, visit the website
            paypal.com.
          </li>
        </section>
        <section>
          <h2 id="headingservice">
            {" "}
            <FaShippingFast /> Shipping Times and Costs
          </h2>

          <li className="li2">
            Complimentary ground shipping within 1 to 7 business days
          </li>
          <li className="li2">
            In-store collection available within 1 to 7 business days
          </li>
          <li className="li2">
            Next-day and Express delivery options also available
          </li>
          <li className="li2">
            Purchases are delivered in an orange box tied with a Bolduc ribbon,
            with the exception of certain items
          </li>
          <li className="li2">
            See the delivery FAQs for details on shipping methods, costs and
            delivery times
          </li>
        </section>
      </div>
    </div>
  );
}
