import axios from 'axios';
import { useFormik } from 'formik'
import React, { use, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup'
export default function Register() {

    const navigate = useNavigate()

    let [errMsg, setErrMsg] = useState(null)
    let [successMsg, setSuccessMsg] = useState(null)
    let [loading, setLoading] = useState(false)

    const validationSchema = yup.object().shape({
        name: yup.string().required("Please Enter Your Name").min(3, 'At Least 3 chars').max(15, 'Maximum 15 chars'),
        email: yup.string().required("Please Enter Your Email").email(),
        password: yup.string().required("Please Enter Your Password").matches(/^[A-z0-9_]{6,20}$/, "Enter Valid Password between 6 to 20 chars"),
        rePassword: yup.string().required("Please Enter Your Confirm Password").oneOf([yup.ref('password')], "'Confirm Password don't matches Password"),
        phone: yup.string().required("Please Enter Your Phone").matches(/^01[0125][0-9]{8}$/, 'Egyptian Numbers Only')
    })

    async function register(values) {
        setSuccessMsg(null)
        setErrMsg(null)
        setLoading(true)
        try {
            let res = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup", values)
            // console.log(res);
            setSuccessMsg(res.data.message)
            setTimeout(()=>{
                navigate('/login')
            } , 1000)
        }
        catch (err) {
            // console.log(err);
            setErrMsg(err.response.data.message)
        }finally{
            setLoading(false)
        }

    }


    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            rePassword: '',
            phone: '',
        },
        onSubmit: register,
        validationSchema
    })

    return <>

        <div className="container mx-auto">
            <div className="register py-8">

                <form onSubmit={formik.handleSubmit} className="max-w-2xl mx-auto">
                    <h2 className='text-xl font-semibold mb-4'>Register Now :</h2>
                    <div className="relative z-0 w-full mb-5 group">
                        <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                    </div>


                    {formik.errors.name && formik.touched.name ? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                        <span className="font-medium">Sorry!</span> {formik.errors.name}
                    </div> : null}

                    <div className="relative z-0 w-full mb-5 group">
                        <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                    </div>

                    {formik.errors.email && formik.touched.email ? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                        <span className="font-medium">Sorry!</span> {formik.errors.email}
                    </div> : null}

                    <div className="relative z-0 w-full mb-5 group">
                        <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>

                    {formik.errors.password && formik.touched.password ? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                        <span className="font-medium">Sorry!</span> {formik.errors.password}
                    </div> : null}


                    <div className="relative z-0 w-full mb-5 group">
                        <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" name="rePassword" id="rePassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="rePassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm Password</label>
                    </div>

                    {formik.errors.rePassword && formik.touched.rePassword ? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                        <span className="font-medium">Sorry!</span> {formik.errors.rePassword}
                    </div> : null}


                    <div className="relative z-0 w-full mb-5 group">
                        <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="tel" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone</label>
                    </div>


                    {formik.errors.phone && formik.touched.phone ? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                        <span className="font-medium">Sorry!</span> {formik.errors.phone}
                    </div> : null}


                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{loading ? 'Loading ....' : 'Submit'}</button>

                    {successMsg ? <div class="p-4 mt-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                        <span class="font-medium">God Job</span> {successMsg}.
                    </div> : null}

                    {errMsg ? <div class="p-4 mt-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                        <span class="font-medium">Sorry!</span> {errMsg}.
                    </div> : null}
                </form>

            </div>
        </div>

    </>
}
