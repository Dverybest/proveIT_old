import React from 'react';
import './App.css';
import Home from './pages/home/home';
import Test from './pages/takeTest/test'
import {
  Route,
  Switch,
  BrowserRouter
} from 'react-router-dom';
import TestResult from './pages/takeTest/testResult/result'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/take-test/test-result' component={TestResult} />
        <Route exact path='/take-test/:postId' component={Test} />
        <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;