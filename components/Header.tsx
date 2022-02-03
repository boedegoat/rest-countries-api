import { MoonIcon } from '@heroicons/react/outline'

export default function Header() {
  return (
    <header className="bg-light-elements py-7 shadow-md dark:bg-dark-elements">
      <div className="wrapper flex items-center justify-between">
        <h1 className="font-extrabold">Where in the world ?</h1>
        {/* Dark Mode button */}
        <button className="flex items-center space-x-2">
          <MoonIcon className="w-5" />
          <span className="whitespace-nowrap text-sm font-semibold">
            Dark Mode
          </span>
        </button>
      </div>
    </header>
  )
}
