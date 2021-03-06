import React, { Component } from "react";
import { Typography, Slider, Card, CardContent } from "@material-ui/core/";

export default class MasterVolume extends Component {
  constructor(props) { //can't figure out how to transfer info without using constructor(props). When I do just state, nothing seems to transfer.
    super(props);
    this.state = {
      volume: this.props.volumeStatus,
    };
  }

  handleChange = (event, value) => {
    this.setState({ volume: value });
    this.props.changeVolume(value);
  };

  render() {
    return (
      <div className="volume-slider">
        <div>
          <Card>
            <CardContent>
              <Typography id="discrete-slider" variant="h5" component="h2">
                Master Volume
              </Typography>
              <Typography variant="body2" component="p">
                Overrides all over sound <br />
                settings in this application
              </Typography>
            </CardContent>
            <Slider
              defaultValue={this.state.volume}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="on"
              fullWidth
              step={10}
              marks
              min={0}
              max={100}
              value={this.state.volume}
              onChange={this.handleChange}
            />
          </Card>
        </div>
      </div>
    );
  }
}
