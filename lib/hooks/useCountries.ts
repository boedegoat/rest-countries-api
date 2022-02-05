import { useState } from 'react'
import useAtBottomOfThePage from './useAtBottomOfThePage'
import useUpdateEffect from './useUpdateEffect'

export default function useCountries({
  region,
  searchCountry,
  filteredCountries,
  initCountries,
}) {
  let offset = 5
  let prev = 0
  let next = offset
  const [countries, setCountries] = useState<any[]>(
    initCountries.slice(prev, next)
  )

  const sliceCountries = (countriesToSlice) => {
    return countriesToSlice?.slice(prev, next)
  }

  // Infinite scroll countries
  const loadMoreCountries = () => {
    console.log('load more countries')
    prev += offset
    next += offset
    const newCountries = sliceCountries(initCountries)
    setCountries((currCountries) => [...currCountries, ...newCountries])
  }
  useAtBottomOfThePage(() => {
    loadMoreCountries()
  })

  // check if searchCountry or region is not empty
  // show filteredCountries instead
  const handleFilter = () => {
    const inFilterMode = region || searchCountry
    const isFilterSuccess = filteredCountries?.status !== 404

    // reset prev and next
    prev = 0
    next = offset

    let newCountries
    if (inFilterMode) {
      newCountries = isFilterSuccess ? sliceCountries(filteredCountries) : []
    } else {
      newCountries = sliceCountries(initCountries)
    }

    setCountries(newCountries)
  }
  useUpdateEffect(() => {
    handleFilter()
  }, [region, searchCountry, filteredCountries])

  return countries
}
