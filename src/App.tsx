import { Table } from './components/Table'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './store/reducers/rootReducer'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk))
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Table />
      </div>
    </Provider>
  )
}

export default App
