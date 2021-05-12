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
import img6 from "../Images/myprofile.jpg";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import img7 from '../Images/user.png'

export default function Myprofile() {
  const user = localStorage.getItem("full_name");
  const user1 = localStorage.getItem("email");
  return (
      <>
      <img className='d-block w-100' src={img6} alt="" />
    <div class="page-content page-container" id="page-content">
      <div class="padding">
        <div class="row container d-flex justify-content-center">
          <div class="col-xl-6 col-md-12">
            <div class="card user-card-full">
              <div class="row m-l-0 m-r-0">
                <div class="col-sm-4 bg-c-lite-green user-profile">
                  <div class="card-block text-center text-white">
                    <div class="m-b-25">
                      {" "}
                      <img
                        src={img7}
                        class="img-radius"
                        alt="User-Profile-Image"
                      />{" "}
                    </div>
                    <Card.Title id="myprofiletitleM"> {user} </Card.Title>
                    <p>Customer profile</p>{" "}
                    <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                  </div>
                </div>
                <div class="col-sm-8">
                  <div class="card-block">
                    <h6 class="m-b-20 p-b-5 b-b-default f-w-600">
                      Information
                    </h6>
                    {localStorage.getItem("full_name") ? (
                      <>
                        <Card.Title> User Name:{user} </Card.Title>
                        <Card.Text>User Email:{user1}</Card.Text>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
