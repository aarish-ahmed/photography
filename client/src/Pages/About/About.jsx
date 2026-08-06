
import { API_URL } from '../../Api/api'
import { useEffect, useState } from 'react'
const About = () => {
     const [image,setImage]=useState()
const getAboutImage = async() => {
  const res=await fetch(`${API_URL}/app/about/image`,{
    method:'GET'
  })
  const data=await res.json()
  console.log(data)
  if(res.ok){
      setImage(data)
  }
}
useEffect(()=>{
  getAboutImage()
},[])

  return (
    <>
    <div className='flex flex-col md:flex-row'>
      <div className='px-8 flex flex-col gap-6 text-lg text-justify md:px-14 md:w-[60%]'>
      <h1 className='text-3xl md:text-5xl font-bold text-orange-600'>Levon Biss</h1>
      <p className='mt-2'> Levon Biss is a award winning British photographer and artist best known for his striking macro photography, particularly of insects and other small creatures. His work uniquely blends artistry and science, revealing the intricate details of his subjects and showcasing the beauty of the natural world.  His work has been exhibited internationally and has received acclaim for its educational value, raising awareness about biodiversity and the importance of conservation. Levon's images not only serve as artistic expressions but also contribute to scientific discourse, helping to inspire curiosity and appreciation for the natural world.</p>
      <p>Biss’s photography is characterized by its vivid detail, striking colors, and a perspective that transforms ordinary subjects into extraordinary works of art. By combining art and science, he encourages audiences to engage with nature on a deeper level, fostering a sense of wonder and responsibility toward the environment.</p>
      <p>Levon has published five books and he regularly collaborates with scientists and institutions to promote awareness of biodiversity and conservation issues.  Levon’s artworks are held in both private and public collections, and online access to his photographic projects provide a valuable education resource within school curriculums around the world.  In 2016 he was awarded with a Fellowship to the Royal Photographic Society and in 2023 received a second RPS award in recognition of notable personal achievements in the art of photography.</p>
      <p>Levon gained widespread recognition for his project "Microsculpture," which showcases hyper-detailed images of insects. The project documents specimens from the Oxford University Museum of Natural History, using unique photographic techniques to capture textures and details in a way that allows viewers to appreciate the beauty and complexity of these small creatures.  The resulting body of work produced a book and touring exhibition that has so far visited over thirty countries and continues to travel the globe.</p>
      <p>In 2022, Levon released his most ambitious project to date, “ Extinct & Endangered: Insects in peril”.  In collaboration with the American Museum of Natural History, Levon photographed 40 insect specimens from the museum’s collections that are either severely under threat or already extinct.  The three year project transcends mere documentation; it serves as a call to action, urging viewers to appreciate and protect the natural world. His photography not only celebrates the beauty of insects but also serves as a poignant reminder of what is at stake. The exhibition has been on display in New York for over two years and has been viewed by over 12 million visitors.  The exhibition has also begun to tour internationally, with exhibitions in North America, Europe and Asia.</p>
      <p>Through his innovative approach and dedication to showcasing the beauty of the microscopic world, Levon Biss has made a significant impact in the fields of photography and natural history, inspiring both artists and conservationists alike. His work has been published in pivotal editorial titles such as National Geographic and he has contributed to ground breaking documentaries such as the Netflix series “Our Planet”.</p>
      <p>Levon continues to explore tiny worlds from his studio in the English countryside.</p>
    </div>
    <div className="image flex mx-8  md:py-16 justify-center ">
        <img src={image?.image?.url}
  className="mt-5 w-100 h-120"
  alt="Admin"></img>
    </div>
    </div>
    <div className="footer bg-gray-100 text-center px-6 mt-5 pt-8 pb-8 md:p-10">
        <p>All photography © Copyright Levon Biss 2025.   No unauthorised use.   For all enquiries please email - <a href="https://www.levonbiss.com/" className="text-orange-500 border-b"> contact@levonbiss.com</a></p>
      </div>
    </>
  )
}

export default About