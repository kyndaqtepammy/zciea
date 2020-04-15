import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import DashboardMain from './components/DashboardMain';
import { Provider } from "react-redux";
import store from "./store";
import './assets/vendors4/jquery-toggles/css/toggles.css'
import './assets/vendors4/jquery-toggles/css/themes/toggles-light.css'
import './assets/dist/css/style.css'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <DashboardMain/>
        </Router>
      </div>
    </Provider> 
  );
}

export default App;
