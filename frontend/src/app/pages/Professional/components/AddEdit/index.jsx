import React from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'

import Axios from '@UI/Axios'
import Card from '@UI/Card'
import Modal from '@UI/Modal'
import Button from '@UI/Button'

import FormGroup from './components/FormGroup'

const AddEdit = props => {

  let { close, item, updateList } = props
  
  const schema = {
    enableReinitialize: true,
    initialValues: { situation: false, ...item },
    validationSchema: Yup.object().shape({
      name: Yup.string().required('REQUIRED'),
      password: Yup.string().required('REQUIRED'),
      typeProfessionalId: Yup.number().required('REQUIRED'),
      email: Yup.string().email('REQUIRED').required('REQUIRED'),
    })
  }

  const footer = submit => {
    return <Button onClick={submit}>PROFESSIONAL_ADD_CARD_SEND</Button>
  }

  const onSuccess = () => {
    close()
    updateList()
  }

  const add = ({ handleSubmit, ...formik }) => {
    return (
      <Card footer={() => footer(handleSubmit)}>
        <FormGroup {...props} formik={formik} />
      </Card>
    )
  }

  const edit = ({ handleSubmit, ...formik }) => {
    return (
      <Modal
        open={item}
        close={close}
        onSubmit={handleSubmit}
        title="PROFESSIONAL_EDIT_MODAL_TILE"
      >
        <FormGroup {...props} formik={formik} />
      </Modal>
    )
  }

  const onSubmit = ({ values, submit, resetForm, setFieldValue }) => {
    submit({ params: values })
    resetForm()
    setFieldValue('name', '');
    setFieldValue('phone', '');
    setFieldValue('email', '');
    setFieldValue('password', '');
    setFieldValue('situation', false);
    setFieldValue('typeProfessionalId', '');
  }

  let params = {}
  
  if (item.id) {
    params = {
      method: 'put',
      others: item.id
    }
  } else {
    params = {
      method: 'post'
    }
  }

  return (
    <div className="AddEdit">
      <Axios api="professional" {...params} onSuccess={onSuccess}>
        {({ submit }) => (
          <Formik
            {...schema}
            onSubmit={(values, event) => onSubmit({ ...event, values, submit })}
          >
            {formik => (item.id ? edit(formik) : add(formik))}
          </Formik>
        )}
      </Axios>
    </div>
  )
}

export default AddEdit
