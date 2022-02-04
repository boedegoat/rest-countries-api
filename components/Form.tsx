import { SearchIcon } from '@heroicons/react/outline'
import useDebounce from 'lib/hooks/useDebounce'
import Dropdown from './Dropdown'
import { useAppContext } from 'lib/AppProvider'
import { REST_COUNTRIES_API } from 'lib/countries'
import { useEffect } from 'react'

export default function Form() {
  const { searchCountry, setSearchCountry, setFilteredCountries, region } =
    useAppContext()

  // Handle user search for country
  // Each user typed, new countries will be fetched after 200 ms
  const handleSearch = async () => {
    const res = await fetch(REST_COUNTRIES_API + `/name/${searchCountry}`)
    const newFiltered = await res.json()
    setFilteredCountries(newFiltered)
  }
  useDebounce(handleSearch, 200, [searchCountry])

  const handleRegion = async () => {
    if (!region) return
    const res = await fetch(REST_COUNTRIES_API + `/region/${region}`)
    const newFiltered = await res.json()
    setFilteredCountries(newFiltered)
  }
  useEffect(() => {
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
