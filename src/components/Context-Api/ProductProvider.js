
import React, {useState} from "react";
import UseAxios from "../Hooks/UseAxios";
import ProductContext from "./ProductContex";

export const ProductProvider = (props)=>{
   

    const [searchProduct,setSearchProduct] =useState("")
    

    const {IsLoading,response,error,fetchData} = UseAxios(`search/photos?page=1&query=jeans&client_id=OzQ9p-B4CntimTF7mQNu49WgCLXnf15do5goalR8Fg4`)

    const data = {
       IsLoading,
       response,
       error,
       fetchData,
       searchProduct,
       setSearchProduct
    }
     
     console.log("ProductContext testing")
   
    return(

        <ProductContext.Provider value={data}>
          {props.children}
        </ProductContext.Provider>
    )

   
}

export default ProductProvider ;
