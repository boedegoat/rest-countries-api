import { useAppContext } from 'lib/AppProvider'
import useCountries from 'lib/hooks/useCountries'
import { CountryCard } from './CountryCard'
import Masonry from 'react-masonry-css'

export default function Countries({ initCountries }) {
  const countries = useCountries({ initCountries, ...useAppContext() })

  return (
    <Masonry
      className="wrapper mx-7 flex space-x-10 pt-10"
      breakpointCols={{
        default: 4,
        768: 1,
        1024: 2,
        1280: 3,
      }}
    >
      {countries?.map((country) => (
        <CountryCard country={country} key={country.name} />
      ))}
    </Masonry>
  )
}
