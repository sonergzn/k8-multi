import React from 'react';
import logo from './logo.svg';
import videome from './videome.mp4'
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="App">
      <video src={videome} 
      width="600" 
      height="300" 
      controls="controls" 
      autoplay="true" />
        <div>
          <p> Gecmis olsun :)))) </p> <br/>
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
