export interface IAppContext {
  searchCountry: string
  setSearchCountry: any
  region: string
  setRegion: any
  filteredCountries: any
  setFilteredCountries: any
  loading: boolean
  setLoading: any
}

export type ThemeType = 'dark' | 'light'
export type SetThemeType = (theme: ThemeType | 'toggle') => void
