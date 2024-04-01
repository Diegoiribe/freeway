import React from 'react'

const Mision = () => {
  return (
    <div className="flex phone:flex-col tablet:flex-row phone:mt-5 tablet:mt-20  w-full h-5/6 gap-5">
      <div
        className="phone:w-full tablet:w-4/5 phone:h-2/4 tablet:h-full rounded-xl bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://pbs.twimg.com/media/GKGk51oa4AARMvC?format=jpg&name=large)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      <div className="phone:w-auto tablet:w-80 flex flex-col gap-5 p-2 phone:h-96 tablet:h-auto">
        <p className="text-2xl font-bold text-center">Mision</p>
        <p>
          Ofrecer servicios de reparación y mantenimiento automotriz de alta
          calidad, garantizando la satisfacción y seguridad de nuestros clientes
          a través de un equipo de profesionales altamente cualificados y el uso
          de tecnología de punta.
        </p>
      </div>
    </div>
  )
}

export default Mision
