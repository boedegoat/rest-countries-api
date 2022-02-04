import { useAppContext } from 'lib/AppProvider'
import Link from 'next/link'
import { useRef } from 'react'

export default function Countries({ initCountries }) {
  const { filteredCountries, searchCountry, region } = useAppContext()

  // check if searchCountry or region is not empty
  // show filteredCountries instead
  const isFilterMode = region || searchCountry
  const isFilterSuccess = filteredCountries?.status !== 404

  const countries = useRef([])
  if (isFilterMode) {
    countries.current = isFilterSuccess ? filteredCountries : []
  } else {
    countries.current = initCountries
  }

  return (
    <div className="wrapper mx-7 my-10 space-y-10">
      {countries.current?.map((country, id) => (
        <Link key={id} href={`/${country.name.common}`}>
          <a className="block overflow-hidden rounded-md bg-light-elements shadow-md dark:bg-dark-elements">
            <img
              src={country.flags.svg}
              alt={`${country.name.common}'s flag`}
            />
            <div className="px-7 pt-5 pb-10">
              <p className="text-lg font-extrabold">{country.name.common}</p>
              <div className="mt-4 space-y-1">
                <p className="text-sm">
                  <span className="font-extrabold">Population</span>:{' '}
                  {country.population.toLocaleString()}
                </p>
                <p className="text-sm">
                  <span className="font-extrabold">Region</span>:{' '}
                  {country.region}
                </p>
                <p className="text-sm">
                  <span className="font-extrabold">Capital</span>:{' '}
                  {country.capital}
                </p>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  )
}
