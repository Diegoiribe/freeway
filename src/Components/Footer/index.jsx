import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'

const Footer = () => {
  return (
    <footer className="w-screen flex flex-col justify-center items-center">
      <div className="w-full flex phone:flex-col tablet:flex-row justify-around items-center pt-14 pb-14 bg-black">
        <div>
          <p className="text-4xl font-bold mb-5 text-center text-white">
            FREEWAY
          </p>
        </div>
        <div className="flex flex-col gap-2 phone:mb-8 tablet:mb-0">
          <p className="text-white font-bold">Inicio</p>
          <p className="text-white font-bold">Servicios</p>
          <p className="text-white font-bold">Nosotros</p>
          <p className="text-white font-bold">Galeria</p>
          <p className="text-white font-bold">Contacto</p>
        </div>
        <div className="phone:flex phone:flex-col phone:justify-center phone:items-center tablet:block">
          <div className="flex gap-5">
            <WhatsAppIcon fontSize="large" style={{ color: '#40bc78' }} />
            <FacebookIcon fontSize="large" style={{ color: '#406bbc' }} />
            <InstagramIcon fontSize="large" style={{ color: '#bc40b4' }} />
          </div>
          <p className="text-white mt-6 font-bold">Tel: 66-74-62-89-85</p>
          <p className="text-white mt-3 font-bold">E-mail: contacto@info.com</p>
        </div>
      </div>
      <div className="bg-white w-full flex justify-center items-center h-14">
        <p className="text-sm font-bold">
          Este sitio web a sido creado por TheWayUniverse
        </p>
      </div>
    </footer>
  )
}

export default Footer
