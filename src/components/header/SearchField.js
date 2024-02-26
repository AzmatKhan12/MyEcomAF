import React, { useContext, useState }  from "react";
import ProductContext from "../Context-Api/ProductContex";

const SearchField = () => {
    
  const [searchValue,setSearchValue] =useState("")
  const {fetchData,setSearchProduct } =useContext(ProductContext);

  const changeButtonHandler = ()=>{
    fetchData(`search/photos?page=1&query=${searchValue}&client_id=OzQ9p-B4CntimTF7mQNu49WgCLXnf15do5goalR8Fg4`);
    setSearchValue("");
    setSearchProduct(searchValue)
  }

  const changeEnterHandler = (e)=>{
     
    if(e.key==="Enter"){
    fetchData(`search/photos?page=1&query=${searchValue}&client_id=OzQ9p-B4CntimTF7mQNu49WgCLXnf15do5goalR8Fg4`);
    setSearchValue("");
    setSearchProduct(searchValue)
    }
  }


  const changeInputHandler = (e)=>{
      setSearchValue(e.target.value)
  }
  return (
    <div>
      <form className="d-flex " role="search">
        <input
          name="search"
          id="search"
          className="form-control me-2 "
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchValue}
          onChange={changeInputHandler}
          onKeyDown={changeEnterHandler}
        />
        <button
          className="btn btn-outline-success"
          type="submit"
          onClick={changeButtonHandler}
          disabled={!searchValue}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchField;
