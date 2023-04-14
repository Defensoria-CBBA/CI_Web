import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'



import locations from './locations.js'
import employee from './empRegForm.js'


const inter = Inter({ subsets: ['latin'] })

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
              <Link className={styles.navDivText1} href="register">
                Opcion 2
              </Link>
              <Link className={styles.navDivText1} href="empRegForm">
                Opcion 3
              </Link>
          </div>
          <div className={styles.navDivContainer2}>
            <text className={styles.navDivText2}>
              Soy Funcionario/a
            </text>
          </div>
        </div>
        <div className={styles.logoTitleContainer}>
          <div className={styles.logoC}>
          
          </div>
          <div className={styles.titleContainer}>
            <text className={styles.titleC}>
              Centros
            </text>
            <text className={styles.titleI}>
              Infantiles
            </text>
          </div>
        </div>

        <div className={styles.aboutTitleContainer}>
          <text className={styles.aboutTitle}>
            ¿Quiénes somos?
          </text>
        </div>

        <div className={styles.containerAbout}>
          
          <text className={styles.aboutText}>La Defensoría de la Niñez y Adolescencia es una instancia dependiente del Gobierno Autónomo Municipal de Cochabamba que brinda servicios públicos, permanentes y gratuitos de defensa psico-social-legal, para garantizar a las niñas, niños y adolescentes la vigencia plena de sus derechos.</text>
        </div>
      </main>
    </>
  )
}

