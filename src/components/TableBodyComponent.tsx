import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../hooks/useTypedSelector'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import { clickHandler } from '../store/actions/clickActions'
import { IColumnsList } from '../types/types'

export const TableBodyComponent: FC = () => {
  const dispatch = useDispatch()
  const handlerClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => dispatch(clickHandler(e))
  const { colums, rows } = useTypedSelector((state) => state.content)

  let value: string | number
  const content = (
    <TableBody>
      {rows.map((row: { [key: string]: string }, i: number) => (
        <TableRow hover key={i}>
          {colums.map((column: IColumnsList) => {
            if (column.id === 'nn') {
              value = i + 1
            } else {
              value = row[column.id]
            }
            return (
              <TableCell key={column.id}>
                <div
                  data-name={row.name}
                  data-classes={column.label}
                  data-value={value}
                  className={column.id !== 'name' && column.id !== 'nn' ? 'click' : undefined}
                  onClick={(e) => handlerClick(e)}
                >
                  {value}
                </div>
              </TableCell>
            )
          })}
        </TableRow>
      ))}
    </TableBody>
  )
  return <>{content}</>
}
