import Countries from 'components/Countries'
import Form from 'components/Form'
import Header from 'components/Header'
import Layout from 'components/Layout'
import { useState } from 'react'

const REST_COUNTRIES_API = 'https://restcountries.com/v3.1'

export default function Home({ countries }) {
  const [filteredCountries, setFilteredCountries] = useState(null)
  const [searchCountry, setSearchCountry] = useState('')
  const [region, setRegion] = useState('')

  const formProps = {
    searchCountry,
    setSearchCountry,
    region,
    setRegion,
    setFilteredCountries,
    REST_COUNTRIES_API,
  }

  return (
    <Layout title="REST Countries">
      <Header />
      <Form {...formProps} />
      <Countries countries={filteredCountries ?? countries} />
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${REST_COUNTRIES_API}/all`)
  const countries = await res.json()
  return {
    props: { countries },
  }
}
