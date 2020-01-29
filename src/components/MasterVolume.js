import React, {Component} from 'react';
import { CardActions, Button, Typography, Slider, Card, CardContent } from '@material-ui/core/';

export default class MasterVolume extends Component {
state = {
			volume: this.volumeState,
			mute: false,
			previousVolume: this.volumeState,
		}
	
	muteVolume = ( event, value ) => {
		let newMute = !this.state.mute
		this.setState({
			mute: newMute,
			previousVolume: this.state.volume,
			volume: ( newMute ? 0 : this.state.previousVolume )
		})
	};
	
	handleChange = ( event, value ) => {
		this.setState({volume: value})
	
	}

	render() { 
        return (
		<div className="volume-slider">
		<div>
		<Card>
		<CardContent>
			<Typography id="discrete-slider" gutterBottom>
				Volume
			</Typography>
			</CardContent>
			<Slider
				defaultValue={20}
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
			<CardActions>
				<Button size="small" onClick={()=>this.muteVolume()}>{this.state.mute ? "Unmute" : "Mute"}</Button>
			</CardActions>
			</Card>
			</div>
		</div>
	)}
}