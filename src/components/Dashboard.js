import React, { Component } from "react";
import OnlineSlider from "./OnlineSlider";
import MasterVolume from "./MasterVolume";
import SoundQuality from "./SoundQuality";

class Dashboard extends Component {
  state = {
    notifications: [],
    online: true,
    volume: 20,
    soundquality: "normal"
  };

  toggleNotification = msg => {
    const msgIndex = this.state.notifications.indexOf(msg);

    //ternary operator!!! Wooo!!!!!!
    this.state.notifications.includes(msg)
      ? this.state.notifications.splice(msgIndex, 1)
      : this.setState({ notifications: [...this.state.notifications, msg] });
  };
  //...makes it so that it adds to the existing array of strings.

  pushNotification = msg => {
    this.setState({ notifications: [...this.state.notifications, msg] });
  };

  toggleOnlineSlider = () => {
    this.setState({ online: !this.state.online });
    const msg =
      "Your application is offline. You won't be able to share or stream music to other devices.";
    this.toggleNotification(msg);
  };

  masterVolume = newNumber => {
    this.setState({ volume: newNumber });

    const msg =
      "Listening to music at a high volume could cause long-term hearing loss.";

    if (newNumber > 80 && !this.state.notifications.includes(msg)) {
      this.pushNotification(msg);
    }
  };

  soundQuality = event => {
    this.setState({ soundquality: event.target.value });

    const msg =
      "Music quality is degraded. Increase quality if your connection allows it.";
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
            onlineSStatus={this.state.online}
            onlineToggle={this.toggleOnlineSlider}
          ></OnlineSlider>

          <MasterVolume
            volumeStatus={this.state.volume}
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
