import { FiArrowLeft, FiCalendar, FiCheck, FiClock, FiMail, FiPhone, FiUser } from "react-icons/fi";
import { MdOutlineTableRestaurant } from "react-icons/md";
import hero from "../../assets/images/hero.png";
import "./ReservationConfirmation.css";

const defaultReservation = {
  name: "Usuario",
  email: "ejemplo@correo.com",
  phone: "+51 900 000 000",
  date: "2026-06-28",
  time: "7:00 PM",
  people: "4 personas",
};

const qrCells = [
  0, 1, 2, 3, 4, 6, 8, 9, 10,
  12, 16, 18, 20, 21, 23, 25,
  27, 28, 30, 31, 33, 35, 36,
  38, 41, 43, 44, 46, 48, 49,
  50, 52, 54, 56, 57, 60, 62,
  64, 65, 67, 69, 70, 72, 74,
  76, 79, 80, 82, 84, 86, 88,
  90, 91, 93, 95, 96, 98, 99,
];

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

function ReservationConfirmation() {
  const reservation = getReservationData();
  const selectedTable = localStorage.getItem("selectedTable") || "1";
  const reservationCode = localStorage.getItem("reservationCode") || "SA-240628";

  return (
    <main
      className="confirmation-page"
      style={{ backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.88), rgba(0,0,0,.52)), url(${hero})` }}
    >
      <a className="back-link" href="#inicio">
        <FiArrowLeft />
        Volver al inicio
      </a>

      <section className="confirmation-content">
        <div className="check-icon">
          <FiCheck />
        </div>

        <h1>Reserva Confirmada</h1>
        <p className="confirmation-subtitle">
          Presenta este comprobante al llegar al restaurante para validar tu mesa.
        </p>

        <div className="confirmation-card">
          <div className="confirmation-details">
            <span><FiUser /> <strong>Nombre:</strong> {reservation.name}</span>
            <span><FiCalendar /> <strong>Fecha:</strong> {reservation.date}</span>
            <span><FiClock /> <strong>Hora:</strong> {reservation.time}</span>
            <span><MdOutlineTableRestaurant /> <strong>Mesa:</strong> Mesa {selectedTable}</span>
            <span><FiUser /> <strong>Personas:</strong> {reservation.people}</span>
            <span><FiPhone /> <strong>Telefono:</strong> {reservation.phone}</span>
            <span><FiMail /> <strong>Correo:</strong> {reservation.email}</span>
          </div>

          <aside className="validation-box">
            <span className="code-label">Codigo de reserva</span>
            <strong>{reservationCode}</strong>

            <div className="qr-code" aria-label={`Codigo QR de reserva ${reservationCode}`}>
              {Array.from({ length: 100 }).map((_, index) => (
                <i className={qrCells.includes(index) ? "filled" : ""} key={index} />
              ))}
            </div>

            <p>El personal escaneara o revisara este codigo al recibirte.</p>
          </aside>
        </div>

        <div className="confirmation-actions">
          <a className="primary-action" href="#/reservas">Ver mis reservas</a>
          <a className="secondary-action" href="#inicio">Volver al inicio</a>
        </div>
      </section>
    </main>
  );
}

export default ReservationConfirmation;
