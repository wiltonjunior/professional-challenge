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
    initialValues: { ...item },
    validationSchema: Yup.object().shape({
      question: Yup.string().required('REQUIRED'),
      answer: Yup.string().required('REQUIRED')
    })
  }

  const footer = submit => {
    return <Button onClick={submit}>FAQ_ADD_CARD_SEND</Button>
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
        title="FAQ_EDIT_MODAL_TILE"
        actions={<Actions onSubmit={handleSubmit} />}
      >
        <FormGroup {...props} formik={formik} />
      </Modal>
    )
  }

  const Actions = ({ onSubmit }) => {
    return (
      <div className="actions">
        <Button color="gray" onClick={() => close()}>
          FAQ_BUTTON_CLOSE
        </Button>
        <Button onClick={onSubmit}>FAQ_ADD_CARD_SEND</Button>
      </div>
    )
  }

  let params = {}
  if (item._id) {
    params = {
      method: 'put',
      others: item._id
    }
  } else {
    params = {
      method: 'post'
    }
  }

  const onSubmit = ({ values, submit, resetForm }) => {
    submit({ params: values })
    resetForm()
  }

  return (
    <div className="AddEdit">
      <Axios api="faqs" {...params} onSuccess={onSuccess}>
        {({ submit }) => (
          <Formik
            {...schema}
            onSubmit={(values, event) => onSubmit({ ...event, values, submit })}
          >
            {formik => (item._id ? edit(formik) : add(formik))}
          </Formik>
        )}
      </Axios>
    </div>
  )
}

export default AddEdit
