import React, { useState } from 'react'
import 'lazysizes'

const Destacados = () => {
  const [destacados, setDestacados] = useState([
    {
      img: 'https://s3.amazonaws.com/static.autolab.com.co/assets/images/autobooking/autobooking_icons/revision_general-v3.svg',
      title: 'Revision General',
      link: 'Agendar Servicio'
    },
    {
      img: 'https://s3.amazonaws.com/static.autolab.com.co/assets/images/autobooking/autobooking_icons/revision_general-v3.svg',
      title: 'Afinancion Mayor',
      link: 'Agendar Servicio'
    },
    {
      img: 'https://s3.amazonaws.com/static.autolab.com.co/assets/images/autobooking/autobooking_icons/revision_general-v3.svg',
      title: 'Afinacion Menor',
      link: 'Agendar Servicio'
    },

    {
      img: 'https://s3.amazonaws.com/static.autolab.com.co/assets/images/autobooking/autobooking_icons/revision_por_kilometraje-v3.svg',
      title: 'Mantemiento por Kilometraje',
      link: 'Agendar Servicio'
    },
    {
      img: 'https://s3.amazonaws.com/static.autolab.com.co/assets/images/autobooking/autobooking_icons/verificacion-v3.svg',
      title: 'Verificacion vehicular',
      link: 'Agendar Servicio'
    }
  ])

  return (
    <div
      className="flex flex-row justify-between p-5 gap-5"
      style={{ overflowX: 'scroll' }}
    >
      {destacados.map((item, index) => (
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

export default Destacados
