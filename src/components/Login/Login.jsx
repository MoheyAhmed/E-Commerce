import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
export default function Login() {

  const navigate = useNavigate()

  let [errMsg , setErrMsg] =useState(null)
  let [succesMsg , setSuccesMsg] =useState(null)
  let [loading , setLoading] =useState(false)

  const validationSchema = yup.object().shape({
    email: yup.string().required("Please Enter Your Email").email(),
    password: yup.string().required("Please Enter Your Password").matches(/^[A-z0-9_]{6,20}$/, "Enter Valid Password between 6 to 20 chars")
  })

  async function login(values) {
    setErrMsg(null)
    setSuccesMsg(null)
    setLoading(true)
    try{
      let res = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin" , values)
      // console.log(res);
      setSuccesMsg(res.data.message)
      setTimeout(()=>{
        navigate('/')
      },1000)
    }catch(err){
      // console.log(err);
      setErrMsg(err.response.data.message)
    }finally{
      setLoading(false)
    }


  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: login,
    validationSchema
  })


  return <>


    <div className="container mx-auto">
      <div className="login py-8">

        <form onSubmit={formik.handleSubmit} className="max-w-xl mx-auto">
          <h2 className='text-xl font-semibold mb-4'>Login Now :</h2>
          <div className="relative z-0 w-full mb-5 group">
            <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
          </div>


          {formik.errors.email && formik.touched.email ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            <span className="font-medium">Sorry!</span> {formik.errors.email}.
          </div> : null}



          <div className="relative z-0 w-full mb-5 group">
            <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
          </div>

          {formik.errors.password && formik.touched.password ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            <span className="font-medium">Sorry!</span> {formik.errors.password}.
          </div> : null}



          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{loading ? 'Loading ....' : 'Submit'}</button>

            {errMsg ? <div className="p-4 mt-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            <span className="font-medium">Sorry!</span> {errMsg}.
          </div> : null}

          {succesMsg ? <div className="p-4 mt-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            <span className="font-medium">God Job!</span> {succesMsg}.
          </div> : null}
          
        </form>

      </div>
    </div>

  </>
}
