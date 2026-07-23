import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import { Toaster } from 'sonner';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <Toaster richColors toastOptions={{ classNames: { success: "bg-green-600 text-white", error: "bg-red-600 text-white" } }} />
    <RouterProvider router={App}/>
    </Provider>
  </StrictMode>,
)
