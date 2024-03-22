import React, { useState } from 'react'
import Nav from './Nav'
import Slidder from './Slidder'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  console.log(isOpen)
  return (
    <div className="flex flex-col gap-1 h-screen w-screen">
      <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className="phone:p-2  h-full w-full  justify-center items-center"
        style={{ display: isOpen ? 'none' : 'flex' }}
      >
        <Slidder />
      </div>
    </div>
  )
}

export default Home
