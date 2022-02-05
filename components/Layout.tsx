import Head from 'next/head'
import Header from './Header'

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main className="wrapper">{children}</main>
    </>
  )
}
