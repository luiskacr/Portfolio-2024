import { Routes, Route, } from "react-router-dom"

import { Home } from "./pages/Home"
import { Projects } from "./pages/Projects"
import { Contact } from "./pages/Contact"
import { Layout } from "./pages/Layout"
import { ErrorPage } from "./pages/ErrorPage"

function App() {

  return (
    <Routes>
      <Route element={<Layout/>} >
        <Route path='/' element={<Home/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact/>} />  
        </Route>
      <Route path='*' element={<ErrorPage/>} /> 
    </Routes>
  )
}

export default App
