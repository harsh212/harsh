import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'react-bootstrap';
import About from './Components/About';
import Contact from './Components/Contact';
import Resume from './Components/Resume';
import {Link,BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <div className="container-fluid">
    <BrowserRouter>
      <div className="row">
        <div className="col-sm-12 right">
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                  <ul class="nav navbar-nav">
                    <li class="active"><a href="#about"><span class="glyphicon glyphicon-home"></span> Home</a></li>
                    <li><a href="#resume"><span class="glyphicon glyphicon-info-sign"></span>About</a></li>
                    <li><a href="#contact"><span class="glyphicon glyphicon-envelope"></span>Contact-Me</a></li>
                  </ul>
                </div>
            </nav>
            <About/>
            <Resume/>
            <Contact/>
        </div>                        
      </div>
    </BrowserRouter>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
