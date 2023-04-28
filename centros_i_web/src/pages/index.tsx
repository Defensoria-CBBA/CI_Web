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
              
              <br></br>
              Los centros infantiles son establecimientos que ofrecen cuidado y educación a niños y niñas desde los primeros meses de vida hasta los seis años de edad. 
              Estos centros tienen como objetivo brindar un entorno seguro y estimulante para el desarrollo físico, emocional, social y cognitivo de los niños.

              <br></br>

              En los centros infantiles, los niños son atendidos por profesionales capacitados en la atención infantil y educación temprana. 
              Se les proporciona una variedad de actividades diseñadas para ayudarlos a aprender y desarrollarse, como juegos, canciones, actividades artísticas, entre otras. 
              Además, se les proporciona una alimentación equilibrada y adecuada para su edad.
            </div>
          </div>

          <div className="photoSection justify-center items-center">
            <img src="/images/mainPic.png"></img>
          </div>
          
        </div>

      </div>

      <div className="aboutMainContainer ">
        <div className="aboutTitle">
          Acerca de Nosotros
        </div>

        <div className="aboutSubContainer flex flex-row">
          
          
          <div className="aboutDesc">
            
              Descripcion breve sobre la informacion y contenido de los centros infantiles de Cochabamba.
              Esta pagina web ayudara a encontrar informacion acerca de cada cento infantil.
              
              <br></br>
              
              En los centros infantiles, los niños son atendidos por profesionales capacitados en la atención infantil y educación temprana. 
              Se les proporciona una variedad de actividades diseñadas para ayudarlos a aprender y desarrollarse, como juegos, canciones, actividades artísticas, entre otras. 
              Además, se les proporciona una alimentación equilibrada y adecuada para su edad.

              <br></br>
              Los centros infantiles son establecimientos que ofrecen cuidado y educación a niños y niñas desde los primeros meses de vida hasta los seis años de edad. 
              Estos centros tienen como objetivo brindar un entorno seguro y estimulante para el desarrollo físico, emocional, social y cognitivo de los niños.
          </div>
          
        </div>
      </div>

      <div className="sliderContainer">
        <div className="carousel">
          <div className="carousel-inner">
            <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden checked></input>
            <div className="carousel-item">
              <img src="/images/kidsGroup.jpg"></img>
            </div>

            <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden checked></input>
            <div className="carousel-item">
              <img src="/images/kidsGroupLarge.jpg"></img>
            </div>

            <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden checked></input>
            <div className="carousel-item">
              <img src="/images/kidsGroupLarge2.jpg"></img>
            </div>

            <label htmlFor="carousel-3" className="carousel-control prev control-2">‹</label>
            <label htmlFor="carousel-2" className="carousel-control next control-1">›</label>
            <label htmlFor="carousel-1" className="carousel-control prev control-2">‹</label>
            <label htmlFor="carousel-3" className="carousel-control next control-2">›</label>
            <label htmlFor="carousel-2" className="carousel-control prev control-3">‹</label>
            <label htmlFor="carousel-1" className="carousel-control next control-3">›</label>
            <ol className="carousel-indicators">
              <li>
                  <label htmlFor="carousel-1" className="carousel-bullet">•</label>
              </li>
              <li>
                  <label htmlFor="carousel-2" className="carousel-bullet">•</label>
              </li>
              <li>
                  <label htmlFor="carousel-3" className="carousel-bullet">•</label>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footerTitle">
          Centros Infantiles
        </div>

        <div className="copyrightContainer">
          Copyright &copy; 2023 Nasa Kisis
        </div>

        <div className="footerLinks">
          <Link href="#">Legal Stuff</Link>
          |
          <Link href="#">Privacy Policy</Link>
          |
          <Link href="#">Security</Link>
        </div>
      </div>

      

    </div>
    
  )
}
