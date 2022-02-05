import { ArrowLeftIcon } from '@heroicons/react/outline'
import Link from 'next/link'

export default function BackLink() {
  return (
    <div className="wrapper pt-8">
      <Link href="/">
        <a className="inline-flex items-center space-x-2 rounded-md bg-light-elements px-4 py-1 text-sm font-semibold shadow-md dark:bg-dark-elements">
          <ArrowLeftIcon className="w-4" />
          <span>Back</span>
        </a>
      </Link>
    </div>
  )
}
