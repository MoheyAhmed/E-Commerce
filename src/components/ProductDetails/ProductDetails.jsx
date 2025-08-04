import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {
   let [details , setDetails] =  useState()
    const x = useParams()
    // console.log(x.id);
    async function getProductDetails() {
       const {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${x.id}`)
          // Fetch product details using the id from params}
          setDetails(data.data);
          console.log(data.data);
    }

    useEffect(() => {
        getProductDetails();
        console.log(details);    
    },[])
  return <>
    <div className="grid grid-cols-6">
        <div className="col-span-2">
            <img src={details?.imageCover} alt="" />
        </div>
        <div className="col-span-4">
                <h2>{details?.title}</h2>
                <p>{details?.description}</p>
                <span>{details?.price}</span>
        </div>
    </div>
  </>
}
