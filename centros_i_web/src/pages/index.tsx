import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
    <div >
      <div className="mainContainer flex flex-col ">
        
        
        <div className="welcomeSection flex flex-row">
          <div className="titleSection flex flex-col">
            <div className="greeting">
              Bienvenidos
            </div>
            <div className="title">
              Centros Infantiles
            </div>
            <div className="tDescription">
              Descripcion breve sobre la informacion y contenido de los centros infantiles de Cochabamba.
              Esta pagina web ayudara a encontrar informacion acerca de cada cento infantil.
            </div>
          </div>

          <div className="photoSection justify-center items-center">
            <img src="/images/mainPic.png"></img>
          </div>
        </div>
       
      </div>


    </div>
  )
}
