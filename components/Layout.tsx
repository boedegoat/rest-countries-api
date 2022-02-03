import Head from 'next/head'

export default function Layout({ children, title }) {
  return (
    <main className="min-h-screen bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text">
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </main>
  )
}
