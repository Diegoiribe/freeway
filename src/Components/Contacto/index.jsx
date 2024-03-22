import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

const Contacto = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-5/6 h-full flex justify-center items-center p-5">
        <div className="w-4/6 h-full flex flex-col justify-center items-center">
          <div className="w-full">
            <h1 className="text-4xl font-bold mb-5 text-start">FREEWAY</h1>
            <div className="border-2 max-w-28"></div>
          </div>
          <div className="w-5/6 flex gap-5 mt-5 p-5 justify-around">
            <a
              href="#"
              className="w-2/6 h-16 flex flex-row justify-center items-center rounded-2xl gap-5 shadow-all cursor-pointer font-bold hover:bg-black "
              style={{ color: '#40bc78' }}
            >
              <span>
                <WhatsAppIcon />
              </span>
              Whatsapp
            </a>
            <p
              className="w-2/6 h-16 flex flex-row justify-center items-center rounded-2xl gap-5 shadow-all cursor-pointer font-bold hover:bg-black"
              style={{ color: '#39A0ED' }}
            >
              +52 66-74-98-96-98
            </p>
            <p
              className="w-2/6 h-16 flex flex-row justify-center items-center rounded-2xl gap-5 shadow-all cursor-pointer font-bold hover:bg-black"
              style={{ color: '#FFA62B' }}
            >
              info@contacto.com
            </p>
          </div>
          <div className="w-5/6 h-3/6 rounded-xl">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d40975.41230860479!2d-107.3674812593532!3d24.804047330959698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1710782948120!5m2!1ses!2smx"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div
          className="w-2/6 rounded-3xl p-5"
          style={{ background: '#ba251e' }}
        >
          <div>
            <h1 className="text-4xl font-bold mb-5 text-start text-white">
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
