import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "../components/Footer";
import MainNavbar from "../components/MainNavbar";
import PrivateRoute from "../components/PrivateRoute";

import BookingDetail from "../pages/BookingDetail";
import Explore from "../pages/Explore";
import ForgotPass from "../pages/ForgotPass";
import FlightDetail from "../pages/FlightDetail";
import Login from "../pages/Login";
import MyBooking from "../pages/MyBooking";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import ResetPassword from "../pages/ResetPassword";
import SearchResult from "../pages/SearchResult";

function Routes({ auth }) {
  const { onAuth } = auth;
  // console.log(onAuth);

  return (
    <Router>
      {onAuth === false && <MainNavbar />}

      <Switch>
        <Route path="/" exact component={Explore} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forgotPass" exact component={ForgotPass} />
        <Route path="/forgotPass/reset" component={ResetPassword} />
        <PrivateRoute path="/searchResult">
          <SearchResult />
        </PrivateRoute>
        {/* <Route path="/explore" component={Explore} /> */}
        <Route path="/flightDetail/:id" component={FlightDetail} />
        <Route path="/bookingDetail" component={BookingDetail} />
        <Route path="/myBooking" component={MyBooking} />
        <Route path="/profile" component={Profile} />
      </Switch>
      <Footer />
    </Router>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Routes);
