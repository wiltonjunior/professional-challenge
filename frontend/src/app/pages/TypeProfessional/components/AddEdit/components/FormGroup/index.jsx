import React from 'react'
import { Grid } from '@material-ui/core'

import Utils from '@utils'
import Input from '@UI/Input'

const FormGroup = props => {
  const { formik } = props
  const { handleBlur, handleChange, values, errors } = formik
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={6}>
          <Input
            {...props}
            name="description"
            onBlur={handleBlur}
            onChange={handleChange}
            value={Utils.getValue(values, 'description')}
            error={Utils.getValue(errors, 'description')}
            helperText={Utils.getValue(errors, 'description')}
            label="TYPE_PROFESSIONAL_ADD_EDIT_INPUT_LABEL_DESCRIPTION"
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <Input
            {...props}
            name="phone"
            onBlur={handleBlur}
            mask="(99) 9 9999-9999"
            onChange={handleChange}
            value={Utils.getValue(values, 'phone')}
            error={Utils.getValue(errors, 'phone')}
            helperText={Utils.getValue(errors, 'phone')}
            label="TYPE_PROFESSIONAL_ADD_EDIT_INPUT_LABEL_PHONE"
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
            label="TYPE_PROFESSIONAL_ADD_EDIT_INPUT_LABEL_SITUATION"
          />
        </Grid>
      </Grid>
    </>
  )
}

export default FormGroup
