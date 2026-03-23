'use client'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="nav">

      {/* LOGO */}
      <div className="logo">ORTHONOBA</div>

      {/* MENU */}
      <ul className="menu">
        <li>Soluciones</li>

        <li 
          className="dropdown"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          Clínicas
          {open && (
            <div className="dropdown-menu">
              <a href="#">Registro</a>
              <a href="#">Login</a>
              <a href="#">Enviar caso</a>
            </div>
          )}
        </li>

        <li>Recursos</li>
        <li>Catálogo</li>
        <li>Contacto</li>
        <li>Trabaja con nosotros</li>
      </ul>

      {/* BOTÓN */}
      <button className="btn">Acceso</button>

      {/* ESTILOS */}
      <style jsx>{`
        .nav {
          position: fixed;
          top: 0;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 40px;
          background: rgba(10,10,10,0.6);
          backdrop-filter: blur(12px);
          color: white;
          z-index: 1000;
        }

        .logo {
          font-weight: bold;
          font-size: 22px;
          letter-spacing: 1px;
        }

        .menu {
          display: flex;
          gap: 30px;
          list-style: none;
        }

        .menu li {
          position: relative;
          cursor: pointer;
          transition: 0.3s;
        }

        /* 🔥 HOVER ANIMADO */
        .menu li::after {
          content: '';
          position: absolute;
          width: 0%;
          height: 2px;
          bottom: -5px;
          left: 0;
          background: #FFD700;
          transition: 0.3s;
        }

        .menu li:hover::after {
          width: 100%;
        }

        .menu li:hover {
          color: #FFD700;
        }

        /* 🔥 DROPDOWN */
        .dropdown-menu {
          position: absolute;
          top: 30px;
          left: 0;
          background: #111;
          padding: 12px;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          min-width: 160px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }

        .dropdown-menu a {
          color: white;
          text-decoration: none;
          font-size: 14px;
        }

        .dropdown-menu a:hover {
          color: #FFD700;
        }

        /* 🔥 BOTÓN */
        .btn {
          background: linear-gradient(45deg, #FFD700, #ffcc00);
          color: black;
          border: none;
          padding: 10px 18px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: bold;
          transition: 0.3s;
        }

        .btn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 10px #FFD700;
        }

      `}</style>
    </nav>
  )
}