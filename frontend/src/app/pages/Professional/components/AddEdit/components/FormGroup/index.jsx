import React from 'react'
import { Grid } from '@material-ui/core'

import Utils from '@utils'
import Input from '@UI/Input'

const FormGroup = props => {
  const { formik } = props
  const { handleBlur, handleChange, values, errors } = formik

  return (
    <>
      <Grid item xs className="mg-auto">
        <Grid item xs={12} sm={12}>
          <Input
            {...props}
            name="question"
            onBlur={handleBlur}
            onChange={handleChange}
            label="PROFESSIONAL_ADD_EDIT_INPUT_LABEL_SUB_QUESTION"
            value={Utils.getValue(values, 'question')}
            error={Utils.getValue(errors, 'question')}
            helperText={Utils.getValue(errors, 'question')}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Input
            {...props}
            name="answer"
            onBlur={handleBlur}
            onChange={handleChange}
            label="PROFESSIONAL_ADD_EDIT_INPUT_LABEL_ANSWER"
            value={Utils.getValue(values, 'answer')}
            error={Utils.getValue(errors, 'answer')}
            helperText={Utils.getValue(errors, 'answer')}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default FormGroup
