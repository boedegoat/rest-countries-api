import { SearchIcon } from '@heroicons/react/outline'
import useDebounce from 'lib/hooks/useDebounce'
import Dropdown from './Dropdown'
import { useAppContext } from 'lib/AppProvider'
import { getCountryByName, getCountryByRegion } from 'lib/countries'
import { useEffect } from 'react'

export default function Form() {
  const { searchCountry, setSearchCountry, setFilteredCountries, region } =
    useAppContext()

  // Handle user search for country
  // Each user typed, new countries will be fetched after 200 ms
  // prettier-ignore
  useDebounce(async () => {
    if (!searchCountry) return
    const results = await getCountryByName(searchCountry)
    setFilteredCountries(results)
  }, 200, [searchCountry])

  useEffect(() => {
    async function handleRegion() {
      if (!region) return
      const results = await getCountryByRegion(region)
      console.log(results)
      setFilteredCountries(results)
    }
    handleRegion()
  }, [region])

  return (
    <div className="wrapper mt-8 space-y-9">
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
