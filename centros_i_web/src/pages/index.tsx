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
          
          <div className="aboutImgs1">
            <img src="/images/kidsClg1.png"></img>
          </div>
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
          <div className="aboutImgs1">
            <img src="/images/kidsClg1.png"></img>
          </div>
        </div>
      </div>
      

    </div>
  )
}
