import React from 'react';
import { FormControlLabel, CardContent, Typography, Switch, Card } from '@material-ui/core';

export default function SimpleCard() {

return(
	<div className="online-switch">
		<div>
			<Card>
			<CardContent>
			<Typography variant="h5" component="h2">
			 Online Mode
			</Typography>
			<Typography variant="body2" component="p">
			Is this application connected to the internet?
			</Typography>
		  </CardContent>
				<FormControlLabel
					control={
						<Switch 
							
						/>}
					label="Online"
				/>
				</Card>
		</div>
	</div>
)}