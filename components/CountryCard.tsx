import { motion } from 'framer-motion'
import Link from 'next/link'

export function CountryCard({ country }) {
  return (
    <Link href={'/' + country.name} scroll={false} passHref>
      <motion.a
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 block overflow-hidden rounded-md bg-light-elements shadow-md dark:bg-dark-elements"
      >
        <img src={country.flag} alt={`${country.name}'s flag`} />
        <div className="px-7 pt-5 pb-10">
          <h3 className="text-lg font-extrabold">{country.name}</h3>
          <div className="mt-4 space-y-1">
            <p className="text-sm">
              <span className="font-extrabold">Population:</span>{' '}
              {country.population.toLocaleString()}
            </p>
            <p className="text-sm">
              <span className="font-extrabold">Region:</span> {country.region}
            </p>
            <p className="text-sm">
              <span className="font-extrabold">Capital:</span> {country.capital}
            </p>
          </div>
        </div>
      </motion.a>
    </Link>
  )
}
