import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const initialState = []
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state, action) {
      const newItemId = action.payload.id
      const existingItem = state.find((item) => item.id === newItemId)
      if (existingItem) {
        existingItem.quantity++
      } else {
        state.push(action.payload)
      }
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload)
    },
    removes(state, action) {
      state.pop(action.payload)
    },
    incrementItem(state, action) {
      state.map((item) => {
        if (item.id === action.payload) {
          item.quantity++
        }
        return console.log('item', item.quantity)
      })
    },
    decrementItem(state, action) {
      state
        .map((item) => {
          if (item.id === action.payload) {
            item.quantity--
          }
          return item
        })
        .filter((item) => item.quantity !== 0)
    },
  },
})
export const { add, remove, adds, removes, incrementItem, decrementItem } = cartSlice.actions
export default cartSlice.reducer
