import MainLayout from 'layouts/MainLayout'
import About from 'pages/About'
import Dashboard from 'pages/Dashboard'
import StaffList from 'components/StaffList'
import { Route, Routes, useRoutes } from 'react-router-dom'
import Staff from 'pages/Staff/Staff'
import AddStaff from 'components/AddStaff'
import StaffItem from 'components/StaffItem'
import { createContext, useState } from 'react'

export const AppContext = createContext<any>(null)
const SystemMode = {
  light: 'light',
  dark: 'dark'
}

function App() {
  const [modeDemo, setModeDemo] = useState(SystemMode.dark)
  
  // sử dụng hook useRoutes để định tuyến trong react js

  const elementsRoutes = useRoutes([
    {
      path: '/',
      element: <Dashboard />,
      children: []
    },
    {
      path: 'staff',
      element: <Staff />,
      children: [
        { path: '', element: <StaffList /> },
        { path: 'list', element: <StaffList /> },
        { path: 'add', element: <AddStaff /> },
        { path: ':id', element: <StaffItem /> }
      ]
    },
    {
      path: 'about',
      element: <About />,
      children: []
    },
    {
      path: '*',
      element: <>Not Found</>,
      children: []
    }
  ])
  return (
    <AppContext.Provider value={{ modeDemo, setModeDemo }}>
      <div className='App'>
        <MainLayout>
          {/* Cách 2 là sử dụng jsx để khai báo các định tuyến trong react js */}
          {/* <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/staff' element={<Staff />}>
            <Route path='' element={<StaffList />} />
            <Route path='list' element={<StaffList />} />
            <Route path='add' element={<AddStaff />} />
            <Route path=':id' element={<StaffItem />} />
          </Route>
          <Route path='/about' element={<About />} />
          <Route path='*' element={<>Not Found</>} />
        </Routes> */}
          {elementsRoutes}
          {/* <Dashboard />
        <About />
        <StaffList /> */}
        </MainLayout>
      </div>
    </AppContext.Provider>
  )
}

export default App
