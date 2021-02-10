import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import UploadData from './components/pages/UploadData';
import Signin from './components/pages/Signin';
import Register from './components/Logingin/Register';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path='/' exact component={Home} />

          <Route path='/uploadData' component={UploadData} />

          <Route path='/signin' component={Signin} />
        </Switch>
        <Register/>
      </Router>
    </>
  );
}

export default App;
