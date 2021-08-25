import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPass from "./pages/ForgotPass";

// import Home from "./pages/Home";
import Explore from "./pages/Explore";
import SearchResult from "./pages/SearchResult";
import FlightDetail from "./pages/FlightDetail";
import MyBooking from "./pages/MyBooking";
import PrivateRoute from "./components/PrivateRoute";
import MainNavbar from "./components/MainNavbar";
import { connect } from "react-redux";

function App(props) {
  const {onAuth} = props.auth
  return (
    <Router>
      {onAuth === false ? <MainNavbar /> : null}
      <Switch>
        <Route path="/" exact component={Explore} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forgotPass" component={ForgotPass} />
        <PrivateRoute path="/searchResult" >
        <SearchResult/>
        </PrivateRoute>
        {/* <Route path="/explore" component={Explore} /> */}
        <Route path="/flightDetail" component={FlightDetail} />
        <Route path="/mybooking" component={MyBooking} />
      </Switch>
    </Router>
  );
}
const mapStateToProps = state => ({
  auth: state.auth
})
export default connect(mapStateToProps)(App);
