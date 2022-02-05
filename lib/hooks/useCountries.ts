import { useEffect, useRef, useState } from 'react'

export default function useCountries({
  region,
  searchCountry,
  filteredCountries,
  initCountries,
}) {
  const [countries, setCountries] = useState(initCountries)

  // check if searchCountry or region is not empty
  // show filteredCountries instead
  useEffect(() => {
    const inFilterMode = region || searchCountry
    const isFilterSuccess = filteredCountries?.status !== 404
    if (inFilterMode) {
      setCountries(isFilterSuccess ? filteredCountries : [])
    } else {
      setCountries(initCountries)
    }
  }, [region, searchCountry, filteredCountries])

  return countries
}
