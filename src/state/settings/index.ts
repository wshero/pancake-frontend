/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SettingsState } from '../types'
import { initialState } from './helpers'

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSettings: (state, action: PayloadAction<Partial<SettingsState['data']>>) => {
      state.data = { ...state.data, ...action.payload }
    },
  },
})

// Actions
export const { setSettings } = settingsSlice.actions

export default settingsSlice.reducer
