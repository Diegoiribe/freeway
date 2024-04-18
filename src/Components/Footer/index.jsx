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
          <a href="#inicio">
            <p className="text-white font-bold">Inicio</p>
          </a>
          <a href="#servicios">
            <p className="text-white font-bold">Servicios</p>
          </a>
          <a href="#nosotros">
            <p className="text-white font-bold">Nosotros</p>
          </a>
          <a href="#galeria">
            <p className="text-white font-bold">Galeria</p>
          </a>
          <a href="#contacto">
            <p className="text-white font-bold">Contacto</p>
          </a>
        </div>
        <div className="phone:flex phone:flex-col phone:justify-center phone:items-center tablet:block">
          <div className="flex gap-5">
            <a href="https://wa.me/526671390893">
              <WhatsAppIcon fontSize="large" style={{ color: '#40bc78' }} />
            </a>
            <a href="#">
              <FacebookIcon fontSize="large" style={{ color: '#406bbc' }} />
            </a>
            <a href="https://www.instagram.com/freewaytallermecanico/">
              <InstagramIcon fontSize="large" style={{ color: '#bc40b4' }} />
            </a>
          </div>
          <p className="text-white mt-6 font-bold">Tel: 66-71-39-08-93</p>
          <p className="text-white mt-3 font-bold">
            E-mail: freewaytallermecanico@gmail.com
          </p>
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
