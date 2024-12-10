import React from 'react'
import homePagePhoto from "../../assets/homePage.png"

const Home = () => {
  return (
    <div className='w-full h-screen'>
      <img src={homePagePhoto} alt="" className='w-full h-[100%] bg-contain'/>
    </div>
  )
}

export default Home