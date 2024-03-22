import React, { useState } from 'react'
import Destacados from '../CardServicios/Destacados'
import Diagnosticos from '../CardServicios/Diagnosticos'
import Revisiones from '../CardServicios/Revisiones'
import Express from '../CardServicios/Express'
import Mecanica from '../CardServicios/Mecanica'

const NavServicios = () => {
  const [card, setCard] = useState('diagnosticos')

  const [servicios, setServicios] = useState([
    {
      img: 'https://s3.amazonaws.com/website.autolab.com.co/assets/img/falla.svg',
      title: 'Diagnosticos',
      value: 'diagnosticos'
    },
    {
      img: 'https://s3.amazonaws.com/website.autolab.com.co/assets/img/revision.svg',
      title: 'Destacados',
      value: 'destacados'
    },
    {
      img: 'https://s3.amazonaws.com/website.autolab.com.co/assets/img/km.svg',
      title: 'Revisiones',
      value: 'revisiones'
    },
    {
      img: 'https://s3.amazonaws.com/website.autolab.com.co/assets/img/express.svg',
      title: 'Servicios Express',
      value: 'express'
    },
    {
      img: 'https://s3.amazonaws.com/website.autolab.com.co/assets/img/estetica.svg',
      title: 'Mecanica',
      value: 'mecanica'
    }
  ])

  const Active = (item) => {
    setCard(item)
  }

  return (
    <div className="box-border w-4/5  ">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Servicios de Mecanica
      </h1>
      <div className="flex flex-row tablet:gap-5 p-3 phone:flex-wrap phone:items-center phone:justify-center phone:gap-2 laptop:flex-nowrap">
        {servicios.map((item, index) => (
          <div
            className="phone:w-15 phone:h-20 tablet:w-1/5 h-16 flex flex-row justify-center items-center rounded-2xl gap-5 bg-white shadow-all cursor-pointer phone:p-2 mac:p-0"
            key={index}
            onClick={() => Active(item.value)}
          >
            <div
              className="w-14 h-14  "
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
            ></div>
            <p className="phone:hidden mac:block">{item.title}</p>
          </div>
        ))}
      </div>
      <div>
        {card === 'diagnosticos' ? <Diagnosticos /> : null}
        {card === 'destacados' ? <Destacados /> : null}
        {card === 'revisiones' ? <Revisiones /> : null}
        {card === 'express' ? <Express /> : null}
        {card === 'mecanica' ? <Mecanica /> : null}
      </div>
    </div>
  )
}

export default NavServicios
