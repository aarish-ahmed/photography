import { API_URL } from '../../Api/api'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'
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
              
              <div className="image-container w-full   break-inside-avoid ">
                <img src={img.image.url} className="  py-2 md:py-4 md:px-2 "></img>
              </div>
              
            
            </>
          );
        })}
        
    </div>
    <Footer/>
    </>
  )
}

export default Briefs