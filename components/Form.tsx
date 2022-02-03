import { SearchIcon } from '@heroicons/react/outline'
import Dropdown from './Dropdown'

export default function Form() {
  return (
    <div className="wrapper mt-8 space-y-9">
      {/* Search Bar */}
      <div className="flex items-center space-x-5 rounded-md bg-light-elements px-8 py-4 text-light-input shadow-sm focus-within:shadow-md dark:bg-dark-elements dark:text-dark-text">
        <SearchIcon className="w-6" />
        <input
          type="text"
          placeholder="Search for a country..."
          className="w-full bg-transparent text-sm font-light outline-none"
        />
      </div>
      <Dropdown />
    </div>
  )
}
