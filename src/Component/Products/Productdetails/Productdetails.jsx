import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  productdetails,
  
} from "../../../Actions/Product.action";
import { useHistory, Link } from "react-router-dom";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { CartDet } from "../../../Actions/Cart.action";
import { BsDash } from "react-icons/bs";
import { BsPlus } from "react-icons/bs";
import { toast } from "react-toastify";
import Typography from "@material-ui/core/Typography";
import Header from "../../../Layout/Header/Header";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
// import Link from '@material-ui/core/Link';
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export default function ProductDetails({ match }) {
  const [qty, setQty] = useState(1);
  const history = useHistory();

  let pdetails = match.params.pname;
  console.log(pdetails);
  const DispatchMethod = useDispatch();
  const ProductCategory3 = useSelector((state) => state.Productdata);
  console.log(ProductCategory3);
  const product = ProductCategory3.pdata;
  useEffect(() => {



    DispatchMethod(productdetails(pdetails));
    
  }, [DispatchMethod]);

  const dec = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };
  const notify = () => {
    toast.success('Product added to cart', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  };
  // function AddToCart(ProductDet){
  //   DispatchMethod(CartDet(ProductDet));
  //   history.push('/Cart')
  //   }
  
    
  
  return (
    <>
    <Header />
      {/* {Object.keys(ProductCategory3).length === 0 ? (
        <div className="loader">Loading...</div>
      ) : ( */}
        <div>
          <section id="sectionppp1">
            <Container>
              <Row>
                <Col lg="6">
                  <h3>Product Details</h3>
                </Col>
                <Col lg="6">
                  <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" as={Link} to="/Home">
                      Home
                    </Link>

                    <Link
                      color="inherit"
                      href="/getting-started/installation/"
                      as={Link}
                      to="/Productcategory"
                    >
                      Continue Shopping
                    </Link>
                    <Typography color="textPrimary">Details</Typography>
                  </Breadcrumbs>
                </Col>
              </Row>
            </Container>
          </section>

          <div className="container">
            <div className="card1">
              <div className="container-fliud">
                <div className="wrapper row">
                  <div className="preview col-md-6">
                    <div className="preview-pic tab-content">
                      <div className="tab-pane active" id="pic-1">
                        <img src={product.image} id="pdetailsimg" />
                      </div>
                    </div>
                  </div>
                  <div className="details col-md-6">
                    <h3 className="product-title">{product.title}</h3>
                    <div className="rating">
                      <span className="review-no">{product.category}</span>
                    </div>
                    <p className="product-description">{product.description}</p>

                    <div className="details__info">
                      <div className="details__incdec">
                        <span className="dec" onClick={dec}>
                          
                          <BsDash />
                        </span>
                        <span className="qty">{qty}</span>
                        <span className="inc" onClick={() => setQty(qty + 1)}>
                          <BsPlus />
                        </span>
                      </div>

                      <h4 className="price">
                        current price: <span>${product.price}</span>
                      </h4>

                      <button
                        className="add-to-cart btn btn-default"
                        onClick={() => {
                          notify();
                          DispatchMethod({
                            type: "ADD_TO_CART",
                            payload: { product, qty },
                          });
                        }}
                      >
                        add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* )} */}
    </>
  );

}
