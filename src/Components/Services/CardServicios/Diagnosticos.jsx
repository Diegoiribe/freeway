import React, { useState } from 'react'

const Diagnosticos = () => {
  const [diagnosticos, setDiagnosticos] = useState([
    {
      img: 'https://s3.amazonaws.com/static.autolab.com.co/assets/images/autobooking/autobooking_icons/diagnostic_bombilla-v3.svg',
      title: 'Falla en el Sistema Electrico',
      link: 'Agendar Servicio'
    },
    {
      img: 'https://s3.amazonaws.com/static.autolab.com.co/assets/images/autobooking/autobooking_icons/diagnostic_suspension-v3.svg',
      title: 'Falla en las Llantas y Suspension',
      link: 'Agendar Servicio'
    },
    {
      img: 'https://s3.amazonaws.com/static.autolab.com.co/assets/images/autobooking/autobooking_icons/diagnostic_gota-de-sangre-v3.svg',
      title: 'Falla de Liquidos / Fugas',
      link: 'Agendar Servicio'
    },
    {
      img: 'https://s3.amazonaws.com/static.autolab.com.co/assets/images/autobooking/autobooking_icons/diagnostic_diagnostic_abs-v3.svg',
      title: 'Falla en los Testigos',
      link: 'Agendar Servicio'
    },
    {
      img: 'https://s3.amazonaws.com/static.autolab.com.co/assets/images/autobooking/autobooking_icons/diagnostic_caja-de-cambios-v3.svg',
      title: 'Falla en la Caja de Cambio',
      link: 'Agendar Servicio'
    },
    {
      img: 'https://s3.amazonaws.com/static.autolab.com.co/assets/images/autobooking/autobooking_icons/diagnostic_disco-de-freno-v3.svg',
      title: 'Falla en los Frenos',
      link: 'Agendar Servicio'
    }
  ])

  return (
    <div
      className="flex flex-row justify-between p-5 gap-5"
      style={{ overflowX: 'scroll' }}
    >
      {diagnosticos.map((item, index) => (
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

export default Diagnosticos