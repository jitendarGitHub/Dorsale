import { createStore } from 'redux'
import RootReducer from './reducer/RootReducer'

const initialState = {
  sidebarShow: true,
}

const changeState = (state = initialState, { action, type, ...rest }) => {
  // console.log('Initial Action---', type)
  switch (type) {
    case 'set':
      return { ...state, ...rest }

    default:
      return state
  }
}

const store = createStore(RootReducer)
export default store
