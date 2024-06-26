import React, { useState } from 'react'
import 'lazysizes'

const Revisiones = () => {
  const [revisiones, setRevisiones] = useState([
    {
      img: 'https://s3.amazonaws.com/static.autolab.com.co/assets/images/autobooking/autobooking_icons/revision_frenos-v3.svg',
      title: 'Revision de Frenos',
      link: 'Agendar Servicio'
    },
    {
      img: 'https://s3.amazonaws.com/static.autolab.com.co/assets/images/autobooking/autobooking_icons/revision_suspension-v3.svg',
      title: 'Revision de Suspension',
      link: 'Agendar Servicio'
    },
    {
      img: 'https://s3.amazonaws.com/static.autolab.com.co/assets/images/autobooking/autobooking_icons/aire_acondicionado-v3.svg',
      title: 'Revision de Aire Acondicionado',
      link: 'Agendar Servicio'
    },
    {
      img: 'https://s3.amazonaws.com/static.autolab.com.co/assets/images/autobooking/autobooking_icons/escaner-v3.svg',
      title: 'Diagnostico con Escaner',
      link: 'Agendar Servicio'
    },
    {
      img: 'https://s3.amazonaws.com/static.autolab.com.co/assets/images/autobooking/autobooking_icons/cambio_bateria-v3.svg',
      title: 'Revision de Bateria',
      link: 'Agendar Servicio'
    }
  ])

  return (
    <div
      className="flex flex-row justify-between p-5 gap-5"
      style={{ overflowX: 'scroll' }}
    >
      {revisiones.map((item, index) => (
        <div
          className="phone:h-auto mac:h-96 p-3 shadow-all bg-white min-w-60 rounded-lg flex flex-col items-center justify-center"
          key={index}
        >
          <div
            className="w-40 h-40 lazyload"
            data-bg={item.img}
            style={{
              backgroundImage: `url(${item.img})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
          <p className="text-center">{item.title}</p>
          <a href="#">{item.link}</a>
        </div>
      ))}
    </div>
  )
}

export default Revisiones
