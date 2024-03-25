import React, { useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const preloadImages = (srcArray) => {
  srcArray.forEach((src) => {
    const img = new Image()
    img.src = src
  })
}

const Galeria = () => {
  const phone = window.innerWidth < 780

  const taller = [
    {
      img: 'https://talleractual.com/images/articles/taller-actual/notas/institucionales/2018/01/tecnica-2018-01-12-zona-segura-para-el-taller-mecanico-01.jpg',
      title: 'Menu',
      value: 0
    },
    {
      img: 'https://alianzaautomotriz.com/wp-content/uploads/2020/12/perspectivas-2021.jpg',
      title: 'Menu',
      value: 0
    },
    {
      img: 'https://talleractual.com/images/contenido/negocios-y-autopartes/mercado-local/mercado-de-posventa/2019/04/2019-04-26-talleres-mecanicos-como-evitar-multas-y-clausuras-1-01.jpg',
      title: 'Menu',
      value: 0
    },
    {
      img: 'https://lh3.googleusercontent.com/proxy/o-KM7KcVfq-TrfBoFw2c5XqkF2wXLR-lf3Kbwx5bnaIdvgrrADygd-2vOS0iIK9YnH3NHaq2w2utB0jSQ3GXe4ZV7pyOjiflMvUXMNfiK8MVEzttMt1YtSWSm-NFSvGW4YKKhTTr8lgi8njxFGNeHls3H_CNTHwPniF7L1XNJC2OkQvAPVzi8ZFqr0k',
      title: 'Menu',
      value: 0
    }
  ]

  const equipo = [
    {
      img: 'https://gemicar.net/wp-content/uploads/2022/06/como-distribuir-un-taller-mecanico.jpg',
      title: 'Menu',
      value: 0
    },
    {
      img: 'https://rio.expert/wp-content/uploads/2019/08/aumentar-la-productividad-del-taller-mecanico.jpg',
      title: 'Menu',
      value: 0
    },
    {
      img: 'https://mobil.pe/wp-content/uploads/2022/04/consejos-brindar-mejor-servicio-taller-automotriz.webp',
      title: 'Menu',
      value: 0
    },
    {
      img: 'https://estaticosgn-cdn.deia.eus/clip/1f5b22b9-df8e-4563-aa84-06314b5875d0_16-9-discover-aspect-ratio_default_0.jpg',
      title: 'Menu',
      value: 0
    }
  ]

  const trabajos = [
    {
      img: 'https://mobil.pe/wp-content/uploads/2022/04/consejos-brindar-mejor-servicio-taller-automotriz.webp',
      title: 'Menu',
      value: 0
    },
    {
      img: 'https://gemicar.net/wp-content/uploads/2022/06/como-distribuir-un-taller-mecanico.jpg',
      title: 'Menu',
      value: 0
    },
    {
      img: 'https://noticiaspueblabla.com/wp-content/uploads/2020/05/direct_express_puebla_01-1024x597.jpg',
      title: 'Menu',
      value: 0
    },
    {
      img: 'https://www.beedigital.es/wp-content/uploads/2020/09/37625a509c1b129a13cd38630b5feb4a473835078-1.jpg',
      title: 'Menu',
      value: 0
    }
  ]

  const servicios = [
    {
      img: 'https://mobil.pe/wp-content/uploads/2022/04/consejos-brindar-mejor-servicio-taller-automotriz.webp',
      title: 'Menu',
      value: 0
    },
    {
      img: 'https://gemicar.net/wp-content/uploads/2022/06/como-distribuir-un-taller-mecanico.jpg',
      title: 'Menu',
      value: 0
    },
    {
      img: 'https://noticiaspueblabla.com/wp-content/uploads/2020/05/direct_express_puebla_01-1024x597.jpg',
      title: 'Menu',
      value: 0
    },
    {
      img: 'https://www.beedigital.es/wp-content/uploads/2020/09/37625a509c1b129a13cd38630b5feb4a473835078-1.jpg',
      title: 'Menu',
      value: 0
    }
  ]

  var imagenes = [
    {
      img: 'https://uploads-ssl.webflow.com/626c39fe1ac567f4c6aacbfe/62cee2297842d8811cfc2ad5_buen-servicio-en-taller-mecanico.jpeg',
      title: 'Taller Mecanico',
      value: taller
    },
    {
      img: 'https://img.interempresas.net/fotos/1604410.jpeg',
      title: 'Nuestro Equipo',
      value: equipo
    },
    {
      img: 'https://periodicocorreo.com.mx/__export/sites/correo/img/2022/10/27/Taller-mecanico-1-295031847.webp',
      title: 'Nuestros Trabajos',
      value: trabajos
    },
    {
      img: 'https://alianzaautomotriz.com/wp-content/uploads/2020/06/1FuturoReparacion.jpg',
      title: 'Nuestros Servicios',
      value: servicios
    }
  ]
  const [imgActive, setImgActive] = useState(imagenes)

  React.useEffect(() => {
    const imageSrcs = imagenes.flatMap((item) => [
      item.img,
      ...item.value.map((v) => v.img)
    ])
    preloadImages(imageSrcs)
  }, [])

  const Active = (item) => {
    if (item === 0) {
      setImgActive(imagenes)
    } else {
      setImgActive(item)
    }
  }

  return (
    <>
      {phone ? null : (
        <div
          className="h-screen w-screen flex flex-col justify-center items-center "
          style={{ background: 'linear-gradient(to bottom, #EEF3F6, #FFFFFF)' }}
        >
          <div className="w-5/6 p-5">
            <h1 className="tablet:text-4xl phone:text-3xl font-bold phone:mb-0 tablet:mb-10 text-start">
              Conoce nuestro taller
            </h1>
          </div>

          <div className="w-5/6 h-4/6 p-5">
            <div
              className="flex phone:flex-col tablet:flex-row w-full h-full shadow-custom rounded-3xl"
              style={{ overflow: 'hidden' }}
            >
              {imgActive.map((item, index) => (
                <div
                  key={index}
                  className="phone:w-full phone:h-2/6 tablet:w-2/6 tablet:h-full  transition-transform duration-300 ease-in-out transform hover:scale-110 "
                  style={{
                    backgroundImage: `url(${item.img})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                  }}
                  onClick={() => Active(item.value)}
                >
                  <div className=" bg-black phone:h-full opacity-50 p-5 tablet:hover:p-10 hover:opacity-20 cursor-pointer phone:flex tablet:block">
                    <p className="text-white font-bold text-4xl ">
                      {item.title}
                    </p>
                    <span>
                      <ArrowForwardIosIcon
                        fontSize="large"
                        className="text-white font-bold text-4xl "
                      />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Galeria
