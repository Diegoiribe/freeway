import React from 'react'

const QuienesSomos = () => {
  return (
    <div className="flex flex-row mt-20 w-full h-5/6 gap-5">
      <div
        className="w-4/5 h-full rounded-xl bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://img.interempresas.net/fotos/1604410.jpeg)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      <div className="w-80 flex flex-col gap-5 p-2">
        <p className="text-2xl font-bold text-center">Nosotros</p>
        <p>
          Somos un equipo de profesionales apasionados por el mundo del
          automovilismo. Con años de experiencia en el sector, nuestro taller
          mecánico se ha consolidado como un referente en la reparación,
          mantenimiento y mejora de vehículos. Comprometidos con la calidad y la
          satisfacción del cliente, ofrecemos soluciones integrales para todo
          tipo de automóviles, garantizando un servicio eficiente, transparente
          y personalizado.
        </p>
      </div>
    </div>
  )
}

export default QuienesSomos
