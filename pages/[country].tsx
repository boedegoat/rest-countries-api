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
  const paths = (await getAllCountries()).slice(0, 32).map((country) => ({
    params: {
      country: country.name,
    },
  }))
  return {
    paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }) {
  const country = await getSingleCountry(params.country)
  if (!country) {
    return {
      notFound: true,
    }
  }
  return { props: { country } }
}
