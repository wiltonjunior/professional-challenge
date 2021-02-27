import {
  Table,
  Paper,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  TablePagination,
  CircularProgress,
} from '@material-ui/core'

import { debounce } from 'lodash'

import clsx from 'clsx'
import Checkbox from '@material-ui/core/Checkbox'
import React, { memo, useEffect, useState } from 'react'

import Utils from '@utils'
import Typography from '@UI/Typography'

import Head from './components/Head'
import Toolbar from './components/Toolbar'

import useStyles from './styles'

const DEBOUNCE_TIME = 500

const TableComponent = props => {
  const {
    loading,
    className,
    data = [],
    columns = [],
    checkbox = '',
    selected = [],
    customPagination,
  } = props

  const classes = useStyles()

  const [page, setPage] = useState(0)
  const [order, setOrder] = useState('asc')
  const [orderBy, setOrderBy] = useState('')
  const [filtered, setFiltered] = useState([])
  const [rowsPerPage, setRowsPerPage] = useState(10)

  useEffect(() => {
    if (Array.isArray(data)) {
      setFiltered(data)
    }
    // eslint-disable-next-line
  }, [data])

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleChangePage = (event, newPage) => {
    if (customPagination) {
      const { params, setParams } = customPagination
      setParams({ ...params, page: newPage + 1 })
    } else {
      setPage(newPage)
    }
  }

  const handleChangeRowsPerPage = ({ target: { value } }) => {
    if (customPagination) {
      const { params, setParams } = customPagination
      setParams({ ...params, page: 1, rows: value })
    } else {
      setRowsPerPage(parseInt(value, 10))
      setPage(0)
    }
  }

  const handleSearch = ({ target: { value } }) => {
    if (data) {
      if (!!value) {
        let array = []
        for (const item of data) {
          for (const { field } of columns) {
            if (field) {
              const column = Utils.getValue(item, field)
              const result = String(column)
                .toLowerCase()
                .includes(value.toLowerCase())
              if (column && result) {
                array.push(item)
                break
              }
            }
          }
        }
        setFiltered(array)
      } else {
        setFiltered(data)
      }
    }
  }

  const getFieldByValue = ({ row, column, index }) => {
    const { field, component } = column
    const value = Utils.getValue(row, field)
    if (component) {
      const result = component(row, index)
      return result || '-'
    } else {
      return value || '-'
    }
  }

  const getColumn = (row, index) => {
    if (Array.isArray(columns)) {
      return columns.map((column, key) => (
        <TableCell
          size="small"
          align={column.align}
          key={`${index}-${key}`}
          className={column?.className}
        >
          {getFieldByValue({ row, column, index })}
        </TableCell>
      ))
    }
  }

  const getComponentLoad = () => {
    if (loading) {
      return <CircularProgress />
    } else {
      return <Typography align="center">TABLE_NO_DATA</Typography>
    }
  }

  const getData = () => {
    if (Array.isArray(filtered) && filtered.length && !loading) {
      let array = []

      array = Utils.stableSort(
        filtered,
        Utils.getComparator(order, orderBy)
      ).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

      return array.map((row, index) => {
        const labelId = `table-checkbox-${index}`
        return (
          <TableRow
            hover
            key={index}
            role="checkbox"
            style={{ height: '60px', whiteSpace: 'nowrap' }}
          >
            {getColumn(row, index)}
          </TableRow>
        )
      })
    } else {
      return (
        <TableRow>
          <TableCell className={classes.empty} colSpan={columns.length}>
            {getComponentLoad()}
          </TableCell>
        </TableRow>
      )
    }
  }

  const getParamsPaginator = () => {
    if (customPagination) {
      const { params = {}, pagination = {} } = customPagination
      const { page, rows } = params
      const { totalPages } = pagination
      return {
        page: page - 1,
        rowsPerPage: rows,
        count: totalPages,
      }
    } else {
      return {
        page,
        rowsPerPage,
        count: data.length,
      }
    }
  }

  const getPaginatorComponent = () => {
    return (
      <TablePagination
        component="div"
        {...getParamsPaginator()}
        onChangePage={handleChangePage}
        labelRowsPerPage="Rows per page"
        rowsPerPageOptions={[10, 25, 50, 100, 500]}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    )
  }

  const styles = clsx(classes.root, className)

  return (
    <Paper className={styles} elevation={2}>
      <div className={classes.container}>
        <Toolbar {...props} search={handleSearch} />
      </div>
      <TableContainer style={{ border: '1px solid #ccc', borderRadius: 10 }}>
        <Table aria-label="Application table">
          <Head
            {...props}
            order={order}
            columns={columns}
            orderBy={orderBy}
            rowCount={data.length}
            onRequestSort={handleRequestSort}
          />
          <TableBody>{getData()}</TableBody>
        </Table>
      </TableContainer>
      {getPaginatorComponent()}
    </Paper>
  )
}

export default memo(TableComponent)
