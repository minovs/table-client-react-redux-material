import { FC } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { IColumnsList } from '../types/types'

export const TableHeadComponent: FC = () => {
  const colums = useTypedSelector((state) => state.content.colums)

  const content = (
    <TableHead>
      <TableRow>
        {colums.map((column: IColumnsList) => (
          <TableCell key={column.id}>{column.label}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
  return <>{content}</>
}
