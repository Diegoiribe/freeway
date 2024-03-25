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

  const phone = window.innerWidth < 768

  return (
    <div className="box-border phone:w-full mac:w-4/5   ">
      <h1 className="phone:text-3xl tablet:text-4xl font-bold phone:mb-5 tablet:mb-10 text-center">
        Servicios de Mecanica
      </h1>
      <div className="flex flex-row tablet:gap-5 p-3 phone:flex-wrap phone:items-center phone:justify-center phone:gap-2 laptop:flex-nowrap">
        {servicios.map((item, index) => (
          <div
            className={` ${
              card === item.value
                ? 'bg-red-600 text-white'
                : 'bg-white text-black'
            } phone:w-full phone:h-10 tablet:w-1/5 tablet:h-16 flex flex-row justify-center items-center rounded-2xl gap-5 bg-white shadow-all cursor-pointer phone:p-2 mac:p-0 text-black hover:text-white hover:bg-red-600 duration-300 ease-in-out  `}
            key={index}
            onClick={() => Active(item.value)}
          >
            <div
              className="w-14 h-14  phone:hidden tablet:block"
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
            ></div>
            <p style={{ fontWeight: card === item.value ? 'bold' : null }}>
              {item.title}
            </p>
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
