import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';



const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  /*d */
  const handleSubmit = (e) => {
    console.log("Clicked on the About Page");
    e.preventDefault();
    // Handle form submission logic here
    console.log(email, password, confirmPassword);
  };

} 

export default function Registration() {
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
            Registra a un Funcionario/a
          </text>
        </div>
        <Form className={styles.formContainer}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="email" placeholder="Primer Nombre" onChange={(e) => setEmail(e.target.value)} />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Segundo Nombre</Form.Label>
                <Form.Control type="password" placeholder="Segundo Nombre"  onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicConfirmPassword">
                <Form.Label>Apellido Paterno</Form.Label>
                <Form.Control type="password" placeholder="Apellido Paterno"  onChange={(e) => setConfirmPassword(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicConfirmPassword">
                <Form.Label>Apellido Materno</Form.Label>
                <Form.Control type="password" placeholder="Apellido Materno"  onChange={(e) => setConfirmPassword(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicConfirmPassword">
                <Form.Label>Correo Electronico</Form.Label>
                <Form.Control type="password" placeholder="Correo Electronico"  onChange={(e) => setConfirmPassword(e.target.value)} />
            </Form.Group>



            <br/>

            <Popup trigger={<Button variant="success">
                Registrar
                </Button>} position="right center">
               <div>Usuario creado correctamente</div>
             </Popup>
        </Form>
      </main>
    </>
    )
  }


