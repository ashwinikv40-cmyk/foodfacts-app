import { createSlice } from '@reduxjs/toolkit'

// Load data from localStorage
const loadFromStorage = () => {
  try {
    const storedData = localStorage.getItem('foodfacts')
    return storedData ? JSON.parse(storedData) : []
  } catch {
    return []
  }
}

// Create slice
const savedSlice = createSlice({
  name: 'saved',
  initialState: {
    items: loadFromStorage()
  },
  reducers: {

    addItem: (state, action) => {
      const exists = state.items.find(
        item => item.id === action.payload.id
      )

      if (!exists) {
        state.items.push(action.payload)
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(
        item => item.id !== action.payload
      )
    }

  }
})

export const { addItem, removeItem } = savedSlice.actions

export default savedSlice.reducer