export const REST_COUNTRIES_API = 'https://restcountries.com/v3.1'

export function format(countries) {
  if (!countries) return null
  return countries?.map((country) => ({
    name: country.name.common,
    population: country.population,
    region: country.region,
    flag: country.flags?.svg,
    capital: country.capital || 'N/A',
  }))
}

export async function getAllCountries() {
  const res = await fetch(`${REST_COUNTRIES_API}/all`)
  const countries = await res.json()
  return format(countries)
}

export async function getCountryByName(name: string) {
  const res = await fetch(`${REST_COUNTRIES_API}/name/${name}`)
  const countries = await res.json()
  return format(countries)
}

export async function getCountryByRegion(region: string) {
  const res = await fetch(`${REST_COUNTRIES_API}/region/${region}`)
  const countries = await res.json()
  return format(countries)
}
