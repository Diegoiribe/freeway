import React from 'react'

const Valores = () => {
  return (
    <div className="flex flex-row mt-20 w-full h-5/6 gap-5">
      <div
        className="w-4/5 h-full rounded-xl bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://www.cocheactual.com/wp-content/uploads/2023/03/problemas-de-los-talleres-mecanicos.jpg)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      <div className="w-80 flex flex-col gap-5 p-2">
        <p className="text-2xl font-bold text-center">Valores</p>
        <p>
          Integridad: Actuar con honestidad y transparencia en todas nuestras
          operaciones. Calidad: Asegurar la máxima calidad en cada servicio y
          reparación realizada. Compromiso con el cliente: Priorizar las
          necesidades del cliente, ofreciendo soluciones personalizadas y
          eficaces. Innovación: Implementar las últimas tecnologías y prácticas
          del sector para ofrecer los mejores resultados. Sostenibilidad:
          Promover prácticas sostenibles que protejan el medio ambiente.
        </p>
      </div>
    </div>
  )
}

export default Valores