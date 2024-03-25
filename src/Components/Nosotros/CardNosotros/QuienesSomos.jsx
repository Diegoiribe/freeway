import React from 'react'

const QuienesSomos = () => {
  const phone = window.innerWidth < 768
  return (
    <div className="flex phone:flex-col tablet:flex-row phone:mt-5 tablet:mt-20  w-full h-5/6 gap-5">
      <div
        className="phone:w-full tablet:w-4/5 phone:h-1/4 tablet:h-full rounded-xl bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://img.interempresas.net/fotos/1604410.jpeg)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      <div className="phone:w-auto tablet:w-80 flex flex-col gap-5 p-2">
        <p className="text-2xl font-bold text-center">Nosotros</p>
        {phone ? (
          <p>
            Somos un equipo de profesionales apasionados por el mundo del
            automovilismo. Con años de experiencia en el sector, nuestro taller
            mecánico se ha consolidado como un referente en la reparación,
            mantenimiento y mejora de vehículos
          </p>
        ) : (
          <p>
            Somos un equipo de profesionales apasionados por el mundo del
            automovilismo. Con años de experiencia en el sector, nuestro taller
            mecánico se ha consolidado como un referente en la reparación,
            mantenimiento y mejora de vehículos. Comprometidos con la calidad y
            la satisfacción del cliente, ofrecemos soluciones integrales para
            todo tipo de automóviles, garantizando un servicio eficiente,
            transparente y personalizado.
          </p>
        )}
      </div>
    </div>
  )
}

export default QuienesSomos
