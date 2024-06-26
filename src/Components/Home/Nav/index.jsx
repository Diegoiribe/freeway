import React from 'react'

const Nav = ({ isOpen, setIsOpen }) => {
  const phone = window.innerWidth < 850

  return (
    <>
      {phone ? (
        <nav
          isopen={isOpen}
          className="shadow-custom py-4  overflow-hidden"
          style={{ height: isOpen ? '100vh' : 'auto' }}
        >
          <div className="flex justify-between items-center px-4 mac:px-10">
            <h1 className="text-4xl font-bold overflow-hidden">FreeWay</h1>
            <button onClick={() => setIsOpen(!isOpen)} className="mac:hidden">
              {/* Aquí puedes usar un ícono para el menú de hamburguesa */}
              <span>Menu</span>
            </button>
          </div>
          {/* Menú desplegable debajo del botón y título */}
          <ul
            className={`mt-4 mac:mt-0 px-4 mac:px-10 ${
              isOpen ? 'block' : 'hidden'
            } mac:flex mac:flex-row mac:gap-5 mac:items-center mac:justify-center`}
          >
            <a href="#inicio">
              <li className="text-xl">Inicio</li>
            </a>
            <a href="#servicios">
              <li className="text-xl">Servicios</li>
            </a>
            <a href="#nosotros">
              {' '}
              <li className="text-xl">Nosotros</li>
            </a>
            <a href="#contacto">
              <li className="text-xl">Contacto</li>
            </a>
          </ul>
        </nav>
      ) : (
        <nav className="flex flex-row justify-around shadow-custom py-4 overflow-hidden">
          <h1 className="text-4xl font-bold h-10 overflow-hidden">FreeWay</h1>
          <ul className="flex flex-row gap-5 items-center justify-center">
            <a href="#inicio">
              <li className="text-xl">Inicio</li>
            </a>
            <a href="#servicios">
              <li className="text-xl">Servicios</li>
            </a>
            <a href="#nosotros">
              <li className="text-xl">Nosotros</li>
            </a>
            <a href="#galeria">
              <li className="text-xl">Galeria</li>
            </a>
            <a href="#contacto">
              <li className="text-xl">Contacto</li>
            </a>
          </ul>
        </nav>
      )}
    </>
  )
}

export default Nav
