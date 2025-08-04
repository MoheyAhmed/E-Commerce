import React, { Children } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'
import Brands from './components/Brands/Brands'
import Categories from './components/Categories/Categories'
import Products from './components/Products/Products'
import Login from './components/Login/Login'
import Error from './components/Error/Error'
import Register from './components/Resister/Register'
import AuthContextProvider from './components/Context/AuthContext'
import Gaurd from './components/Guard/Gaurd'
import AuthGaurd from './components/AuthGaurd/AuthGaurd'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ProductDetails from './components/ProductDetails/ProductDetails'
import CartContextProvider from './components/Context/CartContextProvider/CartContextProvider'
import { Toaster } from 'react-hot-toast'

const queryClient = new QueryClient()

const routes = createBrowserRouter([
  {path : '' , element : <Layout/> , children : [
    {index : true , element : <Gaurd><Home/></Gaurd>},
    {path : 'cart' , element : <Gaurd><Cart/></Gaurd>},
    {path : 'brands' , element : <Gaurd><Brands/></Gaurd>},
    {path : 'categories' , element : <Gaurd><Categories/></Gaurd>},
    {path : 'products' , element : <Gaurd><Products/></Gaurd>},
    {path : 'details/:id' , element : <Gaurd><ProductDetails/></Gaurd>},
    {path : 'register' , element : <AuthGaurd><Register/></AuthGaurd>},
    {path : 'login' , element : <AuthGaurd><Login/></AuthGaurd>},
    {path : '*' , element : <Error/>},
  ]}
])

export default function App() {
  return <>
        <AuthContextProvider>   
          <CartContextProvider>       
          <QueryClientProvider client={queryClient}>

          <RouterProvider router={routes}/>
          <Toaster  />
          </QueryClientProvider>
          </CartContextProvider>
        </AuthContextProvider>
  </>
}
