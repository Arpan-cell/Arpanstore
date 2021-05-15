import {
  Button,
  Carousel,
  Container,
  Row,
  Col,
  Card,
  Media,
  Image,
  Form,
} from "react-bootstrap";
import img1 from "../Images/home.jpeg";
import ProduCtcategory from "./Products/Productcategory/Productcategory";
import Categorydetails from "../Component/Products/Categorydetails/Categorydetails";
import Tabs from "../Component/tabs";
import Photosd from "../Component/photosd";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";
import Header from "../Layout/Header/Header";
import React, { useEffect } from "react";
SwiperCore.use([EffectCoverflow, Pagination]);
export default function Home() {
  return (
    <div>
      <Header />
      <div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={img1} class="d-block w-100" alt="..." />
          </div>
        </div>
      </div>

      {/* swiper */}
      <div className="container">
        <div className="row">
          <h1 id="clients">What Clients Says About Us</h1>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="our-team">
              <div className="picture">
                <img
                  className="img-fluid"
                  src="https://picsum.photos/130/130?image=1027"
                />
              </div>
              <div className="team-content">
                <h3 className="name">Michele Miller</h3>
                <p className="title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  voluptates nisi dolores aperiam sit quod aliquid dolorem velit
                  quasi pariatur nemo dolore, vel quidem incidunt qui quibusdam
                  cumque voluptatum reiciendis?
                </p>
              </div>
              <ul className="social">
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-facebook"
                    aria-hidden="true"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-twitter"
                    aria-hidden="true"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-google-plus"
                    aria-hidden="true"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-linkedin"
                    aria-hidden="true"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="our-team">
              <div className="picture">
                <img
                  className="img-fluid"
                  src="https://picsum.photos/130/130?image=839"
                />
              </div>
              <div className="team-content">
                <h3 className="name">Patricia Knott</h3>
                <p className="title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  voluptates nisi dolores aperiam sit quod aliquid dolorem velit
                  quasi pariatur nemo dolore, vel quidem incidunt qui quibusdam
                  cumque voluptatum reiciendis?
                </p>
              </div>
              <ul className="social">
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-facebook"
                    aria-hidden="true"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-twitter"
                    aria-hidden="true"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-google-plus"
                    aria-hidden="true"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-linkedin"
                    aria-hidden="true"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="our-team">
              <div className="picture">
                <img
                  className="img-fluid"
                  src="https://picsum.photos/130/130?image=856"
                />
              </div>
              <div className="team-content">
                <h3 className="name">Justin Ramos</h3>
                <p className="title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  voluptates nisi dolores aperiam sit quod aliquid dolorem velit
                  quasi pariatur nemo dolore, vel quidem incidunt qui quibusdam
                  cumque voluptatum reiciendis?
                </p>
              </div>
              <ul className="social">
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-facebook"
                    aria-hidden="true"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-twitter"
                    aria-hidden="true"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-google-plus"
                    aria-hidden="true"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-linkedin"
                    aria-hidden="true"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="our-team">
              <div className="picture">
                <img
                  className="img-fluid"
                  src="https://picsum.photos/130/130?image=836"
                />
              </div>
              <div classNameName="team-content">
                <h3 className="name">Mary Huntley</h3>
                <p className="title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  voluptates nisi dolores aperiam sit quod aliquid dolorem velit
                  quasi pariatur nemo dolore, vel quidem incidunt qui quibusdam
                  cumque voluptatum reiciendis?
                </p>
              </div>
              <ul className="social">
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-facebook"
                    aria-hidden="true"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-twitter"
                    aria-hidden="true"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-google-plus"
                    aria-hidden="true"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-linkedin"
                    aria-hidden="true"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
