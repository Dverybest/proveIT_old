import React from 'react';
import './App.css';
import Home from './pages/home/home';
import Test from './pages/takeTest/test'
import {Route,Switch,BrowserRouter} from 'react-router-dom';
import Quiz from './pages/takeTest/quiz';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/take-test/:postId' component={Test}/>
        <Route exact path='/' component={Home}/>
        {/* <Route exact path='/quiz' component={QuizModal}/> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
