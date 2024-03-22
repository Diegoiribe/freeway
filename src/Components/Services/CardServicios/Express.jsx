import React, { useState } from 'react'

const Express = () => {
  const [express, setExpress] = useState([
    {
      img: 'https://s3.amazonaws.com/static.autolab.com.co/assets/images/autobooking/autobooking_icons/cambio_de_aceite-v3.svg',
      title: 'Cambio de Aceite y Filtros',
      link: 'Agendar Servicio'
    },
    {
      img: 'https://s3.amazonaws.com/static.autolab.com.co/assets/images/autobooking/autobooking_icons/alineacion_y_balanceo-v3.svg',
      title: 'Alineacion y Balanceo',
      link: 'Agendar Servicio'
    },
    {
      img: 'https://s3.amazonaws.com/static.autolab.com.co/assets/images/autobooking/autobooking_icons/aire_acondicionado-v3.svg',
      title: 'FRecarga de Aire Acondicionado',
      link: 'Agendar Servicio'
    },
    {
      img: 'https://s3.amazonaws.com/static.autolab.com.co/assets/images/autobooking/autobooking_icons/aire_acondicionado-v3.svg',
      title: 'Cambio de filtro de Aire Acondicionado',
      link: 'Agendar Servicio'
    },
    {
      img: 'https://s3.amazonaws.com/static.autolab.com.co/assets/images/autobooking/autobooking_icons/cambio_llanta-v3.svg',
      title: 'Cambio de Llantas',
      link: 'Agendar Servicio'
    },
    {
      img: 'https://s3.amazonaws.com/static.autolab.com.co/assets/images/autobooking/autobooking_icons/plumillas-v3.svg',
      title: 'Cambio de Plumas',
      link: 'Agendar Servicio'
    }
  ])

  return (
    <div
      className="flex flex-row justify-between p-5 gap-5"
      style={{ overflowX: 'scroll' }}
    >
      {express.map((item, index) => (
        <div
          className="p-3 shadow-all bg-white min-w-60 h-96 rounded-lg flex flex-col items-center justify-center"
          key={index}
        >
          <div
            className="w-40 h-40 "
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

export default Express
