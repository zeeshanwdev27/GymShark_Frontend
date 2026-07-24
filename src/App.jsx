import React, { useEffect, useMemo } from "react"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { useDispatch } from "react-redux"
import { getMe } from "@/features/Auth/authSlice"
import Layout from "./layout/Layout.jsx"

const Home = React.lazy(() => import('./pages/Home/Home.jsx'))
const Men_Section = React.lazy(() => import('./pages/Men_Section/Men_Section.jsx'))
const Women_Section = React.lazy(() => import('./pages/Women_Section/Women_Section.jsx'))
const Product = React.lazy(() => import('./pages/Product/Product.jsx'))
const Success = React.lazy(() => import('./pages/Success/Success.jsx'))
const Cancel = React.lazy(() => import('./pages/Cancel/Cancel.jsx'))
const Auth = React.lazy(() => import('./components/Auth.jsx'))
const GuestRoute = React.lazy(() => import('./components/GuestRoute.jsx'))

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMe())
  }, [dispatch])

  const router = useMemo(() =>
    createBrowserRouter(
      createRoutesFromElements(
        <>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="collections/mens" element={<Men_Section />} />
            <Route path="collections/womens" element={<Women_Section />} />
            <Route path="collections/product/:productId" element={<Product />} />
          </Route>

          <Route path="success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/login" element={<GuestRoute><Auth /></GuestRoute>} />
        </>
      )
    ),
  [])

  return <RouterProvider router={router} />
}

export default App