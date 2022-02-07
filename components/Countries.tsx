import { useAppContext } from 'lib/AppProvider'
import useCountries from 'lib/hooks/useCountries'
import { CountryCard } from './CountryCard'
import Masonry from 'react-masonry-css'

export default function Countries({ initCountries }) {
  const { loading, ...appContext } = useAppContext()
  const countries = useCountries({ initCountries, ...appContext })

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
      {!loading
        ? countries?.map((country) => (
            <CountryCard country={country} key={country.name} />
          ))
        : Array.from({ length: 8 }).map((_, id) => (
            <CountryCardSkeleton key={id} />
          ))}
    </Masonry>
  )
}

function CountryCardSkeleton() {
  return (
    <div className="mb-10 block h-[340px] animate-pulse overflow-hidden rounded-md border bg-gray-500/20 dark:bg-dark-elements"></div>
  )
}
