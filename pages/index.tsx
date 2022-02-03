import Countries from 'components/Countries'
import Form from 'components/Form'
import Header from 'components/Header'
import Layout from 'components/Layout'

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
  const res = await fetch('https://restcountries.com/v2/all')
  const countries = await res.json()
  return {
    props: { countries },
  }
}
