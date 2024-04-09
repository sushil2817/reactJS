// import React, { useEffect, useState } from 'react'
import {useLoaderData} from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/sushil2817')
    //     .then(res => res.json())
    //     .then((data)=>{
    //              console.log(data);
    //              setData(data);
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl flex flex-col justify-center align-middle  '>
        <div className='p-4'>Github followers: {data.following}</div>
        <div className='flex justify-center'>
        <img 
            src={data.avatar_url} width={300}></img>
        </div>
     
    </div>
  )
}

export default Github

export const githubInfoLoader = async() =>{
   const res = await fetch('https://api.github.com/users/sushil2817')

   return res.json()

}
