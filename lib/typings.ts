export interface IAppContext {
  searchCountry: any
  setSearchCountry: any
  region: any
  setRegion: any
  filteredCountries: any
  setFilteredCountries: any
}

export type ThemeType = 'dark' | 'light'
export type SetThemeType = (theme: ThemeType | 'toggle') => void
