import React from "react";
import { useSelector, useDispatch } from "react-redux";
import currencyFormatter from "currency-formatter";
import { BsDash, BsPlus } from "react-icons/bs";
import { BsReverseBackspaceReverse } from "react-icons/bs";
import img2 from "../../../Images/cart.jpeg";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Image,
  Carousel,
  Accordion,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
const Cart = () => {
  const { products, totalqty, totalprice } = useSelector(
    (state) => state.CartData
  );

  const dispatchMethod = useDispatch();

  return (
    <div>
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img className="d-block w-100" src={img2} alt="..." />
          </div>
        </div>
      </div>
      <div className="cart">
        <section id="sectionppp1">
          <Container>
            <Row>
              <Col lg="6">
                <h3>Cart</h3>
              </Col>
              <Col lg="6">
                <Button
                  variant="contained"
                  color="primary"
                  as={Link}
                  to="/Home"
                  id="btn"
                >
                  Home
                </Button>

                <Button
                  variant="contained"
                  color="primary"
                  as={Link}
                  to="/Productcategory"
                  id="btn"
                >
                  Shopping Continue
                </Button>
              </Col>
            </Row>
          </Container>
        </section>

        <div className="container">
          <h3>Your cart</h3>
          {products.length > 0 ? (
            <>
              <div className="row">
                <div className="col-9 col-md-9 col-sm-9">
                  <div className="cart__heading">
                    <div className="row">
                      <div className="col-2">Picture</div>
                      <div className="col-2 ">Name</div>
                      <div className="col-2 ">Price</div>
                      <div className="col-2 ">Inc/Dec</div>
                      <div className="col-2 ">Total Price</div>
                      <div className="col-2 ">Remove</div>
                    </div>
                  </div>
                  {products.map((product) => (
                    <div className="row verticalAlign" key={product.id}>
                      <div className="col-2 ">
                        <div className="cart__image">
                          <img src={product.image} alt="" />
                        </div>
                      </div>
                      <div className="col-2 ">
                        <div className="cart__name">{product.title}</div>
                      </div>
                      <div className="col-2 ">
                        <div className="cart__price">
                          {currencyFormatter.format(product.price, {
                            code: "USD",
                          })}
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="details__info cart__incDec">
                          <div className="details__incDec">
                            <span
                              className="dec qty"
                              onClick={() =>
                                dispatchMethod({
                                  type: "dec",
                                  payload: product.id,
                                })
                              }
                            >
                              <BsDash />
                            </span>
                            <span className="qty">{product.qty}</span>
                            <span
                              className="inc qty"
                              onClick={() =>
                                dispatchMethod({
                                  type: "inc",
                                  payload: product.id,
                                })
                              }
                            >
                              <BsPlus />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-2 ">
                        <div className="cart__total text-center">
                          {currencyFormatter.format(
                            product.price * product.qty,
                            {
                              code: "USD",
                            }
                          )}
                        </div>
                      </div>
                      <div className="col-2">
                        <div
                          className="cart__remove"
                          onClick={() =>
                            dispatchMethod({
                              type: "REMOVE",
                              payload: product.id,
                            })
                          }
                        >
                          <BsReverseBackspaceReverse />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="col-3 summary-col">
                  <div className="summary">
                    <div className="summary__heading">Summary</div>
                    <div className="summary__details">
                      <div className="row mb-10">
                        <div className="col-6">Total Items:</div>
                        <div className="col-6">{totalqty}</div>
                      </div>
                      <div className="row mb-10 ">
                        <div className="col-6">Total Price</div>
                        <div className="col-6">
                          {currencyFormatter.format(totalprice, {
                            code: "USD",
                          })}
                        </div>
                      </div>

                      <Link to="/Checkout" variant="body2">
                        {
                          <button type="button" className="checkout">
                            Checkout
                          </button>
                        }
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            "Your cart is empty!"
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;

// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import currencyFormatter from "currency-formatter";
// import { BsDash, BsPlus } from "react-icons/bs";
// import { BsReverseBackspaceReverse } from "react-icons/bs";
// import img2 from "../../../Images/cart.jpeg";
// import {
//   Container,
//   Row,
//   Col,
//   Card,
//   Button,
//   Image,
//   Carousel,
//   Accordion,
// } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// export default function Cart() {
//   const { products, totalqty, totalprice } = useSelector(
//     (state) => state.CartData
//   );
//   const dispatchMethod = useDispatch();
//   return (
//     <>
//       <div class="col">
//         <h4>
//           <b>Shopping Cart</b>
//         </h4>
//       </div>
//       {products.length > 0 ? (
//         <>
//           {products.map((product) => (
//             <div id="body">
//               <div class="card">
//                 <div class="row">
//                   <div class="col-md-8 cart">
//                     <div class="title">
//                       <div class="row">
//                         <div class="col align-self-center text-right text-muted">
//                           {totalqty}
//                         </div>
//                       </div>
//                     </div>
//                     <div class="row border-top border-bottom">
//                       <div class="row main align-items-center">
//                         <div class="col-2">
//                           <img class="img-fluid" src={product.image} />
//                         </div>
//                         <div class="col">
//                           <div class="row text-muted">{product.title}</div>
//                           <div class="row">{product.title}</div>
//                         </div>
//                         <div class="col">
//                           {" "}
//                           <a
//                             href="#"
//                             onClick={() =>
//                               dispatchMethod({
//                                 type: "dec",
//                                 payload: product.id,
//                               })
//                             }
//                           >
//                             -
//                           </a>
//                           <a href="#" class="border">
//                             1
//                           </a>
//                           <a
//                             href="#"
//                             onClick={() =>
//                               dispatchMethod({
//                                 type: "inc",
//                                 payload: product.id,
//                               })
//                             }
//                           >
//                             +
//                           </a>{" "}
//                         </div>
//                         <div class="col">
//                           {currencyFormatter.format(product.price, {
//                             code: "USD",
//                           })}
//                           <span
//                             class="close"
//                             onClick={() =>
//                               dispatchMethod({
//                                 type: "REMOVE",
//                                 payload: product.id,
//                               })
//                             }
//                           >
//                             &#10005;
//                           </span>
//                         </div>
//                       </div>
//                     </div>

//                     <div class="back-to-shop">
//                       <a href="#">&leftarrow;</a>
//                       <span class="text-muted">Back to shop</span>
//                     </div>
//                   </div>
//                   <div class="col-md-4 summary">
//                     <div>
//                       <h5>
//                         <b>Summary</b>
//                       </h5>
//                     </div>
//                     <hr />
//                     <div class="row">
//                       <div class="col a1">{totalqty}</div>
//                     </div>
//                     <form>
//                       <p>GIVE CODE</p>{" "}
//                       <input id="code" placeholder="Enter your code" />
//                     </form>
//                     <div class="row a2">
//                       <div class="col">TOTAL PRICE</div>
//                       <div class="col text-right">&euro; 137.00</div>
//                     </div>{" "}
//                     <button class="btn">
//                       <Link to="/Checkout" variant="body2">
//                         {
//                           <button type="button" className="checkout">
//                             Checkout
//                           </button>
//                         }
//                       </Link>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </>
//       ) : (
//         "Your cart is empty!"
//       )}
//     </>
//   );
// }
