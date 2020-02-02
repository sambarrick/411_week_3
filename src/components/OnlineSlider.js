import React from "react";
import {
  FormControlLabel,
  CardContent,
  Typography,
  Switch,
  Card
} from "@material-ui/core";

const OnlineSlider = props => (
  <div>
    <div>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            Online Mode
          </Typography>
          <Typography variant="body2" component="p">
            Is this application connected <br />
            to the internet?
          </Typography>
        </CardContent>
        <FormControlLabel
          control={ //nifty little trick I found. control makes it so that the component actually does its thing
            <Switch checked={props.onlineStatus} onChange={props.onlineToggle} />
          }
          label="Online"
        />
      </Card>
    </div>
  </div>
);

export default OnlineSlider;