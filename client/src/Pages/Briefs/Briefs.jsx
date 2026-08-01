import { API_URL } from '../../Api/api'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const Briefs = () => {
    const {id} =useParams()
 
    const [image,setImage]=useState([])
   
    const getOneImage = async() => {
        const res=await fetch(`${API_URL}/app/image/${id}`,{
            method:'GET'
        })
        const data=await res.json()
        if(res.ok){
            setImage(data)
        }
    }
    useEffect(()=>{
        getOneImage()
    },[])
  return (
    <>
    <div className=' flex flex-col gap-5 px-8 py-2 md:px-14'>
        {image.map((img) => {
          return (
            <>
              <div className='flex flex-col gap-4'>
                <h1 className='font-serif text-4xl md:text-6xl text-orange-500 justify-center items-center'>{img.title}</h1>
                <p className='text-justify text-lg md:text-2xl '>{img.description}</p>
              </div>
              <div className="image-container w-full   break-inside-avoid ">
                <img src={img.image.url} className="  py-2 md:py-4 md:px-2 "></img>
              </div>
              
            
            </>
          );
        })}
        
    </div>
    <div className="footer bg-gray-100 text-center pt-15 pb-10">
        <p>All photography © Copyright Levon Biss 2025.   No unauthorised use.   For all enquiries please email - <a href="https://www.levonbiss.com/" className="text-orange-500 border-b"> contact@levonbiss.com</a></p>
      </div>
    </>
  )
}

export default Briefs