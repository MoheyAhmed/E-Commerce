import axios from "axios";
import React, { createContext, useState } from "react";
import toast from "react-hot-toast";

export const cartContext = createContext();
export default function CartContextProvider({ children }) {
  let [numOfCartItems, setNumOfCartItems] = useState();
 let [allCartItems , setAllItems] = useState([])
  async function addToCart(productId) {
    try {
      let res = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/cart",
        { productId },
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      console.log(res);
      if (res.data.status == "success") {
        toast.success("Product added Successfully!");
        setNumOfCartItems(res.data.numOfCartItems);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong!");
    }
  }

  async function getCartItems() {
    try {
      const res = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/cart",
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      console.log(res);
      if(res.data.status == "success"){
        setAllItems(res.data.data.products)
      }
      
    } catch (error) {
        console.log(error);
    }
  }
  return (
    <>
      <cartContext.Provider value={{ addToCart, numOfCartItems , getCartItems , allCartItems}}>
        {children}
      </cartContext.Provider>
    </>
  );
}
