import MainLayout from 'layouts/MainLayout'
import About from 'pages/About'
import Dashboard from 'pages/Dashboard'
import StaffList from 'components/StaffList'
import { Route, Routes, useRoutes } from 'react-router-dom'
import Staff from 'pages/Staff/Staff'
import AddStaff from 'components/AddStaff'
import StaffItem from 'components/StaffItem'

function App() {
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
  )
}

export default App
