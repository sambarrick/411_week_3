import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import OnlineSlider from "./components/OnlineSlider";
import MasterVolume from "./components/MasterVolume";
import SoundQuality from "./components/SoundQuality"
import Grid from '@material-ui/core/Grid';
import Dashboard from "./components/Dashboard";
import Header from "./components/Header"

class App extends React.Component {
  state = {
    login: false
  }

  render() {

    let content = null;
    if(this.state.login == false){
      content = <div><NavBar /> <Login onLogin={ () => this.setState({login: true}) }/> </div>
    } else if(this.state.login == true) {
      content = <div>  
        <NavBar /> 
        <Header /> 
              <Grid
  container
  direction="row"
  justify="space-evenly"
  alignItems="center"
>
        <OnlineSlider />
        <MasterVolume />
        <SoundQuality />
          </Grid>
          <Dashboard />
        </div>
    }
    return (content);
  }
}

export default App;
