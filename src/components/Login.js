import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Grid from "@material-ui/core/Grid";

const Login = () => {
return(
    <div>
    <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
		<form>
			<TextField
				variant="standard"
				margin="normal"
				id="email"
				label="Username*"
				name="email"/>
            <br />
			<TextField 
				variant="standard"
                margin="normal"
                id="password"
				label="Password*"
				type="password"/>
            <br />
			<Button
				type="submit"
				variant="contained"
                color="primary"
                //onClick={() => { props.Login() }}
			>LOGIN</Button>
        </form>
        </Grid>
	</div>
)
}

export default Login;