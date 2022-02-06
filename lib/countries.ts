export const REST_COUNTRIES_API = 'https://restcountries.com/v2'

export function format(countries) {
  if (!Array.isArray(countries)) return null
  return countries?.map((country) => ({
    name: country.name,
    population: country.population,
    region: country.region,
    flag: country.flag,
    capital: country.capital || 'N/A',
  }))
}

export async function formatDetails(country) {
  let borderCountries = ['N/A']
  if ('borders' in country) {
    const res = await fetch(
      `${REST_COUNTRIES_API}/alpha?codes=${country.borders.join(',')}`
    )
    borderCountries = (await res.json()).map((country) => country.name)
  }

  return {
    name: country.name,
    nativeName: country.nativeName || 'N/A',
    population: country.population,
    region: country.region,
    subregion: country.subregion,
    flag: country.flag,
    capital: country.capital || 'N/A',
    topLevelDomain: country.topLevelDomain[0],
    currencies: country.currencies?.map((currency) => currency.name) || ['N/A'],
    languages: country.languages.map((lang) => lang.name),
    borders: borderCountries,
  }
}

export async function getAllCountries() {
  const res = await fetch(`${REST_COUNTRIES_API}/all`)
  const countries = await res.json()
  return format(countries)
}

export async function getSingleCountry(name: string) {
  const res = await fetch(`${REST_COUNTRIES_API}/name/${name}?fullText=true`)
  const country = (await res.json())[0]
  if (!country) return null
  return await formatDetails(country)
}

export async function getCountryByName(name: string, region?: string) {
  const res = await fetch(`${REST_COUNTRIES_API}/name/${name}`)
  const countries = await res.json()
  return format(countries)?.filter((country) =>
    region ? country.region.toLowerCase() === region : true
  )
}

export async function getCountryByRegion(region: string, name?: string) {
  const res = await fetch(`${REST_COUNTRIES_API}/region/${region}`)
  const countries = await res.json()
  return format(countries)?.filter((country) =>
    name ? country.name.toLowerCase().includes(name) : true
  )
}
