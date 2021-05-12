import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductCate } from "../../../Actions/Product.action";
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

import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
// import Link from '@material-ui/core/Link';

function handleClick(event) {
  event.preventDefault("./home");
  console.info("You clicked a breadcrumb.");
}
export default function Productcategory() {
  // let pcdetails = match.params.pcname;
  const DispatchMethod = useDispatch();
  const ProductCategory = useSelector((state) => state.Productdata);
  console.log(ProductCategory);
  useEffect(() => {
    DispatchMethod(ProductCate());
  }, []);

  const cardinfo = [
    
      {image:
        "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
      {image:
        "https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
      {image:
        "https://images.pexels.com/photos/157827/pexels-photo-157827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
      {image:
        "https://images.pexels.com/photos/45917/pexels-photo-45917.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
    
  ]

  return (
    <>
      <div>
        <section>
          <div
            id="carouselExampleSlidesOnly"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://images.unsplash.com/photo-1584907797015-7554cd315667?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </section>

        <section id="sectionppp1">
          <Container>
            <Row>
              <Col lg="6">
                <h3>Product Catagory</h3>
              </Col>
              <Col lg="6">
                <Breadcrumbs aria-label="breadcrumb">
                  <Link color="inherit" as={Link} to="/Home">
                    Home
                  </Link>

                  <Typography color="textPrimary">Product Catagory</Typography>
                </Breadcrumbs>
              </Col>
            </Row>
          </Container>
        </section>

        <Container>
          <Row>
          
            {ProductCategory.AllCategories.map((e) => (
              <Col lg="6">
                <Card id="paductcatcard">
                
                  <Card.Body>
                    <Card.Title>{e}</Card.Title>
                    <Card.Img src={`${cardinfo.image}`} />
                    <Link to={`/Categorydetails/${e}`}>
                      <Button variant="primary">Click</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}
