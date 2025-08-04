import axios from "axios";
import React, { useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from 'swiper/react';
import Slider1 from '../../assets/images/slider-image-1.jpeg'
import Slider2 from '../../assets/images/slider-image-2.jpeg'
import Slider3 from '../../assets/images/slider-image-3.jpeg'
import blogImg1 from '../../assets/images/blog-img-1.jpeg'
import blogImg2 from '../../assets/images/blog-img-2.jpeg'
export default function Home() {
  // let [allProducts, setAllProducts] = useState([]);
  // let [loading , setLoading] = useState(false)
  async function getAllProducts() {
    // setLoading(true)
    return await axios.get(
      "https://ecommerce.routemisr.com/api/v1/products"
    );
    // setAllProducts(res.data.data);
    // setLoading(false)
  }

  async function getAllCategories() {
    return await axios.get("https://ecommerce.routemisr.com/api/v1/categories")
  }

  const {data , isLoading} = useQuery({
    queryKey:'allProducts',
    queryFn:getAllProducts,
    refetchOnWindowFocus:false
  })  

  const {data:allCategories} = useQuery({
    queryKey: "allCategories",
    queryFn : getAllCategories,
    refetchOnWindowFocus:false
  })


  const allProductsData = data?.data.data
  const allCategoriesData = allCategories?.data.data
  // console.log(allProductsData);

  console.log(allCategoriesData);
  
  

  useEffect(() => {
    getAllProducts();
  }, []);
  return <> 
<div className="py-5">

  <div className="container">
    <div className="lg:grid lg:grid-cols-6 ">
    <div className="col-span-4">
      <Swiper slidesPerView={1} loop={true} style={{height: '100%'}}>
        <SwiperSlide>
          <img src={Slider1} className="w-full h-full d-block" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slider2} className="w-full h-full d-block" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
    <div className="col-span-2">
      <img src={blogImg1} className="h-1/2" alt="" />
      <img src={blogImg2} className="h-1/2" alt="" />
    </div>
  </div>
  </div>

  <div className="container">
    <Swiper slidesPerView={6} loop={true}>
      {allCategories?.data.data.map((category)=> <SwiperSlide  key={category._id} slidesperview={6}>
          <img src={category.image} className="w-full h-[300px]" alt="" />
          <h2>{category.name}</h2>
      </SwiperSlide>)}
    </Swiper>
  </div>
  {isLoading ? <div className="w-full h-screen flex justify-center items-center bg-gray-400"><div role="status">
    <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span className="sr-only">Loading...</span>
</div> </div> : <div className="container">
    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

  {allProductsData.map((prod)=> <ProductCard product={prod} key={prod.id} />)}
  </div>
  </div>} 
</div>

  
  </>
}
