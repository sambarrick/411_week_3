import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const SoundQuality = props => (
  <div className="quality-selection">
    <div className="m-t">
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            Sound Quality
          </Typography>
          <Typography variant="body2" component="p">
            Manually control the music <br />
            quality in the event of poor <br />
            connection
          </Typography>
          <Select value={props.qualityState} onChange={props.qualityFunc}>
            <MenuItem value={"low"}>Low</MenuItem>
            <MenuItem value={"normal"}>Normal</MenuItem>
            <MenuItem value={"high"}>High</MenuItem>
          </Select>
        </CardContent>
      </Card>
    </div>
  </div>
);

export default SoundQuality;
