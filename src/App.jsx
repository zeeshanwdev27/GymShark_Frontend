import React from "react"
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Layout from "./layout/Layout.jsx"

const Home = React.lazy(()=> import('./pages/Home/Home.jsx'))
const Men_Section = React.lazy(()=> import('./pages/Men_Section/Men_Section.jsx'))
const Women_Section = React.lazy(()=> import('./pages/Women_Section/Women_Section.jsx'))
const Product = React.lazy(()=> import('./pages/Product/Product.jsx'))
const Success = React.lazy(()=> import('./pages/Success/Success.jsx'))
const Cancel = React.lazy(()=> import('./pages/Cancel/Cancel.jsx'))

const App = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="collections/mens" element={<Men_Section />} />
        <Route path="collections/womens" element={<Women_Section />} />
        <Route path="collections/product" element={<Product />} />
      </Route>

      <Route path="success" element={<Success />} />
      <Route path="/cancel" element={<Cancel />} />
    </>
  )
)

export default App
