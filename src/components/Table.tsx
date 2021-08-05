import { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tablen from '@material-ui/core/Table'
import TableContainer from '@material-ui/core/TableContainer'
import { contentFetchData } from '../store/actions/contentActions'
import { TableHeadComponent } from './TableHeadComponent'
import { TableBodyComponent } from './TableBodyComponent'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: '100vh',
  },
})
export const Table: FC = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const fetchData = () => dispatch(contentFetchData())

  useEffect(() => {
    fetchData()
  }, []) // eslint-disable-line
  const content = (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Tablen stickyHeader aria-label="sticky table">
          <TableHeadComponent />
          <TableBodyComponent />
        </Tablen>
      </TableContainer>
    </Paper>
  )
  return <>{content}</>
}
