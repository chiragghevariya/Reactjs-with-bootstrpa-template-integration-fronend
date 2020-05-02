import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import routeAll from "./route";
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Header from "./views/common/Header";
import Footer from "./views/common/Footer";
import {Helmet} from "react-helmet";
import 'bootstrap/dist/css/bootstrap.min.css';

const routes = routeAll();
ReactDOM.render(
  <Router>
    <Helmet>
      <title>Home</title>
      <meta content="" name="descriptison" />
      <meta content="" name="keywords" />
    </Helmet>
    <Header />
    {routes}
    <Footer />
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
