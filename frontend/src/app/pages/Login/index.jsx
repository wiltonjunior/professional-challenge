import React, { useEffect } from 'react'

import { useHistory } from 'react-router-dom'

import Config from '@configs'
import Input from '@UI/Input'
import Axios from '@UI/Axios'
import Button from '@UI/Button'
import Typography from '@UI/Typography'

import * as Yup from 'yup'
import { Formik } from 'formik'

import useStyles from './styles';

function Login() {

	const history = useHistory()
	const classes = useStyles()

	useEffect(() => {
		sessionStorage.clear()
	}, [])

	const schema = {
		enableReinitialize: true,
		initialValues: {},
		validationSchema: Yup.object().shape({
			email: Yup.string()
				.required('REQUIRED')
				.email(),
			password: Yup.string().required('REQUIRED')
		})
	}

	const onSuccess = ({ data }) => {
		setToken(data)
		history.push(`${baseUrl}/`)
	}

	const setToken = token => {
		sessionStorage.setItem(Config.TokenSession, token)
	}

	const onSubmit = ({ values, submit, resetForm }) => {
		submit({ params: values })
		resetForm()
	}

	return (
		<section className={classes.root}>
			<form className={classes.loginForm}>
				<div className={classes.title}>
					<Typography variant="h6">LOGIN_TITLE</Typography>
				</div>
				<Axios api="login" method="post" onSuccess={onSuccess}>
					{({ submit }) => (
						<Formik
							{...schema}
							onSubmit={(values, event) =>
								onSubmit({ ...event, values, submit })
							}
						>
							{({
								values,
								errors,
								handleChange,
								handleBlur,
								handleSubmit,
								isSubmitting
							}) => (
								<>
									<div className="form">
										<Input
											name="email"
											onBlur={handleBlur}
											value={values.email}
											error={errors.email}
											onChange={handleChange}
											helperText={errors.email}
											label="LOGIN_FORM_INPUT_LABEL_USER"
										/>
										<Input
											type="password"
											name="password"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.password}
											error={errors.password}
											helperText={errors.password}
											label="LOGIN_FORM_INPUT_LABEL_PASSWORD"
										/>
									</div>
									<Button
										onClick={handleSubmit}
										disabled={isSubmitting}
										className={classes.button}
									>
										LOGIN_FORM_BUTTON
									</Button>
								</>
							)}
						</Formik>
					)}
				</Axios>
			</form>
			<Typography className={classes.footerMark}>LOGIN_FORM_FOOTER</Typography>
		</section>
	);
}

export default Login;
