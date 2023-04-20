import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
    <div >
      <div className="mainContainer flex flex-col ">
        <div className="topContainer flex flex-row fixed top-0 left-0 right-0">
          <div className="logoSection flex flex-col justify-between">
            <img className="logo" src="/components/images/logo.png"></img>
          </div>
          <div className="navigationSection flex flex-row ">
            
            <ul className="linkSection flex flex-row">
              <li className="navLinks">
                <Link href="/map">Ubicaciones</Link>
              </li>
              <li className="navLinks">
               <Link href="/registroF">Nuevo Funcionario</Link>
              </li>
              <li className="navLinks">
              <Link href="/registroC">Nuevo Centro</Link>
              </li>
              
              <li className="navLinks">
                |
              </li>

              <li className="navLinks">
                <a href="#">Soy Funcionario/a</a>
              </li>
            </ul>
            
          </div>
        </div>
        
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
            <img src="/components/images/mainPic.png"></img>
          </div>
        </div>
       
      </div>


    </div>
  )
}
