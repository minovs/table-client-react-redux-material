import { ContentActionTypes, ContentAction, IContentState } from '../../types/types'

const initialState: IContentState = {
  colums: [],
  rows: [],
}

export const contentReducer = (state = initialState, action: ContentAction): IContentState => {
  switch (action.type) {
    case ContentActionTypes.COLUMS_FETCH_SUCCESS:
      return {
        ...state,
        colums: action.payload,
      }
    case ContentActionTypes.ROWS_FETCH_SUCCESS:
      return {
        ...state,
        rows: action.payload,
      }
    default:
      return state
  }
}
