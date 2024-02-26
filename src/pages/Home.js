import React, { useContext } from "react";

import ProductContext from "../components/Context-Api/ProductContex";
import Image from "../components/Product/Image";
import Skeleton from "../components/Product/Skeleton";

const Home = () => {
  const { IsLoading, response, searchProduct } = useContext(ProductContext);
  return (
    <div>
      <div className="container text-center">
        <div className="mb-4 text-center mt-6 underline text-2xl">
          <b><u>Showing Result for {searchProduct ||<p>Jeans</p> }</u></b> 
        </div>
        <div
          className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid:cols-4 gap-2 my-10
             max-w-7xl mx-auto px-4"
        >
          {IsLoading ? 
            (<Skeleton item={10} />) : 
            (response.map((data, key) => <Image data={data} key={key} />))  
         }
        </div>
      </div>
    </div>
  );
};

export default Home;
