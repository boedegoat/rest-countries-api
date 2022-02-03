import Countries from 'components/Countries'
import Form from 'components/Form'
import Header from 'components/Header'
import Layout from 'components/Layout'

const REST_COUNTRIES_API = 'https://restcountries.com/v3.1'

export default function Home({ countries }) {
  return (
    <Layout title="REST Countries">
      <Header />
      <Form />
      <Countries countries={countries} />
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
