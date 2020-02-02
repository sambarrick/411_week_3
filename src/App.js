import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import { Container } from "@material-ui/core";

class App extends React.Component {
  state = {
    loggedIn: false
  };

  render() {
    let content = null;
    if (this.state.loggedIn == false) {
      content = (
        <div>
          <NavBar />
          <Login onLogin={() => this.setState({ loggedIn: true })} />{" "}
        </div>
      );
    } else if (this.state.loggedIn == true) {
      content = (
        <div>
          <NavBar />
          <Container maxWidth="lg">
            <Header />
            <Dashboard />
          </Container>
        </div>
      );
    }
    return content;
  }
}

export default App;
