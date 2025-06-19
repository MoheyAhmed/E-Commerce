import React from 'react'
import Logo from '../../assets/images/freshcart-logo.svg'
import { Link, NavLink } from 'react-router-dom'
export default function Navbar() {
  return <>

    <nav className="bg-gray-200 border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <NavLink to="" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="h-8" alt="Flowbite Logo" />
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
        </NavLink>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <NavLink to="register" className="text-sm  text-gray-500 dark:text-white hover:underline">Register</NavLink>
          <NavLink to="login" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Login</NavLink>
          <button>Log Out</button>
        </div>
      </div>
    </nav>
    <nav className="bg-gray-100 dark:bg-gray-700">
      <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex items-center justify-center">
          <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
            <li>
              <NavLink to="" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</NavLink>
            </li>
            <li>
              <NavLink to="cart" className="text-gray-900 dark:text-white hover:underline">Cart</NavLink>
            </li>
            <li>
              <NavLink to="products" className="text-gray-900 dark:text-white hover:underline">Products</NavLink>
            </li>
            <li>
              <NavLink to="categories" className="text-gray-900 dark:text-white hover:underline">Categories</NavLink>
            </li>
            <li>
              <NavLink to="brands" className="text-gray-900 dark:text-white hover:underline">Brands</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  </>
}
