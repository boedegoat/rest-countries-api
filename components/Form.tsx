import { SearchIcon } from '@heroicons/react/outline'
import useDebounce from 'lib/hooks/useDebounce'
import Dropdown from './Dropdown'
import { useAppContext } from 'lib/AppProvider'
import { getCountryByName, getCountryByRegion } from 'lib/countries'
import { useEffect, useRef } from 'react'
import useUpdateEffect from 'lib/hooks/useUpdateEffect'

export default function Form() {
  const {
    searchCountry,
    setSearchCountry,
    filteredCountries,
    setFilteredCountries,
    region,
    setLoading,
  } = useAppContext()
  const userHasSearched = useRef(false)

  // Handle user search for country
  // Each user typed, new countries will be fetched after 200 ms
  // prettier-ignore
  useDebounce(async () => {
    if (!searchCountry) {
      if (region && userHasSearched.current) {
        const results = await getCountryByRegion(region, searchCountry)
        setFilteredCountries(results)
      }
      userHasSearched.current = false
      return
    }
    
    if (!userHasSearched.current) {
      userHasSearched.current = true
    }
    setLoading(true)
    const results = await getCountryByName(searchCountry, region)
    setFilteredCountries(results)
  }, 200, [searchCountry, region, userHasSearched.current])

  useEffect(() => {
    async function handleRegion() {
      setLoading(true)
      const results = await getCountryByRegion(region, searchCountry)
      setFilteredCountries(results)
    }
    if (!region) return
    handleRegion()
  }, [region])

  // reset filteredCountries to null if region and searchCountry are empty
  useUpdateEffect(() => {
    if (!searchCountry && !region) {
      setFilteredCountries(null)
    }
  }, [region, searchCountry])

  useEffect(() => {
    setLoading(false)
  }, [filteredCountries])

  return (
    <div className="wrapper space-y-9 pt-8 md:flex md:items-center md:justify-between md:space-y-0">
      {/* Search Bar */}
      <div className="flex items-center space-x-5 rounded-md bg-light-elements px-8 py-4 text-light-input shadow-sm focus-within:shadow-md dark:bg-dark-elements dark:text-dark-text md:min-w-[400px]">
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
