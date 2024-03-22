import React from 'react'
import NavServicios from './NavServicios'

const Services = () => {
  return (
    <div
      className="flex flex-col gap-1 h-screen w-screen justify-center items-center"
      style={{
        background: 'linear-gradient(to bottom, #EEF3F6, #FFFFFF)'
      }}
    >
      <NavServicios />
    </div>
  )
}

export default Services
