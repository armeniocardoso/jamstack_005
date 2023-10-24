import React from "react"
import "./layout.css"
import { Link } from "gatsby"
import Footer from "./footer"

export default function Layout({ children }) {
    return (
        <main className="layout">
            <div className="header">
                <h3>Estudos de Jamstack - Gatsby</h3>
                <nav className="topnav">
                    <Link to="/">Início</Link>
                    <Link to="/pagina2">Dados Externos</Link>
                    <Link to="/pagina3">Dados Internos</Link>
                </nav>
            </div>
            <div className="main">
                {children}
            </div>
            <Footer copyrightYear="2023" />
        </main >
    )
}
