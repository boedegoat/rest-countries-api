import Link from 'next/link'

export default function Countries({ countries }) {
  console.log(countries)

  return (
    <div className="wrapper mx-7 my-10 space-y-10">
      {countries.map((country, id) => (
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
