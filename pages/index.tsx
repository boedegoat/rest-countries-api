import Countries from 'components/Countries'
import Form from 'components/Form'
import Header from 'components/Header'
import Layout from 'components/Layout'
import { getAllCountries } from 'lib/countries'

export default function Home({ countries }) {
  return (
    <Layout title="REST Countries">
      <Header />
      <Form />
      <Countries initCountries={countries} />
    </Layout>
  )
}

export async function getStaticProps() {
  const countries = await getAllCountries()
  return {
    props: { countries },
  }
}
