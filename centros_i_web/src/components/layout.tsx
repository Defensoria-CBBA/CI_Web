import React from "react";
import Link from "next/link";
function NavBar() {
    return <div>
        <div className="topContainer flex flex-row fixed top-0 left-0 right-0">
          <div className="logoSection flex flex-col justify-between">
            <img className="logo" src="/images/logo.png"></img>
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
    </div>
}

export default function Layout({children}:any) {
    return (
        <>
            <NavBar />
            <main>{children}</main>
        </>
    )
}