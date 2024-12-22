import { builtinModules } from 'module'
import React from 'react'
import { NavLink, Link } from 'react-router-dom'

interface Props {
  children?: React.ReactNode
}
export default function MainLayout({ children }: Props) {
  return (
    <div className='grid min-h-screen grid-cols-4'>
      <aside className='col-span-1' aria-label='Sidebar'>
        <div className='h-full overflow-y-auto bg-gray-100 py-4 px-3 shadow-lg'>
          <ul className='space-y-2'>
            <li>
              <NavLink
                to='/'
                end
                className={({ isActive }) =>
                  `flex items-center rounded-lg ${
                    isActive ? 'bg-gray-300 font-bold' : ''
                  } p-2 text-base font-normal text-gray-900 hover:bg-gray-300`
                }
              >
                <span className={'ml-3 '}>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/staff'
                className={({ isActive }) =>
                  `flex items-center rounded-lg ${
                    isActive ? 'bg-gray-300 font-bold' : ''
                  } p-2 text-base font-normal text-gray-900 hover:bg-gray-300`
                }
              >
                <span className='ml-3'>Staff</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/about'
                className={({ isActive }) =>
                  `flex items-center rounded-lg ${
                    isActive ? 'bg-gray-300 font-bold' : ''
                  } p-2 text-base font-normal text-gray-900 hover:bg-gray-300`
                }
              >
                <span className='ml-3'>About</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
      <main className='col-span-3 h-full py-4 px-3'>{children}</main>
    </div>
  )
}
