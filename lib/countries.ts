export const REST_COUNTRIES_API = 'https://restcountries.com/v3.1'

export function format(countries) {
  if (!Array.isArray(countries)) return null
  return countries?.map((country) => ({
    name: country.name.common,
    population: country.population,
    region: country.region,
    flag: country.flags?.svg,
    capital: country.capital || 'N/A',
    slug: country.name.common.toLowerCase().replace(/\s/g, '-'),
  }))
}

export async function getAllCountries() {
  const res = await fetch(`${REST_COUNTRIES_API}/all`)
  const countries = await res.json()
  return format(countries)
}

export async function getCountryByName(name: string, region: string) {
  const res = await fetch(`${REST_COUNTRIES_API}/name/${name}`)
  const countries = await res.json()
  return format(countries)?.filter((country) =>
    region ? country.region.toLowerCase() === region : true
  )
}

export async function getCountryByRegion(name: string, region: string) {
  const res = await fetch(`${REST_COUNTRIES_API}/region/${region}`)
  const countries = await res.json()
  return format(countries)?.filter((country) =>
    name ? country.name.toLowerCase().includes(name) : true
  )
}
