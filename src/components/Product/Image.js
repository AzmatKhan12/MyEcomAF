import React, { useContext } from "react";
import ProductContext from "../Context-Api/ProductContex";

const Image = ({ data }) => {

  const {searchProduct}= useContext(ProductContext)
  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col ">
            <div className=" card ">
              <a href={data.urls.regular} target="_blank" rel="noreferror">
                <img
                  className="h-72 w-full object-cover rounded-lg shadow-md card-img-top image-responsive"
                  src={data.urls.small}
                  alt={data.alt_description}
                />
              </a>
              <div>
                <h5 className="card-title">{searchProduct || <p> Jeans</p>}</h5>
              </div>
              <p>{data.description}</p>
              <div className="card">
                <button className="btn btn-primary">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Image;
