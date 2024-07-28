import React, { useEffect, useState } from 'react'  
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
//   const [data,Setdata] = useState({})
//   useEffect(() =>{
// fetch('https://api.github.com/users/parthpatel-in')
// .then(Response => Response.json())
// .then(data =>{
//   console.log(data);
//   Setdata(data)
// });
//   },[]);
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github Followers:{data.followers}
      <img className='' src={data.avatar_url} alt="Git picture" width={200} />
    </div>
  )
}

export default Github

export const githubinfoLoader = async () =>{
  const response = await fetch('http://api.github.com/users/parthpatel-in')
  return response.json()

}
