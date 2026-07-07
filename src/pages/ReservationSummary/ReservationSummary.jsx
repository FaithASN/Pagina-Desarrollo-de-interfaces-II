import { FiArrowLeft, FiCalendar, FiClock, FiMail, FiPhone, FiUser } from "react-icons/fi";
import { MdOutlineTableRestaurant } from "react-icons/md";
import hero from "../../assets/images/hero.png";
import "./ReservationSummary.css";

const bestSellers = [
  {
    name: "Bruschetta Clasica",
    category: "Entrada",
    description: "Pan tostado con tomate, albahaca, ajo y aceite de oliva.",
  },
  {
    name: "Ensalada Mediterranea",
    category: "Entrada",
    description: "Lechugas, tomates cherry, aceitunas, queso feta y aderezo de la casa.",
  },
  {
    name: "Sopa del dia",
    category: "Especial",
    description: "Preparacion caliente de temporada recomendada por el chef.",
  },
];

const defaultReservation = {
  name: "Alejandro Vega",
  email: "ejemplo@correo.com",
  phone: "+51 900 000 000",
  date: "2026-06-28",
  time: "7:00 PM",
  people: "2 personas",
  comment: "Sin comentarios adicionales",
};

function getReservationData() {
  const savedReservation = localStorage.getItem("reservationData");

  if (!savedReservation) {
    return defaultReservation;
  }

  return {
    ...defaultReservation,
    ...JSON.parse(savedReservation),
  };
}

function ReservationSummary() {
  const reservation = getReservationData();
  const selectedTable = localStorage.getItem("selectedTable") || "1";

  const confirmReservation = () => {
    const reservationCode = `SA-${Date.now().toString().slice(-6)}`;
    localStorage.setItem("reservationCode", reservationCode);
    window.location.hash = "#/confirmacion";
  };

  return (
    <main
      className="summary-page"
      style={{ backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.82), rgba(0,0,0,.5)), url(${hero})` }}
    >
      <a className="back-link" href="#inicio">
        <FiArrowLeft />
        Volver al inicio
      </a>

      <section className="summary-layout">
        <div className="summary-main">
          <span className="summary-label">Confirmacion</span>
          <h1>Resumen de tu reserva</h1>
          <p>Revisa los detalles antes de confirmar tu visita.</p>

          <div className="summary-card">
            <h2>Datos de la reserva</h2>

            <div className="summary-grid">
              <span><FiUser />{reservation.name}</span>
              <span><FiMail />{reservation.email}</span>
              <span><FiPhone />{reservation.phone}</span>
              <span><FiCalendar />{reservation.date}</span>
              <span><FiClock />{reservation.time}</span>
              <span><MdOutlineTableRestaurant />Mesa {selectedTable}</span>
            </div>

            <div className="summary-note">
              <strong>Personas:</strong> {reservation.people}
              <br />
              <strong>Comentario:</strong> {reservation.comment || "Sin comentarios adicionales"}
            </div>

            <button className="finish-button" onClick={confirmReservation} type="button">
              Confirmar reserva final
            </button>
          </div>
        </div>

        <aside className="best-sellers">
          <span className="summary-label">Mas vendidos</span>
          <h2>Platos favoritos</h2>

          {bestSellers.map((dish, index) => (
            <article className="dish-card" key={dish.name}>
              <div
                className={`dish-image dish-image-${index + 1}`}
                style={{ backgroundImage: `url(${hero})` }}
              />
              <div>
                <span>{dish.category}</span>
                <h3>{dish.name}</h3>
                <p>{dish.description}</p>
              </div>
            </article>
          ))}
        </aside>
      </section>
    </main>
  );
}

export default ReservationSummary;
