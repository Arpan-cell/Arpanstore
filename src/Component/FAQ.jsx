import React from 'react'
import { Container, Row, Col,Card,Button,Image,Carousel,Accordion } from "react-bootstrap";
import { Link } from 'react-router-dom';
import img3 from '../Images/faq.jpg'
import Header from "../Layout/Header/Header";
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
export default function FAQ() {
    return (
        <div>
          <Header />
            <Image className='img3 w-100' src={img3} fluid />
             
            <section id="sectionppp1">
         <Container>
           <Row>
           <Col lg="6">
             <h3>FAQ</h3>
           </Col>
           <Col lg="6">
           <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" as={Link} to='/Home'>
        Home
      </Link>
     
      <Typography color="textPrimary">FAQ</Typography>
    </Breadcrumbs>
           </Col>

           </Row>
         </Container>
         </section>

         {/* <section>
          <Container>
          <Row>
           <Col lg="4">
           
           <Card style={{ width: '18rem' }} id="faqcard1">
     
        <Card.Body>
       <Card.Title id="faqtitle">Pricing & Plans</Card.Title>
          
         </Card.Body>
          </Card>
            
             </Col>
           <Col lg="4">
           
           <Card style={{ width: '18rem' }} id="faqcard1">
      
        <Card.Body>
        <Card.Title id="faqtitle">Getting Started</Card.Title>
          </Card.Body>
          </Card>
            
             
             
             </Col>
           <Col lg="4">
           
           <Card style={{ width: '18rem' }} id="faqcard1">
      
        <Card.Body>
       <Card.Title id="faqtitle">Sales Question</Card.Title>
          
         </Card.Body>
          </Card>
            
             </Col>
           
           
           <Col lg="4">
           
           <Card style={{ width: '18rem' }} id="faqcard1">
      
        <Card.Body>
       <Card.Title id="faqtitle">General Guidee</Card.Title>
         
         </Card.Body>
          </Card>
            
             </Col>
           <Col lg="4">
           
           <Card style={{ width: '18rem' }} id="faqcard1">
      
        <Card.Body>
       <Card.Title id="faqtitle"> Guidee</Card.Title>
         
         </Card.Body>
          </Card>
            
             </Col>
           <Col lg="4">
           
           <Card style={{ width: '18rem' }} id="faqcard1">
      
        <Card.Body>
       <Card.Title id="faqtitle">Usage Guides</Card.Title>
         
         </Card.Body>
          </Card>
            
             </Col>
            
            </Row>
         </Container>
         </section> */}


         <Container>
            <Accordion id="faqA">
  
    <Card.Header id="faqAc">
      <Accordion.Toggle as={Button} variant="link" eventKey="0" id="faqb">
        What Shipping methods are available?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  
 
    <Card.Header id="faqAc">
      <Accordion.Toggle as={Button} variant="link" eventKey="1" id="faqb">
      What Shipping methods are available?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
    
    <Card.Header id="faqAc">
      <Accordion.Toggle as={Button} variant="link" eventKey="2" id="faqb">
      What Shipping methods are available?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
    
    <Card.Header id="faqAc">
      <Accordion.Toggle as={Button} variant="link" eventKey="3" id="faqb">
      What Shipping methods are available?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="3">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
    
    
    
    
    
 
</Accordion>
</Container>
           
            
        </div>
    )
}
