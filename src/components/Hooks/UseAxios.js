import  { useEffect, useState } from 'react';
import axios from "axios";


const UseAxios = (param) => {

    const [IsLoading,setLoading] = useState(false)
    const [response,setResponse] = useState([])
    const [error,setError] = useState("");

    axios.defaults.baseURL= "https://api.unsplash.com";

    const fetchData =  async (url)=>{
        try {
            setLoading(true)
            const res = await axios(url);
            setResponse(res.data.results)
        } catch (error) {
            setError(error+" something went wrong")
        }
        finally{
            setLoading(false)
        }

    }

    useEffect(()=>{
      fetchData(param)
    },[param])
  return {
    IsLoading,
    response,
    error,
    fetchData : url => fetchData(url)
  }
}

export default UseAxios;