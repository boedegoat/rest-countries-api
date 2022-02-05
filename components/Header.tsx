import { MoonIcon } from '@heroicons/react/outline'
import { MoonIcon as MoonIconSolid } from '@heroicons/react/solid'
import useDarkMode from 'lib/hooks/useDarkMode'

export default function Header() {
  const [theme, setTheme] = useDarkMode()
  const moonIconClass = 'w-5'

  return (
    <header className="bg-light-elements py-7 shadow-md dark:bg-dark-elements">
      <div className="wrapper flex items-center justify-between">
        <h1 className="font-extrabold">Where in the world ?</h1>
        {/* Dark Mode button */}
        <button
          className="flex items-center space-x-2"
          onClick={() => {
            setTheme('toggle')
          }}
        >
          {theme === 'dark' ? (
            <MoonIconSolid className={moonIconClass} />
          ) : (
            <MoonIcon className={moonIconClass} />
          )}
          <span className="whitespace-nowrap text-sm font-semibold">
            Dark mode
          </span>
        </button>
      </div>
    </header>
  )
}
