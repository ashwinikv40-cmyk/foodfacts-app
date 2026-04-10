import { configureStore } from '@reduxjs/toolkit'
import savedReducer from './savedSlice'

// Create Redux Store
const store = configureStore({
  reducer: {
    saved: savedReducer
  }
})

// Save to localStorage whenever state changes
store.subscribe(() => {
  const state = store.getState()

  localStorage.setItem(
    'foodfacts',
    JSON.stringify(state.saved.items)
  )
})

export default store