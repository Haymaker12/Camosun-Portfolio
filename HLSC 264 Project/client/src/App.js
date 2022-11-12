import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/MainNavbar';
import Footer from './components/layout/Footer';
import Projects from './components/layout/Projects';
import SelectedProject from './components/plugins/SelectedProject';
import Programs from './components/layout/Programs';
import Profile from './components/layout/Profile.js';
import AboutUs from './components/layout/AboutUs';
import Sponsors from './components/layout/Sponsors';
import Keynote from './components/layout/Keynote';
import Workshops from './components/layout/Workshops';
import FAQ from './components/layout/FAQ';
import Login from './components/auth/Login';
import Form from './components/layout/Form';
import Credits from './components/layout/Credits';

import 'bootstrap/dist/css/bootstrap.min.css';
// To be changed based on front end
import './App.css';

const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <section className="container">
        <Switch>
          <Route exact path="/" component={ Landing } />
          <Route exact path="/projects" component={ Projects } />
          <Route exact path="/project/:_id" component={ SelectedProject } />
          <Route exact path="/sponsors" component={ Sponsors } />
          <Route exact path="/keynote" component={ Keynote } />
          <Route exact path="/workshops" component={ Workshops } />
          <Route exact path="/programs"  component={ Programs } />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/About-The-Festival" component={ AboutUs } />
          <Route exact path="/faq" component={ FAQ } />
          <Route exact path="/login" component={ Login } />
          <Route exact path="/form" component={ Form } />
          <Route exact path="/credits" component={ Credits } />
        </Switch>
      </section>
      <Footer />
    </Fragment>
  </Router>
);

export default App;
