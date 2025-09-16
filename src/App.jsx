import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Layout from "./layout/Layout.jsx"
import Home from "./pages/Home/Home.jsx"


const App = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>

      <Route index element={<Home/>} />


    </Route>
  )
)

export default App
