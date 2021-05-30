import { DEFAULT_GAS } from 'config'
import { SettingsState } from 'state/types'

// Keep a version so we can bust any old settings' versions from a users local storage
const VERSION = 1

export const initialState: SettingsState = {
  data: {
    gasPriceMultiplier: 1.2,
    gasPrice: DEFAULT_GAS.toString(),
  },
}

export const getLocalStorageKey = (account: string) => {
  return `pancakeswap_settings_${account}_${VERSION}`
}
