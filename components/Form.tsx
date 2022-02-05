import { SearchIcon } from '@heroicons/react/outline'
import useDebounce from 'lib/hooks/useDebounce'
import Dropdown from './Dropdown'
import { useAppContext } from 'lib/AppProvider'
import { getCountryByName, getCountryByRegion } from 'lib/countries'
import { useEffect } from 'react'
import useUpdateEffect from 'lib/hooks/useUpdateEffect'

export default function Form() {
  const { searchCountry, setSearchCountry, setFilteredCountries, region } =
    useAppContext()

  // Handle user search for country
  // Each user typed, new countries will be fetched after 200 ms
  // prettier-ignore
  useDebounce(async () => {
    if (!searchCountry) {
      if (region) {
        const results = await getCountryByRegion(searchCountry, region)
        setFilteredCountries(results)
      }
      return
    }
    const results = await getCountryByName(searchCountry, region)
    setFilteredCountries(results)
  }, 200, [searchCountry, region])

  useEffect(() => {
    async function handleRegion() {
      if (!region) return
      const results = await getCountryByRegion(searchCountry, region)
      setFilteredCountries(results)
    }
    handleRegion()
  }, [region])

  // reset filteredCountries to null if region and searchCountry are empty
  useUpdateEffect(() => {
    if (!searchCountry && !region) setFilteredCountries(null)
  }, [region, searchCountry])

  return (
    <div className="wrapper space-y-9 pt-8">
      {/* Search Bar */}
      <div className="flex items-center space-x-5 rounded-md bg-light-elements px-8 py-4 text-light-input shadow-sm focus-within:shadow-md dark:bg-dark-elements dark:text-dark-text">
        <SearchIcon className="w-6" />
        <input
          type="text"
          placeholder="Search for a country..."
          className="w-full bg-transparent text-sm font-light outline-none"
          value={searchCountry}
          onChange={(e) => setSearchCountry(e.target.value)}
        />
      </div>
      <Dropdown />
    </div>
  )
}
