import React, { useState } from 'react'
import QuienesSomos from '../CardNosotros/QuienesSomos'
import Mision from '../CardNosotros/Mision'
import Vision from '../CardNosotros/Vision'
import Valores from '../CardNosotros/Valores'
import Objetivos from '../CardNosotros/Objetivos'

const NavNosotros = () => {
  const [aboutActive, setAboutActive] = useState('Nosotros')

  const [about, setAbout] = useState([
    {
      title: 'Nosotros'
    },
    {
      title: 'Misión'
    },
    {
      title: 'Visión'
    },
    {
      title: 'Valores'
    },
    {
      title: 'Objetivos'
    }
  ])

  const NavActive = (title) => {
    setAboutActive(title)
  }

  return (
    <div className="box-border w-4/5 h-full flex flex-col justify-center ">
      <h1 className="text-4xl font-bold mb-10 text-start max-w-lg">
        Nuestras Base: Quiénes Somos y Hacia Dónde Vamos
      </h1>
      <div className="flex flex-row gap-5 p-3">
        {about.map((item, index) => (
          <div
            className={` ${
              aboutActive === item.title
                ? 'border-black text-black'
                : 'border-gray-400 text-gray-400'
            } w-1/5 h-10 flex flex-row justify-start items-center  gap-5 bg-transparent cursor-pointer border-b-2 hover:border-black hover:text-black `}
            key={index}
            onClick={() => NavActive(item.title)}
          >
            <p
              style={{
                fontWeight: aboutActive === item.title ? 'bold' : 'normal'
              }}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>
      <div className="h-4/6 w-full">
        {aboutActive === 'Nosotros' ? <QuienesSomos /> : null}
        {aboutActive === 'Misión' ? <Mision /> : null}
        {aboutActive === 'Visión' ? <Vision /> : null}
        {aboutActive === 'Valores' ? <Valores /> : null}
        {aboutActive === 'Objetivos' ? <Objetivos /> : null}
      </div>
    </div>
  )
}

export default NavNosotros
