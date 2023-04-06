import { configureStore } from '@reduxjs/toolkit'

import cartReducer from '../redux/Reducer'

const store2 = configureStore({
  reducer: {
    cart: cartReducer,
  },
})
export default store2
