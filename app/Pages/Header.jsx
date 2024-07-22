/* eslint-disable @next/next/no-img-element */
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Services', href: '#', },
  { name: 'Media', href: '#', current: false },
  { name: 'Cases', href: '#', current: false },
  { name: 'FAQ', href: '#', current: false },
  { name: 'Contacts', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <>
      <div className="min-h-full ">

        {/* className="bg-white shadow fixed w-full top-0 z-10" */}
        {/* max-w-7xl */}

        <Disclosure as="nav" className="bg-white shadow fixed min-w-full top-10 z-10">
          <div className="mx-auto  max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    alt="Your Company"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    className="h-8 w-8"
                  />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                      // className={classNames(
                      //   item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      //   'rounded-md px-3 py-2 text-sm font-medium',
                      // )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <div
                    className='space-x-4'
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="hidden md:inline">+91 0000000000</span>
                    <span className="hidden md:inline">demo@gmail.com</span>
                  </div>

                </div>
              </div>

              <div className="-mr-2 flex md:hidden">
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                  <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                </DisclosureButton>
              </div>

            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
            <div className="border-t border-gray-700 pb-3 pt-4">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <span className="hidden md:inline">+91 0000000000</span>
                </div>
                <div className="ml-3">

                  <div className="text-sm font-medium leading-none text-gray-400">+91 0000000000</div>
                </div>
                <button
                  type="button"
                  className="relative ml-auto flex-shrink-0   p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  demo@gmail.com
                </button>
              </div>

            </div>
          </DisclosurePanel>


        </Disclosure>

        {/* <main className="pt-16 bg-gray-100"> */}
        <div className="max-w-7xl mx-auto px-4 py-12 flex flex-wrap lg:flex-nowrap items-center">

          <div className="w-full lg:w-1/2 lg:pr-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              User-Centric Excellence: Our App Development Services Tackle Your Pain Points
            </h1>
            <p className="text-gray-600 mb-8">
              Experience a Seamless Digital Journey with Desun - Where Every Line of Code Resolves Your Challenges and Elevates Your App Experience to Unparalleled Heights.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">
                Leave your contacts and we will call you back within 30 minutes
              </h2>
              <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="col-span-1">
                  <label className="block text-gray-700">Full name</label>
                  <input type="text" className="w-full mt-1 p-2 border rounded-md" placeholder="My Name" />
                </div>
                <div className="col-span-1">
                  <label className="block text-gray-700">Phone number</label>
                  <input type="text" className="w-full mt-1 p-2 border rounded-md" placeholder="+91 0000000000" />
                </div>
                <div className="col-span-1">
                  <label className="block text-gray-700">Business name</label>
                  <input type="text" className="w-full mt-1 p-2 border rounded-md" placeholder="ABC Technologies PVT LTD" />
                </div>
                <div className="col-span-1">
                  <label className="block text-gray-700">Business mail</label>
                  <input type="email" className="w-full mt-1 p-2 border rounded-md" placeholder="demoaccount@gmail.com" />
                </div>
                <div className="col-span-2 text-center">
                  <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
                    Get Consultation
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <Image
              src="/images/hope-gif1.png"
              alt="Next.js Logo"
              width={600}
              height={100}
              priority
            />
          </div>

        </div>
        {/* </main> */}


      </div>
    </>
  )
}
