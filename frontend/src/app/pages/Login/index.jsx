import React, { useState } from 'react';
import { Button, CircularProgress, InputLabel, MenuItem, TextField } from '@material-ui/core';

import useStyles from './styles';

function Login(props) {
	const [profile, setprofile] = useState('');

	const handleLogin = async (e) => {

	};

	const classes = useStyles()

	return (
		<section className={classes.root}>
			<div className={classes.logo}>

			</div>

			<form className={classes.loginForm}>
			
			</form>
			<span className={classes.footerMark}>© Project . All rights reserved</span>
		</section>
	);
}

export default Login;
