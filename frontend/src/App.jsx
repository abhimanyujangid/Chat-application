import { useState } from 'react'
import './App.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import HomePage from './components/HomePage'
import Signup from './components/Signup'
import Login from './components/Login'

const router = createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },
  {
    path:"/login",
    element:<Login/>
  }
])
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='p-4 h-screen flex item-center justify-center'>
      <RouterProvider router={router}/>
    </div>
    </>
  )
}

export default App
