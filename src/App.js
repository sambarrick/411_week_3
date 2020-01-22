import React from "react";
import "./App.css";
import Button from '@material-ui/core/Button';
import {AppBar} from '@material-ui/core'
import NavBar from './components/NavBar';
import Switches from './components/Switches';
import Cards from './components/Cards';


class App extends React.Component {
 

  render() {
    return (
       <div>
          <NavBar />
          <Switches />
          <Cards />
      </div>
    );
  }
}

export default App;
