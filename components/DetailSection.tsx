export default function DetailSection({ country }) {
  return (
    <section className="wrapper py-10">
      {/* flag */}
      <img
        src={country.flag}
        alt={`${country.name}'s flag`}
        className="shadow-md"
      />
      {/* name */}
      <h2 className="my-8 text-2xl font-extrabold">{country.name}</h2>

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
          <span className="font-semibold">Sub Region:</span> {country.subregion}
        </p>
        {/* capital */}
        <p>
          <span className="font-semibold">Capital:</span> {country.capital}
        </p>
      </div>

      <div className="mt-14 space-y-2">
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

      {/* border countries */}
      <div className="mt-10">
        <p className="font-semibold">Border Countries:</p>
        {country.borders && (
          <div className="mt-2 flex flex-wrap gap-3">
            {country.borders.map((country) => (
              <div
                key={country}
                className="flex-[20%] flex-grow-0 whitespace-nowrap rounded-md bg-light-elements px-6 py-1 shadow-md dark:bg-dark-elements"
              >
                {country}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
