import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    // const [data, setData] = useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/dheerajpal0001')
    //   .then(response => response.json())
    //   .then(data => {console.log(data);
    //     setData(data)
    //   }); 
    // }, [])



    const data = useLoaderData()
    
  return (
    <div className='text-center flex items-center justify-center flex-col m-4 bg-gray-600 text-white p-4 text-3xl'>Github : {data.name}
    <img src={data.avatar_url} alt="" className='p-5'/>
    </div>
    
  )
}

export default Github



// using useLoaderData hook this function is also written in main.jsx, we can use Loader also
export const githubInLoader = async()=>{
    const response = await fetch('https://api.github.com/users/dheerajpal0001')
    return response.json();
}