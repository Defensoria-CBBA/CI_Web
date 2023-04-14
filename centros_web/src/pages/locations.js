import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'


import locations from './locations.js'
import registration from './empRegForm.js'

const inter = Inter({ subsets: ['latin'] })

const handleClick = (e, path) => {
    if (path === {sliderTry}) {
      console.log("Clicked on the About Page");
    }
    
};
export default function Home() {
  return (
    <>
      <Head>
        <title>Centros Infantiles</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.navBarContainer}>
          <div className={styles.navDivContainer}>
              <Link className={styles.navDivText1} href="locations">
                Opcion 1
              </Link>
              <Link className={styles.navDivText1} href="daycareRegistration">
                Opcion 2
              </Link>
              <Link className={styles.navDivText1} href="registration">
                Opcion 3
              </Link>
          </div>
          <div className={styles.navDivContainer2}>
            <text className={styles.navDivText2}>
              Soy Funcionario/a
            </text>
          </div>
        </div>
      
        <div className={styles.locationTitleContainer}>
          <text className={styles.aboutTitle}>
            Nuestras Ubicaciones
          </text>
        </div>
        <iframe 
            width="600" 
            height="500" 
            id="gmap_canvas" 
            src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" 
            frameborder="0" 
            scrolling="no" 
            marginheight="0" 
            marginwidth="0"
            onClick={(e) => handleClick(e, "/sliderTry")}>

            </iframe>
            <Link href="/sliderTry" className={styles.links}>
            Ver Mas...
        </Link>
      </main>
    </>
  )
}
