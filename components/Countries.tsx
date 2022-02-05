import { useAppContext } from 'lib/AppProvider'
import useCountries from 'lib/hooks/useCountries'
import { CountryCard } from './CountryCard'

export default function Countries({ initCountries }) {
  const countries = useCountries({ initCountries, ...useAppContext() })

  return (
    <div className="wrapper mx-7 my-10 space-y-10">
      {countries?.map((country) => (
        <CountryCard country={country} key={country.slug} />
      ))}
    </div>
  )
}
