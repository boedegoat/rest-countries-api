import BackLink from 'components/BackLink'
import DetailSection from 'components/DetailSection'
import Layout from 'components/Layout'
import { getAllCountries, getSingleCountry } from 'lib/countries'

export default function CountryDetail({ country }) {
  return (
    <Layout title={country.name}>
      <BackLink />
      <DetailSection country={country} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = (await getAllCountries()).map((country) => ({
    params: {
      country: country.name,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const country = await getSingleCountry(params.country)
  return { props: { country } }
}
