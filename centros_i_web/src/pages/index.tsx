import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
    <div >
      <div className="mainContainer flex flex-col items-center justify-between">
        <div className="topContainer flex flex-row">
          <div className="logoSection flex flex-col justify-between">
            logo
          </div>
          <div className="navigationSection flex flex-row ">
            
            <ul className="linkSection flex flex-row">
              <li className="navLinks">
                <a href="#">Opcion 1</a>
              </li>
              <li className="navLinks">
                <a href="#">Opcion 2</a>
              </li>
              <li className="navLinks">
                <a href="#">Opcion 3</a>
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
            <div className="title">
              Centros Infantiles
            </div>
            <div className="tDescription">
              Descripcion breve sobre la informacion y contenido de los entros infantiles de Cochabamba
            </div>
          </div>

          <div className="photoSection">
            <img src="/components/images/mainPic.png"></img>
          </div>
        </div>
       
      </div>

      <img src="/components/images/mainPic.png"></img>
      <img src="/components/images/mainPic.png"></img>
      <img src="/components/images/mainPic.png"></img>
    </div>
  )
}
