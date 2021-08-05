import { Dispatch } from 'redux'
import { ContentAction, ContentActionTypes, IColumnsList } from '../../types/types'

const createColumns = async (classes: IColumnsList[]) => {
  const columns = [
    { id: 'nn', label: '№' },
    { id: 'name', label: 'Имя' },
  ]
  columns.push(...classes)
  return columns
}
const createData = (columns: IColumnsList[], arrayStudents: string[]) => {
  let obj: { [key: string]: string } = {}
  columns.forEach((el: IColumnsList, i: number) => {
    obj[el.id] = arrayStudents[i]
  })
  return obj
}
const createRows = async (rowlist: { [key: string]: string }[], columns: IColumnsList[]) => {
  let rows: { [key: string]: string }[] = []
  let arrayRows
  rowlist.forEach(async (el) => {
    arrayRows = el.res.split(',')
    rows.push(createData(columns, arrayRows))
  })
  return rows
}

export const contentFetchData = () => {
  return async (dispatch: Dispatch<ContentAction>): Promise<void> => {
    try {
      const response = await fetch('http://localhost:3001/api/content')
      const json = await response.json()
      const resColumns = await createColumns(json[0])
      const resRows = await createRows(json[1], resColumns)
      dispatch({ type: ContentActionTypes.COLUMS_FETCH_SUCCESS, payload: resColumns })
      dispatch({ type: ContentActionTypes.ROWS_FETCH_SUCCESS, payload: resRows })
    } catch (e) {
      console.log(e)
    }
  }
}
