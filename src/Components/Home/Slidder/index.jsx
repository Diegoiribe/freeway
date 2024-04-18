import React, { useState, useEffect } from 'react'

const Slidder = () => {
  const img = [
    'https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/site-simp/overview/pfa/2024-nissan-gt-r-sports-car-light-green-side-profile-view-xl.jpg'
  ]

  const [currentImg, setCurrentImg] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((currentImg) => {
        const nextIndex = currentImg + 1
        return nextIndex === img.length ? 0 : nextIndex
      })
    }, 5000) // Change image every 1000 milliseconds (1 second)

    return () => clearInterval(interval) // Clear interval on component unmount
  }, [])

  const phone = window.innerWidth < 768

  return (
    <div
      className="tablet:w-full box-border phone:h-full mac:w-4/5 mac:h-5/6 rounded-3xl flex flex-col justify-end items-center "
      style={{
        backgroundImage: `url(${img[currentImg]})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="phone:h-full w-full mac:h-3/4 flex justify-center items-center flex-col gap-5 ">
        <h1
          className="phone:mt-12 tablet:mt-0 text-white font-bold max-w-5xl text-center phone:p-1 mac:p-0 drop-shadow-2xl overflow-hidden"
          style={{ fontSize: phone ? '1.75rem' : '3rem' }}
        >
          Servicio Automotriz en Culiacan especializados en Nissan
        </h1>
        {phone ? null : (
          <p className="text-white tablet:text-xl mac:text-2xl max-w-lg mt-3 p-3 font-bold text-center phone:text-lg drop-shadow-2xl overflow-hidden">
            Excelencia en Servicio Técnico: Mantenimiento Avanzado, Diagnósticos
            Precisos y Soluciones Integrales para tu Vehículo Nissan
          </p>
        )}

        <a href="https://wa.me/526671390893">
          <button className=" text-lg mt-3 p-3 bg-white w-80 rounded-2xl font-semibold hover:bg-black hover:text-white cursor-pointer shadow-custom">
            Contacto
          </button>
        </a>
      </div>
      <div className="w-full h-1/4 bg-black opacity-80 flex justify-center items-center">
        <p className="mac:text-4xl text-white font-bold phone:text-2xl phone:text-center">
          ¡Dejanos tu auto y nosotros te llevamos!
        </p>
      </div>
    </div>
  )
}

export default Slidder
