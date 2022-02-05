import { useAppContext } from 'lib/AppProvider'
import useCountries from 'lib/hooks/useCountries'
import { CountryCard } from './CountryCard'

export default function Countries({ initCountries }) {
  const countries = useCountries({ initCountries, ...useAppContext() })

  return (
    <div className="wrapper mx-7 grid gap-10 py-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {countries?.map((country) => (
        <CountryCard country={country} key={country.name} />
      ))}
    </div>
  )
}
