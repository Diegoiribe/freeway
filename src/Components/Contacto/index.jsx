import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import 'lazysizes'

const Contacto = () => {
  return (
    <div
      id="contacto"
      className="w-screen tablet:h-screen flex justify-center items-center"
    >
      <div className="tablet:w-5/6 phone:w-full tablet:h-full flex phone:flex-col tablet:flex-row justify-center items-center p-5">
        <div className="phone:w-full tablet:w-4/6 tablet:h-full flex flex-col justify-center items-center phone:mb-10 tablet:mb-0">
          <div className="w-full">
            <h1 className="phone:text-3xl tablet:text-4xl font-bold phone:mb-2 tablet:mb-5 text-start">
              FREEWAY
            </h1>
            <div className="border-2 max-w-28"></div>
          </div>
          <div className="phone:w-full tablet:w-5/6 flex phone:flex-col tablet:flex-row gap-5 mt-5 phone:mb-5 tablet:mb-0 phone:p-2 tablet:p-5 justify-around">
            <a
              href="https://wa.me/526671390893"
              className="tablet:w-2/6 phone:w-full h-16 flex flex-row justify-center items-center rounded-2xl gap-5 shadow-all cursor-pointer font-bold hover:bg-black "
              style={{ color: '#40bc78' }}
            >
              <span>
                <WhatsAppIcon />
              </span>
              Whatsapp
            </a>
            <p
              className="tablet:w-2/6 phone:w-full h-16 flex flex-row justify-center items-center rounded-2xl gap-5 shadow-all cursor-pointer font-bold hover:bg-black"
              style={{ color: '#39A0ED' }}
            >
              +52 66-74-98-96-98
            </p>
            <p
              className="tablet:w-2/5 phone:w-full h-16 flex flex-row justify-center items-center rounded-2xl gap-5 shadow-all cursor-pointer font-bold hover:bg-black px-2"
              style={{ color: '#FFA62B' }}
            >
              freewaytallermecanico@gmail.com
            </p>
          </div>
          <div className="tablet:w-5/6 phone:w-full tablet:h-3/6 phone:h-80 rounded-xl">
            <iframe
              className="w-full h-full lazyload"
              data-bg="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.8728671992358!2d-107.41380472391187!3d24.83402094631364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86bcda6af7167899%3A0xae1c6c4ec6636dcc!2sEmile%20Barline%201527%2C%20Pedregal%20del%20Humaya%2C%2080029%20Culiac%C3%A1n%20Rosales%2C%20Sin.!5e0!3m2!1ses!2smx!4v1712000116949!5m2!1ses!2smx"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.8728671992358!2d-107.41380472391187!3d24.83402094631364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86bcda6af7167899%3A0xae1c6c4ec6636dcc!2sEmile%20Barline%201527%2C%20Pedregal%20del%20Humaya%2C%2080029%20Culiac%C3%A1n%20Rosales%2C%20Sin.!5e0!3m2!1ses!2smx!4v1712000116949!5m2!1ses!2smx"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div
          className="tablet:w-2/6 phone:w-full rounded-3xl p-5"
          style={{ background: '#ba261e' }}
        >
          <div>
            <h1 className="phone:text-3xl tablet:text-4xl font-bold phone:mb-2 tablet:mb-5 text-start text-white">
              Cuentanos...
            </h1>
            <p className="text-white mb-5">
              ¿Que es lo que te gustaria conseguir? Dejanos tu nombre y tu
              e-mail. Hablanos de los servicios que requieres. Nos pondremos lo
              mas pronto en comunicacion.
            </p>
          </div>
          <div className="w-full">
            <form className="flex gap-5 w-full flex-wrap justify-end items-center ">
              <div className="flex justify-between items-center w-full">
                <input
                  className="h-10 rounded-lg p-2 focus:outline-none"
                  type="text"
                  placeholder="Nombre"
                  style={{ width: '48%' }}
                />
                <input
                  className=" h-10 rounded-lg p-2 focus:outline-none"
                  type="text"
                  placeholder="Telefono"
                  style={{ width: '48%' }}
                />
              </div>
              <input
                className="w-full h-10 rounded-lg p-2 focus:outline-none"
                type="text"
                placeholder="E-mail"
              />
              <input
                className="w-full h-10 rounded-lg p-2 focus:outline-none"
                type="text"
                placeholder="Servicio"
              />
              <textarea
                className="w-full mac:h-20 laptop:h-24 desktop:h-64 rounded-lg p-2 resize-none focus:outline-none"
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Mensaje"
              ></textarea>
              <button className="w-1/5 bg-white rounded-lg h-10">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacto
