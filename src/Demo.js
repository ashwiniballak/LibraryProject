import React from 'react';  
import ReactDOM from 'react-dom';  
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'  
import login from './Component/Login/Login'  
import dashboard from './Component/Main/Dashboard'  
  
const Demo = (  
  <Router>  
    <div>  
      <h1>React Router Example</h1>  
      <Route exact path="/" component={login} />  
      <Route path="/dashboard" component={dashboard} />  
    </div>  
  </Router>  
)  
ReactDOM.render(Demo, document.getElementById('root'));  
export default Demo.js;