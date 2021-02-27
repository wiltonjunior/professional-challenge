import React from 'react'
import PropTypes from 'prop-types'
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton'

import Axios from '@UI/Axios'
import Icon from '@UI/Icon'
import Table from '@UI/Table'
import { i18n } from '@UI/Translate'

const List = ({ list = [], setItem, updateList }) => {

  const columns = [
    { title: 'TYPE_PROFESSIONAL_LIST_NAME', field: 'description' },
    { title: 'TYPE_PROFESSIONAL_LIST_PHONE', field: 'phone' },
    {
      title: 'TYPE_PROFESSIONAL_LIST_SITUATION', field: 'situation',
      component: ({ situation }) => {
        const color = situation ? 'primary' : 'secondary'
        const value = situation ? 'TYPE_PROFESSIONAL_LIST_SITUATION_ACTIVE' : 'TYPE_PROFESSIONAL_LIST_SITUATION_NOT_ACTIVE'
        return <Chip color={color} variant="outlined" label={i18n.t(value)}></Chip>
      }
    },
    {
      title: 'TYPE_PROFESSIONAL_LIST_OPTIONS',
      className: 'options',
      component: item => {
        return (
          <>
            <IconButton onClick={() => setItem({ ...item })} className="list-edit">
              <Icon size={30} name="Edit" />
            </IconButton>
            <Axios
              api="type-professional"
              method="delete"
              others={item.id}
              onSuccess={updateList}
            >
              {({ submit }) => (
                <IconButton onClick={submit} className="list-delete">
                  <Icon size={30} name="Delete" />
                </IconButton>
              )}
            </Axios>
          </>
        )
      }
    }
  ]

  return (
    <Table data={list} columns={columns} title="TYPE_PROFESSIONAL_LIST_TABLE_TITLE" />
  )
}

export default List

List.propTypes = {
  list: PropTypes.array,
  setItem: PropTypes.func,
  updateList: PropTypes.func
}
