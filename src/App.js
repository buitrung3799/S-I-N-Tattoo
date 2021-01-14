import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch , Route, Redirect} from 'react-router-dom';
import Navbar from './components/navbar';
import PageBody from './components/body';
import AboutUs from './components/about';
import Gallery from './components/gallery';
import Booking from './components/booking';
import Footer from './components/footer';

export default class App extends React.Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Redirect to="/body" />
          </Route>
          <Route path="/body">
            <PageBody />
          </Route>
          <Route path='/about'>
            <AboutUs />
          </Route>
          <Route path='/gallery'>
            <Gallery />
          </Route>
          <Route path='/booking'>
            <Booking />
          </Route>
        </Switch>
        <Footer />
      </div>
      </Router>
    );
  }
}