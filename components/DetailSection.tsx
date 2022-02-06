export default function DetailSection({ country }) {
  return (
    <section className="wrapper py-10 lg:flex lg:items-center lg:space-x-20">
      {/* flag */}
      <img
        src={country.flag}
        alt={`${country.name}'s flag`}
        className="shadow-md lg:w-[43%]"
      />

      <div className="lg:flex-grow">
        {/* name */}
        <h2 className="my-8 text-2xl font-extrabold lg:mt-0">{country.name}</h2>

        <div className="lg:flex lg:justify-between">
          <div className="space-y-2">
            {/* native name */}
            <p>
              <span className="font-semibold">Native Name:</span>{' '}
              {country.nativeName}
            </p>
            {/* population */}
            <p>
              <span className="font-semibold">Population:</span>{' '}
              {country.population.toLocaleString()}
            </p>
            {/* region */}
            <p>
              <span className="font-semibold">Region:</span> {country.region}
            </p>
            {/* sub region */}
            <p>
              <span className="font-semibold">Sub Region:</span>{' '}
              {country.subregion}
            </p>
            {/* capital */}
            <p>
              <span className="font-semibold">Capital:</span> {country.capital}
            </p>
          </div>

          <div className="mt-14 space-y-2 lg:mt-0">
            {/* top level domain */}
            <p>
              <span className="font-semibold">Top Level Domain:</span>{' '}
              {country.topLevelDomain}
            </p>
            {/* currencies */}
            <p>
              <span className="font-semibold">Currencies:</span>{' '}
              {country.currencies.join(', ')}
            </p>
            {/* languages */}
            <p>
              <span className="font-semibold">Languages:</span>{' '}
              {country.languages.join(', ')}
            </p>
          </div>
        </div>

        {/* border countries */}
        <div className="mt-10 flex flex-col lg:flex-row lg:items-start lg:space-x-4">
          <p className="whitespace-nowrap font-semibold">Border Countries:</p>
          <div className="mt-2 flex flex-wrap gap-3 lg:mt-0">
            {country.borders.map((country) => (
              <div
                key={country}
                className="flex-[20%] flex-grow-0 whitespace-nowrap rounded-md bg-light-elements px-6 py-1 shadow-md dark:bg-dark-elements"
              >
                {country}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
