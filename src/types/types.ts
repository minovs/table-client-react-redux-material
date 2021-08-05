export enum ContentActionTypes {
  COLUMS_FETCH_SUCCESS = 'COLUMS_FETCH_SUCCESS',
  ROWS_FETCH_SUCCESS = 'ROWS_FETCH_SUCCESS',
}

export interface IColumnsList {
  id: string
  label: string
}

export interface IContentState {
  colums: IColumnsList[]
  rows: { [key: string]: string }[]
}

interface IColumsAction {
  type: ContentActionTypes.COLUMS_FETCH_SUCCESS
  payload: IColumnsList[]
}

interface IRowsAction {
  type: ContentActionTypes.ROWS_FETCH_SUCCESS
  payload: { [key: string]: string }[]
}

export type ContentAction = IColumsAction | IRowsAction
