export const REST_COUNTRIES_API = 'https://restcountries.com/v2'

export function format(countries) {
  if (!Array.isArray(countries)) return null
  return countries?.map((country) => ({
    name: country.name,
    population: country.population,
    region: country.region,
    flag: country.flag,
    capital: country.capital || 'N/A',
    slug: country.name.toLowerCase().replace(/\s/g, '-'),
  }))
}

export async function formatDetails(country) {
  const res = await fetch(
    `${REST_COUNTRIES_API}/alpha?codes=${country.borders.join(',')}`
  )
  const borderCountries = (await res.json()).map((country) => country.name)

  return {
    name: country.name,
    nativeName: country.nativeName,
    population: country.population,
    region: country.region,
    subregion: country.subregion,
    flag: country.flag,
    capital: country.capital || 'N/A',
    topLevelDomain: country.topLevelDomain[0],
    currencies: country.currencies.map((currency) => currency.name),
    languages: country.languages.map((lang) => lang.name),
    borders: borderCountries,
    slug: country.name.toLowerCase().replace(/\s/g, '-'),
  }
}

export async function getAllCountries() {
  const res = await fetch(`${REST_COUNTRIES_API}/all`)
  const countries = await res.json()
  return format(countries)
}

export async function getSingleCountryBySlug(slug: string) {
  const res = await fetch(
    `${REST_COUNTRIES_API}/name/${slug.replace(/-/g, 's')}?fullText=true`
  )
  const country = (await res.json())[0]
  return await formatDetails(country)
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
