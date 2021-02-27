import React from 'react'
import { Grid } from '@material-ui/core'

import Utils from '@utils'
import Input from '@UI/Input'

const FormGroup = props => {
  const { formik, listType } = props
  const { handleBlur, handleChange, values, errors } = formik
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={6}>
          <Input
            {...props}
            name="name"
            onBlur={handleBlur}
            onChange={handleChange}
            value={Utils.getValue(values, 'name')}
            error={Utils.getValue(errors, 'name')}
            helperText={Utils.getValue(errors, 'name')}
            label="PROFESSIONAL_ADD_EDIT_INPUT_LABEL_NAME"
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <Input
            {...props}
            name="phone"
            onBlur={handleBlur}
            onChange={handleChange}
            mask="(99) 9 9999-9999"
            value={Utils.getValue(values, 'phone')}
            error={Utils.getValue(errors, 'phone')}
            helperText={Utils.getValue(errors, 'phone')}
            label="PROFESSIONAL_ADD_EDIT_INPUT_LABEL_PHONE"
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <Input
            {...props}
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            value={Utils.getValue(values, 'email')}
            error={Utils.getValue(errors, 'email')}
            helperText={Utils.getValue(errors, 'email')}
            label="PROFESSIONAL_ADD_EDIT_INPUT_LABEL_EMAIL"
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <Input
            {...props}
            type="password"
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            value={Utils.getValue(values, 'password')}
            error={Utils.getValue(errors, 'password')}
            helperText={Utils.getValue(errors, 'password')}
            label="PROFESSIONAL_ADD_EDIT_INPUT_LABEL_PASSWORD"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Input
            {...props}
            type='select'
            nameValue='id'
            array={listType}
            onBlur={handleBlur}
            nameText='description'
            onChange={handleChange}
            name="typeProfessionalId"
            value={Utils.getValue(values, 'typeProfessionalId')}
            error={Utils.getValue(errors, 'typeProfessionalId')}
            helperText={Utils.getValue(errors, 'typeProfessionalId')}
            label="PROFESSIONAL_ADD_EDIT_INPUT_LABEL_TYPE"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Input
            {...props}
            type='checkbox'
            name="situation"
            onBlur={handleBlur}
            onChange={handleChange}
            value={Utils.getValue(values, 'situation')}
            error={Utils.getValue(errors, 'situation')}
            helperText={Utils.getValue(errors, 'situation')}
            label="PROFESSIONAL_ADD_EDIT_INPUT_LABEL_SITUATION"
          />
        </Grid>
      </Grid>
    </>
  )
}

export default FormGroup
