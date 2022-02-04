export const REST_COUNTRIES_API = 'https://restcountries.com/v3.1'

export async function getAllCountries() {
  const res = await fetch(`${REST_COUNTRIES_API}/all`)
  const countries = (await res.json()).map((country) => ({
    name: country.name,
    population: country.population,
    region: country.region,
    flags: country.flags,
    capital: country.capital || 'N/A',
  }))
  return countries
}
