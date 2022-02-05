import { useState } from 'react'
import useAtBottomOfThePage from './useAtBottomOfThePage'
import useUpdateEffect from './useUpdateEffect'

export default function useCountries({ filteredCountries, initCountries }) {
  let offset = 5
  let prev = 0
  let next = offset
  const [countries, setCountries] = useState<any[]>(
    initCountries.slice(prev, next)
  )

  const sliceCountries = (countriesToSlice) => {
    return countriesToSlice?.slice(prev, next)
  }

  const getNewCountriesFromFilter = () => {
    const inFilterMode = filteredCountries !== null
    const isFilterSuccess = filteredCountries?.status !== 404
    let newCountries

    if (inFilterMode) {
      newCountries = isFilterSuccess ? sliceCountries(filteredCountries) : []
    } else {
      newCountries = sliceCountries(initCountries)
    }

    return newCountries
  }

  // Infinite scroll countries
  useAtBottomOfThePage(() => {
    const loadMoreCountries = () => {
      prev += offset
      next += offset

      // if prev equal or higher than countries length
      // it means that all countries have been rendered
      const allCountriesRendered =
        prev >= (filteredCountries ?? initCountries)?.length
      if (allCountriesRendered) {
        console.log('all countries have been loaded')
        return
      }

      console.log('load more countries')
      const newCountries = getNewCountriesFromFilter()
      setCountries((currCountries) => [...currCountries, ...newCountries])
    }
    loadMoreCountries()
  }, [filteredCountries])

  // check if searchCountry or region is not empty
  // show filteredCountries instead
  useUpdateEffect(() => {
    const handleFilter = () => {
      // reset prev and next
      prev = 0
      next = offset

      const newCountries = getNewCountriesFromFilter()
      setCountries(newCountries)
    }
    handleFilter()
  }, [filteredCountries])

  return countries
}
