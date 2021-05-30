interface GlobalSetting {
  gasPrice: number
}

// If the structure of settings changes we can update the version so the user
// will get a fresh copy
const VERSION = 1

const defaultSettings: GlobalSetting = {
  gasPrice: 200000,
}

export const getLocalStorageKey = (account: string) => {
  return `pancakeswap_settings_${account}_${VERSION}`
}

export const getSettings = (account: string): GlobalSetting => {
  try {
    const settingsFromLs = localStorage.getItem(getLocalStorageKey(account.toLowerCase()))

    if (settingsFromLs) {
      return JSON.parse(settingsFromLs)
    } else {
      return defaultSettings
    }
  } catch (error) {
    return defaultSettings
  }
}

export const saveSettings = (account: string, settings: Partial<GlobalSetting>) => {
  try {
    localStorage.setItem(getLocalStorageKey(account.toLowerCase()), JSON.stringify({ ...defaultSettings, ...settings }))
  } catch (error) {
    console.error('Unable to save settings locally: ', error)
  }
}
