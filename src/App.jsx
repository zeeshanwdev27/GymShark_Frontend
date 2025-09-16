import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Layout from "./layout/Layout.jsx"
import HeroSection from "./pages/HeroSection/HeroSection.jsx"


const App = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>

      <Route index element={<HeroSection/>} />


    </Route>
  )
)

export default App
