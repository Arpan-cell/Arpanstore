import React from "react";
import Login from "../Auth/Login";
import Registration from "../Auth/Registration";
// import Header from "../Layout/Header/Header";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "../Component/Home";

import Protectedroutecart from "../Routing/Protectedroutecart";

import Footer from "../Layout/footer/Footer";
import ReturnsPolicy from "../Component/ReturnsPolicy";
import Protectedroute from "../Routing/Protectedroute";
import Productcategory from "../Component/Products/Productcategory/Productcategory";
import Categorydetails from "../Component/Products/Categorydetails/Categorydetails";
import Productdetails from "../Component/Products/Productdetails/Productdetails";
import FAQ from "../Component/FAQ";
import Cart2 from "../Component/Products/Cart/Cart2";
import Tabs from "../Component/tabs";
import Photosd from "../Component/photosd";
import Services from "../Component/services";
import Contactus from "../Component/Contactus";
import Addressform from "../Component/orderpage/Addressform";
import PaymentForm from "../Component/orderpage/PaymentForm";
import Checkout from "../Component/orderpage/Checkout";
import Myprofile from "../Component/Myprofile";
import Aboutus from "../Component/Aboutus";
import Help from "../Component/Help";
export default function Routing() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}

        <Switch>
          <Route path="/Home" component={Home} />
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
          <Route path="/Login" component={Login} />
          <Route path="/Registration" component={Registration} />
          <Route path="/ReturnsPolicy" component={ReturnsPolicy} />
          <Route path="/Productcategory" component={Productcategory} />
          <Route path="/Categorydetails/:cname" component={Categorydetails} />
          <Route path="/Productdetails/:pname" component={Productdetails} />
          <Route path="/FAQ" component={FAQ} />
          <Route path="/Contactus" component={Contactus} />
          <Route path="/Addressform" component={Addressform} />
          <Route path="/PaymentForm" component={PaymentForm} />
          {/* <Route path="/Orderpage" component={Orderpage} /> */}
          <Route path="/Checkout" component={Checkout} />
          <Route path="/Aboutus" component={Aboutus} />

          {/* <Route exact path='/Cart' component={Cart}/> */}
          <Route exact path="/Tabs" component={Tabs} />

          <Route exact path="/Protosd" component={Photosd} />
          <Route exact path="/Services" component={Services} />
          <Route exact path="/Help" component={Help} />
          <Route path="/Protectedroute" component={Protectedroute} />
          <Protectedroute path="/Myprofile" component={Myprofile} />

          <Protectedroutecart path="/Cart2" component={Cart2} />

          <Route path="/" render={() => <h1>Page Not Found</h1>} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}
