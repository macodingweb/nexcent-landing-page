import { configureStore } from '@reduxjs/toolkit'
import statusReducer from './features/navbar/navState'

export const makeStore = () => {
  return configureStore({
    reducer: {
      status: statusReducer,
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']