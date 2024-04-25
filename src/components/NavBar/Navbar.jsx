import React from "react"
import CartWidget from "./CartWidget"
import imgLogo from "../../assets/logo.png"
import "./navbar.css"
const NavBar = () => {
    return (
        <div className="navbar">
            <div>
                <img className="logoImg" src={imgLogo} />
            </div>
            <ul className="nav-list">
                <li className="nav-item">Inicio</li>
                <li className="nav-item">Productos</li>
                <li className="nav-item">Servicios</li>
                <li className="nav-item">Contacto</li>
                <li className="nav-item">Nosotros</li>
            </ul>
            <CartWidget />
        </div>

    )
}

export default NavBar