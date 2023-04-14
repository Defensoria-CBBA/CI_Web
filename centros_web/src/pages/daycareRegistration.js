import { useState } from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';
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
      
        <div className={styles.locationTitleContainer}>
          <text className={styles.aboutTitle}>
            Registra un Centro
          </text>
        </div>
        <Form className={styles.formContainer}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Nombre Centro</Form.Label>
                <Form.Control type="email" placeholder="Nombre Centro" onChange={(e) => setEmail(e.target.value)} />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Link de coordenadas</Form.Label>
                <Form.Control type="text" placeholder="Segundo Nombre"  onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicConfirmPassword">
                <Form.Label>Funcionario a Cargo</Form.Label>
                <div class="dropdown">
                <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="true">
                  Funcionario
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a class="dropdown-item" href="#">Funcionario 1</a></li>
                  <li><a class="dropdown-item" href="#">Funcionario 2</a></li>
                  <li><a class="dropdown-item" href="#">Funcionario 3</a></li>
                </ul>
              </div>
              </Form.Group>

            <br/>

            <Popup trigger={<Button variant="success">
                Registrar
                </Button>} position="right center">
               <div>Centro creado correctamente</div>
             </Popup>
        </Form>
      </main>
    </>
    )
  }



