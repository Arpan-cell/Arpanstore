import React from 'react'
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import {Button,Carousel, Container,Row,Col,Card,Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img8 from '../Images/aboutus.jpeg'



import { GiWorld } from "react-icons/gi";
export default function Aboutus() {
    return (
        <div>
            <section id="sectionppp1">
         <Container>
           <Row>
           <Col lg="6">
             <h3>About us</h3>
           </Col>
           <Col lg="6">
           <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" as={Link} to='/Home'>
        Home
      </Link>
     
      
  <Typography color="textPrimary">Details</Typography>
    </Breadcrumbs>
           </Col>

           </Row>
         </Container>
         </section>

            <section>
                <Container>
                  <Row>
                     <Col lg="6"  xs={6}>
                     <Image className='d-block w-100' src={img8} rounded />
                        </Col>
                     <Col lg="6"  xs={6}>
                            <h2>Arpan's Store Trusted Online Shopping Site in the World</h2>
                            <p>Arpan's Store offers you flexible and responsive shopping experience.

Arpan's store is an eCommerce website which features millions of products, i.e. clothes, shoes, bags, electronic items and much more, with all at incredible prices.

One of the most popular on the web is shopping. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                              
                        </Col>




                  </Row>

                </Container>


            </section>

           
           
           
           
           
           
           
           
           
           <section>
            
            <Container>
                <Row>
               
               
          
                
</Row>
</Container>
           </section>

        </div>

       
    )
}