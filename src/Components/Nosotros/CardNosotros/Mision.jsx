import React from 'react'

const Mision = () => {
  return (
    <div className="flex flex-row mt-20 w-full h-5/6 gap-5">
      <div
        className="w-4/5 h-full rounded-xl bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://periodicocorreo.com.mx/__export/sites/correo/img/2022/10/27/Taller-mecanico-1-295031847.webp)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      <div className="w-80 flex flex-col gap-5 p-2">
        <p className="text-2xl font-bold text-center">Mision</p>
        <p>
          Ofrecer servicios de reparación y mantenimiento automotriz de alta
          calidad, garantizando la satisfacción y seguridad de nuestros clientes
          a través de un equipo de profesionales altamente cualificados y el uso
          de tecnología de punta.
        </p>
      </div>
    </div>
  )
}

export default Mision
