import React, { useState } from 'react'
import 'lazysizes'

const Mecanica = () => {
  const [mecanica, setMecanica] = useState([
    {
      img: 'https://s3.amazonaws.com/static.autolab.com.co/assets/images/autobooking/autobooking_icons/frenos-v3.svg',
      title: 'Cambio de Balatas',
      link: 'Agendar Servicio'
    },
    {
      img: 'https://s3.amazonaws.com/static.autolab.com.co/assets/images/autobooking/autobooking_icons/frenos2-v3.svg',
      title: 'Discos de frenos',
      link: 'Agendar Servicio'
    },
    {
      img: 'https://s3.amazonaws.com/static.autolab.com.co/assets/images/autobooking/autobooking_icons/amortiguadores-v3.svg',
      title: 'Amortiguadores',
      link: 'Agendar Servicio'
    },
    {
      img: 'https://s3.amazonaws.com/static.autolab.com.co/assets/images/autobooking/autobooking_icons/correa_de_reparticion-v3.svg',
      title: 'Banda de Distribucion',
      link: 'Agendar Servicio'
    },
    {
      img: 'https://s3.amazonaws.com/static.autolab.com.co/assets/images/autobooking/autobooking_icons/cambio_bateria-v3.svg',
      title: 'Cambio de Bateria',
      link: 'Agendar Servicio'
    },
    {
      img: 'https://s3.amazonaws.com/static.autolab.com.co/assets/images/autobooking/autobooking_icons/kit_de_embrague-v3.svg',
      title: 'Cambio de Kit de Clutch',
      link: 'Agendar Servicio'
    },
    {
      img: 'https://s3.amazonaws.com/static.autolab.com.co/assets/images/autobooking/autobooking_icons/frenos2-v3.svg',
      title: 'Mecanica general',
      link: 'Agendar Servicio'
    },
    {
      img: 'https://s3.amazonaws.com/static.autolab.com.co/assets/images/autobooking/autobooking_icons/amortiguadores-v3.svg',
      title: 'Bomba de agua',
      link: 'Agendar Servicio'
    },
    {
      img: 'https://s3.amazonaws.com/static.autolab.com.co/assets/images/autobooking/autobooking_icons/correa_de_reparticion-v3.svg',
      title: 'Bomba de gasolina',
      link: 'Agendar Servicio'
    }
  ])

  return (
    <div
      className="flex flex-row justify-between p-5 gap-5"
      style={{ overflowX: 'scroll' }}
    >
      {mecanica.map((item, index) => (
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

export default Mecanica
