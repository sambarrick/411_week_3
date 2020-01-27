import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  para: {
    fontSize: 10,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className="para" variant="h5" component="h2">
         Sound Quality
        </Typography>
        <Typography variant="body2" component="p">
          Manually control the music quality
           in event of poor connection
        </Typography>
      </CardContent>
      <CardActions>
      <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
  
    >
  <MenuItem value={0}> None </MenuItem>
      <MenuItem value={10}>Low</MenuItem>
      <MenuItem value={20}>Normal</MenuItem>
      <MenuItem value={30}>High</MenuItem>
    </Select>
      </CardActions>
    </Card>
  );
}