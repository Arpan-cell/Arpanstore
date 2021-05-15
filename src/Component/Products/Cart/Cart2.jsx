import React from "react";
import { useSelector, useDispatch } from "react-redux";
import currencyFormatter from "currency-formatter";
import { BsDash, BsPlus } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { BsArrowLeft } from "react-icons/bs";
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
import Header from "../../../Layout/Header/Header";
import "./Cart1.css";
export default function Cart2() {
  const { products, totalqty, totalprice } = useSelector(
    (state) => state.CartData
  );

  const dispatchMethod = useDispatch();
  return (
    <>
      <Header />

      {products.length > 0 ? (
        <>
          <div className="container">
            <div id="body">
              <div class="card">
                <div class="row a3">
                  <div class="col-md-9 cart">
                    {products.map((product) => (
                      <div>
                        <div class="title">
                          <div class="row a3">
                            <div class="col"></div>
                          </div>
                        </div>
                        <div class="row a3 border-top border-bottom">
                          <div class="row a3 main align-items-center">
                            <div class="col-2">
                              <img class="img-fluid" src={product.image} />
                            </div>
                            <div class="col">
                              <div class="row a3 text-muted">
                                {product.category}
                              </div>
                              <div class="row a3">{product.title}</div>
                            </div>

                            <div class="col ">
                              {" "}
                              <span
                                className="point"
                                onClick={() =>
                                  dispatchMethod({
                                    type: "dec",
                                    payload: product.id,
                                  })
                                }
                              >
                                <BsDash />
                              </span>
                              <a href="#" class="border">
                                {product.qty}
                              </a>
                              <span
                                className="point"
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
                            <div class="col">
                              <span class="close">
                                {currencyFormatter.format(
                                  product.price * product.qty,
                                  {
                                    code: "USD",
                                  }
                                )}
                              </span>
                              <span
                                class="close point"
                                onClick={() =>
                                  dispatchMethod({
                                    type: "REMOVE",
                                    payload: product.id,
                                  })
                                }
                              >
                                <MdDeleteForever />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div class="back-to-shop">
                      <Link to="/Productcategory">
                        <BsArrowLeft />
                      </Link>
                      <span class="text-muted ">Back to shop</span>
                    </div>
                  </div>
                  <div class="col-md-3 summary">
                    <div>
                      <h5>
                        <b>Summary</b>
                      </h5>
                    </div>
                    <hr />
                    <div class="row a3">
                      <div class="col a1">ITEMS </div>
                      <div class="col text-right"> {totalqty}</div>
                    </div>
                    <div class="row a3 a2">
                      <div class="col">TOTAL PRICE</div>
                      <div class="col text-right">
                        {currencyFormatter.format(totalprice, {
                          code: "USD",
                        })}
                      </div>
                    </div>{" "}
                    {/* {products.length > 0 ? (
                  <>
                    
                    <Link to="/Checkout">
                      <button class="btn">CHECKOUT</button>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link>
                      <button class="btn" disabled={true}> CHECKOUT</button>
                    </Link>
                  </>
                )} */}
                    <Link to="/Checkout">
                      <button class="btn">CHECKOUT</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <h5 className="space">"Your cart is empty!"</h5>
        </>
      )}
    </>
  );
}
