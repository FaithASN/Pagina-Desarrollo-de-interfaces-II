import "./Navbar.css";
import { FaRegUser } from "react-icons/fa";
import logo from "../../assets/images/logo.png";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Sabor & Arte" />
      </div>

      <nav className="navbar-links">
        <a href="#inicio">Inicio</a>
        <a href="#menu">Menu</a>
        <a href="#/reservas">Reservas</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <div className="navbar-actions">
        <a className="reserve-btn" href="#/reservas">
          Reservar ahora
        </a>

        <FaRegUser className="user-icon" />
      </div>
    </header>
  );
}

export default Navbar;
