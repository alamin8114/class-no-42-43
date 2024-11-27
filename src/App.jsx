import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LayoutOne from './Components/LayoutOne/LayoutOne'
import Count from './pages/Count'
import Api from './pages/api'
import Home from './pages/Home'
import Navbar from './Components/Navbar/Navbar'

function App() {
    const myroute=createBrowserRouter(
      createRoutesFromElements(
        <Route>
          <Route path='/' element={<LayoutOne/>}>
          <Route index element={<Home/>}/>
          <Route path='/api' element={<Api/>}/>
          <Route path='/count' element={<Count/>}/>
          </Route>
        </Route>
      )
    )

  return (
    <>
    
      <RouterProvider router={myroute}/>
    </>
    
  )
}

export default App
