import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { subcatagory } from "../../../Actions/Product.action";
import { Card, Container, Row, Button, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
export default function Categorydetails({ match }) {
  let cdetails = match.params.cname;
  console.log(cdetails);
  const DispatchMethod = useDispatch();
  const ProductCategory2 = useSelector((state) => state.Productdata);
  console.log(ProductCategory2);
  useEffect(() => {
    DispatchMethod(subcatagory(cdetails));
  }, [DispatchMethod]);
  return (
    <>
     
      <div>
      <section id="sectionppp1">
         <Container>
           <Row>
           <Col lg="6">
             <h3>{cdetails}</h3>
           </Col>
           <Col lg="6">
           <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" as={Link} to='/Home'  id="linkheadC">
        Home
      </Link>
     
      <Typography color="textPrimary">Products</Typography>
    </Breadcrumbs>
           </Col>

           </Row>
         </Container>
         </section>

        <Container>
          <Row>
            {ProductCategory2.Specific_Categorydat.map((e) => (
              <Col md="4">
                <Card id="cardcat1">
                  <Card.Img variant="top" src={e.image} id="cardimg1" />
                  <Card.Body>
                    {/* <Card.Title>{e.id}</Card.Title> */}
                    <Card.Title id="card-title">{e.title}</Card.Title>
                    <Card.Title>Price:{e.price}$ </Card.Title>

                    <Row>
                      <Col lg="12">
                        <Link to={`/ProductDetails/${e.id}`} id="catlink1">
                          <Button variant="secondary" id="btn4">
                            Details
                          </Button>
                        </Link>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      {/* )} */}
    </>
  );
}
