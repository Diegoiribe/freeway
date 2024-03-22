import React from 'react'

const Objetivos = () => {
  return (
    <div className="flex flex-row mt-20 w-full h-5/6 gap-5">
      <div
        className="w-4/5 h-full rounded-xl bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://uploads-ssl.webflow.com/626c39fe1ac567f4c6aacbfe/62cee2297842d8811cfc2ad5_buen-servicio-en-taller-mecanico.jpeg)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      <div className="w-80 flex flex-col gap-5 p-2">
        <p className="text-2xl font-bold text-center">Objetivos</p>
        <p>
          Satisfacción del Cliente: Alcanzar un índice de satisfacción del
          cliente superior al 95% mediante la prestación de servicios
          excepcionales y atención personalizada. Crecimiento Sostenible:
          Expandir nuestra presencia en la región, abriendo al menos dos
          sucursales adicionales en los próximos cinco años sin comprometer la
          calidad del servicio. Formación Continua: Garantizar que nuestro
          equipo esté al frente de la innovación y las mejores prácticas a
          través de formaciones y certificaciones continuas.
        </p>
      </div>
    </div>
  )
}

export default Objetivos
