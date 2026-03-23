'use client'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">ORTHONOBA</div>

      <ul className="menu">
        <li>Soluciones</li>
        <li>Clínicas</li>
        <li>Precios</li>

        <li className="dropdown">
          Recursos
          <ul className="dropdown-menu">
            <li>Enviar caso</li>
            <li>Orden de trabajo</li>
            <li>Solicitar recogida</li>
            <li>Lista de precios</li>
            <li>Blog</li>
          </ul>
        </li>

        <li>Trabaja con nosotros</li>
        <li>Contacto</li>
        <li className="btn-acceso">Acceso</li>
      </ul>
    </nav>
  )
}