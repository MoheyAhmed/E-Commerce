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


const routes = createBrowserRouter([
  {path : '' , element : <Layout/> , children : [
    {index : true , element : <Home/>},
    {path : 'cart' , element : <Cart/>},
    {path : 'brands' , element : <Brands/>},
    {path : 'categories' , element : <Categories/>},
    {path : 'products' , element : <Products/>},
    {path : 'register' , element : <Register/>},
    {path : 'login' , element : <Login/>},
    {path : '*' , element : <Error/>},
  ]}
])

export default function App() {
  return <>
      <RouterProvider router={routes}/>
  </>
}
