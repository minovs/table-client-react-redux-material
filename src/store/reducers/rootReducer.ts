import { combineReducers } from 'redux'
import { contentReducer } from './contentReducer'

export const rootReducer = combineReducers({
  content: contentReducer,
})
export type RootState = ReturnType<typeof rootReducer>
