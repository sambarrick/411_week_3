import React, { Component } from "react";
import OnlineSlider from "./OnlineSlider";
import MasterVolume from "./MasterVolume";
import SoundQuality from "./SoundQuality";

class Dashboard extends Component {
  state = {
    notifications: [],
    onlinestatus: true,
    mastervolume: 20,
    soundquality: "normal"
  };

  toggleNotification = msg => {
    const msgDisplay = this.state.notifications.indexOf(msg);

    //ternary operator!!! Wooo!!!!!!
    this.state.notifications.includes(msg)
      ? this.state.notifications.splice(msgDisplay, 1) //does the page cotain the offline message? Yes? 
      //Then remove it
      : this.setState({ notifications: [...this.state.notifications, msg] });
      //otherwise, add it to the page. Have to toggle to avoid confusion
  };
  //...makes it so that it adds to the existing array of strings.

  pushNotification = msg => {
    this.setState({ notifications: [...this.state.notifications, msg] });
  };

  toggleOnlineSlider = () => {
    this.setState({ onlinestatus: !this.state.onlinestatus });
    const msg =
      "Your application is offline. You won't be able to share or stream music to other devices.";
    this.toggleNotification(msg);
  };

  masterVolume = newNumber => {
    this.setState({ mastervolume: newNumber });
    const msg =
      "Listening to music at a high volume could cause long-term hearing loss.";
    if (newNumber > 80 && !this.state.notifications.includes(msg)) {
      this.pushNotification(msg);
    }
  };

  soundQuality = event => {
    this.setState({ soundquality: event.target.value });
    const msg = "Music quality is degraded. Increase quality if your connection allows it.";
    const otherMsg = "Sound quality looks dope.";

    //Ternary operator!! Woooo!!
    event.target.value == "low"
      ? this.pushNotification(msg)
      : this.pushNotification(otherMsg);
  };

  render() {
    return (
      <div>
        <div className="dashboard-cards">
          <OnlineSlider
            onlineStatus={this.state.onlinestatus}
            onlineToggle={this.toggleOnlineSlider}
          ></OnlineSlider>

          <MasterVolume
            volumeStatus={this.state.mastervolume}
            changeVolume={this.masterVolume}
          ></MasterVolume>

          <SoundQuality
            qualityStatus={this.state.soundquality}
            changeQuality={this.soundQuality}
          ></SoundQuality>
        </div>

        <div className="system-notifications">
          <h3>System Notifications:</h3>
          {this.state.notifications.map((notification, index) => (
            <p key={index}>{notification}</p>
          ))}
        </div>
      </div>
    );
  }
}

export default Dashboard;
