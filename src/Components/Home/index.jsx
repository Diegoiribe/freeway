import React from 'react'
import Nav from './Nav'
import Slidder from './Slidder'

const Home = () => {
  return (
    <div className="flex flex-col gap-1 h-screen w-screen">
      <Nav />
      <div className="phone:p-2  h-full w-full flex justify-center items-center">
        <Slidder />
      </div>
    </div>
  )
}

export default Home
