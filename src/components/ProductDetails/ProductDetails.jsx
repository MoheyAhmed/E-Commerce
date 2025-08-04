import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  let [details, setDetails] = useState();
  const x = useParams();
  // console.log(x.id);
  async function getProductDetails() {
    const { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products/${x.id}`
    );
    // Fetch product details using the id from params}
    setDetails(data.data);
    console.log(data.data);
  }

  useEffect(() => {
    getProductDetails();
    console.log(details);
  }, []);
  return (
    <>
      <div className="grid grid-cols-6">
        <div className="col-span-2">
          <img src={details?.imageCover} alt="" />
        </div>
        <div className="col-span-4">
          <h2>{details?.title}</h2>
          <p>{details?.description}</p>
          <span>{details?.price}$</span>
          <button className=" block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}
