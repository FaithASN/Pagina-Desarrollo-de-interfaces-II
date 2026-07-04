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
        <a href="#">Inicio</a>
        <a href="#">Menú</a>
        <a href="#">Reservas</a>
        <a href="#">Nosotros</a>
        <a href="#">Contacto</a>
      </nav>

      <div className="navbar-actions">
        <button className="reserve-btn">
          Reservar ahora
        </button>

        <FaRegUser className="user-icon" />
      </div>

    </header>
  );
}

export default Navbar;