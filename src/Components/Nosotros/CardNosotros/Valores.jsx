import React from 'react'

const Valores = () => {
  const phone = window.innerWidth < 768
  return (
    <div className="flex phone:flex-col tablet:flex-row phone:mt-5 tablet:mt-20  w-full h-5/6 gap-5">
      <div
        className="phone:w-full tablet:w-4/5 phone:h-1/4 tablet:h-full rounded-xl bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://www.cocheactual.com/wp-content/uploads/2023/03/problemas-de-los-talleres-mecanicos.jpg)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      <div className="phone:w-auto tablet:w-80 flex flex-col gap-5 p-2">
        <p className="text-2xl font-bold text-center">Valores</p>
        {phone ? (
          <p>
            Integridad: Actuar con honestidad y transparencia en todas nuestras
            operaciones. Calidad: Asegurar la máxima calidad en cada servicio y
            reparación realizada. Compromiso con el cliente: Priorizar las
            necesidades del cliente
          </p>
        ) : (
          <p>
            Integridad: Actuar con honestidad y transparencia en todas nuestras
            operaciones. Calidad: Asegurar la máxima calidad en cada servicio y
            reparación realizada. Compromiso con el cliente: Priorizar las
            necesidades del cliente, ofreciendo soluciones personalizadas y
            eficaces. Innovación: Implementar las últimas tecnologías y
            prácticas del sector para ofrecer los mejores resultados.
            Sostenibilidad: Promover prácticas sostenibles que protejan el medio
            ambiente.
          </p>
        )}
      </div>
    </div>
  )
}

export default Valores
