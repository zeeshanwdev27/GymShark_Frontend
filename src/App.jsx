import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Layout from "./layout/Layout.jsx"
import Home from "./pages/Home/Home.jsx"
import Men_Section from "./pages/Men_Section/Men_Section.jsx"
import Women_Section from "./pages/Women_Section/Women_Section.jsx"
import Product from './pages/Product/Product.jsx'


const App = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>

      <Route index element={<Home/>} />
      <Route path="/collections/mens" element={<Men_Section/>} />
      <Route path="/collections/womens" element={<Women_Section/>} />
      <Route path="/collections/product" element={<Product/>} />


    </Route>
  )
)

export default App
