import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
//import styled from "styled-components";
import Header from "./components/main/Header";
import Home from "./components/main/Home";
import Footer from "./components/main/Footer";
import ContactForm from "./components/contact/ContactForm";
import Search from "./components/establishments/Search";
import EstablishmentDetails from "./components/establishments/EstablishmentDetails";
import Accommodation from "./components/main/Accommodation";
import NewEnquiry from "./components/enquiries/NewEnquiry";
import Enquiries from "./components/enquiries/Enquiries";
import Login from "./components/login/Login";
import Contacts from "./components/contact/Contacts";
import useLocalStorage from "react-use-localstorage";
import NewEstablishment from "./components/establishments/NewEstablishment";
import Establishments from "./components/establishments/Establishments";

function App() {
  // Similar to useState but first arg is key to the value in local storage.
  const [loggedIn, setLoggedIn] = useLocalStorage("loggedIn", false);
  console.log(loggedIn);

  return (
    <div>
      <Router>
        <Header setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
        <Switch>
          <Route path="/newestablishment" component={NewEstablishment}></Route>
          <Route
            path="/establishments"
            component={Establishments}
            exact
          ></Route>
          <Route path="/messages" component={Contacts}></Route>
          <Route path="/enquiries" component={Enquiries}></Route>
          <Route
            path="/login"
            render={(props) => (
              <Login {...props} setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
            )}
          ></Route>
          <Route path="/enquiry" component={NewEnquiry}></Route>
          <Route
            path="/establishments/:id"
            component={EstablishmentDetails}
          ></Route>
          <Route path="/search" component={Search}></Route>
          <Route path="/contact" component={ContactForm}></Route>
          <Route path="/accommodation" component={Accommodation}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
