import { createContext, useContext, useState } from 'react'
import { IAppContext } from './typings'

const AppContext = createContext({} as IAppContext)

export function useAppContext() {
  return useContext(AppContext)
}

export default function AppProvider({ children }) {
  const [filteredCountries, setFilteredCountries] = useState(null)
  const [searchCountry, setSearchCountry] = useState('')
  const [region, setRegion] = useState('')

  const value: IAppContext = {
    searchCountry,
    setSearchCountry,
    region,
    setRegion,
    filteredCountries,
    setFilteredCountries,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
