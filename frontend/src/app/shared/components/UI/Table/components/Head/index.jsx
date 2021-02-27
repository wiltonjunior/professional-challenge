import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from '@material-ui/core'

import Translate from '@UI/Translate'

import React from 'react'

const Head = props => {
  const {
    order,
    columns,
    orderBy,
    onRequestSort,
  } = props

  const createSortHandler = property => event => {
    onRequestSort(event, property)
  }

  return (
    <TableHead className="Header">
      <TableRow>
        {columns.map((headCell, index) => (
          <TableCell
            key={index}
            padding="default"
            align={headCell?.headAlign}
            className={headCell?.className}
            style={{
              whiteSpace: 'nowrap',
              paddingRight: `${headCell.paddingRight}`,
            }}
            sortDirection={orderBy === headCell.field ? order : false}
          >
            {headCell.order ? (
              <TableSortLabel
                active={orderBy === headCell.field}
                onClick={createSortHandler(headCell.field)}
                direction={orderBy === headCell.field ? order : 'asc'}
              >
                <Translate>
                  {headCell.title}
                </Translate>
              </TableSortLabel>
            ) : (
                <Translate>
                  { headCell.title}
                </Translate>
              )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

export default Head
