import React, { useEffect } from 'react'

import { useHistory } from 'react-router-dom'

import Config from '@configs'
import Input from '@UI/Input'
import Axios from '@UI/Axios'
import Button from '@UI/Button'
import Typography from '@UI/Typography'
import Tabs from '@UI/Tabs'

import * as Yup from 'yup'
import { Formik } from 'formik'

import useStyles from './styles';

function Login() {

	const classes = useStyles()
	const history = useHistory()

	return (
		<section className={classes.root}>
			<Tabs />
		</section>
	);
}

export default Login;
