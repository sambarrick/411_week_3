import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import OnlineSlider from "./components/OnlineSlider";
import MasterVolume from "./components/MasterVolume";
import SoundQuality from "./components/SoundQuality"
import Grid from '@material-ui/core/Grid';
import Dashboard from "./components/Dashboard";
import SystemNotifications from "./components/SystemNotifications"

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
          <Login />
          
          <Dashboard />

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
      <SystemNotifications />
      </div>
    );
  }
}

export default App;
