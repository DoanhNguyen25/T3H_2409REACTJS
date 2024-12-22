import AddStaff from 'components/AddStaff'
import StaffList from 'components/StaffList'
import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Staff = () => {
  const [count, setCount] = useState('hello ae lớp 2409')
  return (
    <div>
      <h1 className='mb-6 text-lg'>Staff Page</h1>
      <div className='border-b border-gray-200 text-center text-sm font-medium text-gray-500  '>
        <ul className='-mb-px flex flex-wrap'>
          <li className='mr-2'>
            <NavLink
              to={'list'}
              className={({ isActive }) =>
                `inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-blue-600 hover:text-blue-600 ${
                  isActive ? 'border-blue-600 text-blue-600' : ''
                }`
              }
            >
              List
            </NavLink>
          </li>
          <li className='mr-2'>
            <NavLink
              to={'add'}
              className={({ isActive }) =>
                `inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-blue-600 hover:text-blue-600 ${
                  isActive ? 'border-blue-600 text-blue-600' : ''
                }`
              }
            >
              Add
            </NavLink>
          </li>
        </ul>
      </div>
      {/* <StaffList />
      <AddStaff /> */}
      <Outlet context={count} />
    </div>
  )
}

export default Staff
