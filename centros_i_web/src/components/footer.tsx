import React from "react";
import Link from "next/link";


function Footer() {
    return <div>
        
    </div>
}

export default function Layout({children}:any) {
    return (
        <>
            
            <main>{children}</main>
            <Footer />
        </>
    )
}