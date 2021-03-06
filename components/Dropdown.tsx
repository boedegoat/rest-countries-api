import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { useAppContext } from 'lib/AppProvider'

export default function Dropdown() {
  const { region } = useAppContext()

  return (
    <div className="w-60">
      <Menu as="div" className="relative ">
        <div>
          <Menu.Button className="inline-flex w-full justify-between rounded-md bg-light-elements px-7 py-4 text-sm  font-semibold capitalize shadow-sm hover:bg-opacity-30 focus:outline-none focus-visible:ring focus-visible:ring-light-input/50 focus-visible:ring-offset-2 focus-visible:ring-offset-light-background dark:bg-dark-elements dark:focus-visible:ring-offset-dark-background">
            {region || 'filter by region'}
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 mt-2 w-full origin-top rounded-md bg-light-elements py-2 shadow-lg focus:outline-none dark:bg-dark-elements">
            <MenuItem region="">All</MenuItem>
            <MenuItem region="africa">Africa</MenuItem>
            <MenuItem region="americas">Americas</MenuItem>
            <MenuItem region="asia">Asia</MenuItem>
            <MenuItem region="europe">Europe</MenuItem>
            <MenuItem region="oceania">Oceania</MenuItem>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

function MenuItem({ children, region }) {
  const { setRegion } = useAppContext()

  return (
    <Menu.Item>
      <button
        onClick={() => {
          setRegion(region)
        }}
        className="w-full py-2 px-7 text-left text-sm font-semibold hover:bg-gray-100 dark:hover:bg-dark-background/40"
      >
        {children}
      </button>
    </Menu.Item>
  )
}
