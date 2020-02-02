import React, { Component } from "react";
import OnlineSlider from "./OnlineSlider";
import MasterVolume from "./MasterVolume";
import SoundQuality from "./SoundQuality";

class Dashboard extends Component {
  state = {
    notifications: [],
    online: true,
    volume: 80,
    quality: "normal"
  };

  toggleNotification = msg => {
    const msgIndex = this.state.notifications.indexOf(msg);

    //ternary operator!!! Wooo!!!!!!
    this.state.notifications.includes(msg)
      ? this.state.notifications.splice(msgIndex, 1)
      : this.setState({ notifications: [...this.state.notifications, msg] });
  };
  //...makes it so that it adds to the existing array of strings.

  addNotification = msg => {
    this.setState({ notifications: [...this.state.notifications, msg] });
  };

  toggleOnline = () => {
    this.setState({ online: !this.state.online });
    const msg =
      "Your application is offline. You won't be able to share or stream music to other devices.";
    this.toggleNotification(msg);
  };

  volumeSlider = newValue => {
    this.setState({ volume: newValue });

    const msg =
      "Listening to music at a high volume could cause long-term hearing loss.";

    if (newValue > 80 && !this.state.notifications.includes(msg)) {
      this.addNotification(msg);
    }
  };

  soundQuality = event => {
    this.setState({ quality: event.target.value });

    const msg =
      "Music quality is degraded. Increase quality if your connection allows it.";
    const otherMsg = "Sound quality looks dope.";

    //Ternary operator!! Woooo!!
    event.target.value == "low"
      ? this.addNotification(msg)
      : this.addNotification(otherMsg);
  };

  render() {
    return (
      <div className="dashboard-container">
        <div className="dashboard-control-col">
          <OnlineSlider
            onlineState={this.state.online}
            onlineFunc={this.toggleOnline}
          ></OnlineSlider>

          <MasterVolume
            volumeState={this.state.volume}
            volumeFunc={this.volumeSlider}
          ></MasterVolume>

          <SoundQuality
            qualityState={this.state.quality}
            qualityFunc={this.soundQuality}
          ></SoundQuality>
        </div>

        <div className="system-notifications">
          <h3>System Notifications:</h3>
          {this.state.notifications.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    );
  }
}

export default Dashboard;
