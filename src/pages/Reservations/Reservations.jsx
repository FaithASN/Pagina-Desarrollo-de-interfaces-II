import { FaRegCalendarAlt, FaRegEye } from "react-icons/fa";
import { FiArrowLeft, FiEdit2 } from "react-icons/fi";
import "./Reservations.css";

const reservations = [
  {
    time: "12:30 PM",
    name: "Nikola Tesla",
    people: 2,
    table: "Mesa 4",
    status: "Confirmado",
  },
  {
    time: "1:30 PM",
    name: "Elliot Anderson",
    people: 4,
    table: "Mesa 7",
    status: "Confirmado",
  },
  {
    time: "3:00 PM",
    name: "Louis Zamperini",
    people: 3,
    table: "Mesa 2",
    status: "Pendiente",
  },
  {
    time: "6:00 PM",
    name: "Terry Davis",
    people: 2,
    table: "Mesa 6",
    status: "Confirmado",
  },
  {
    time: "8:30 PM",
    name: "Steve Jobs",
    people: 5,
    table: "Mesa 9",
    status: "Confirmado",
  },
  {
    time: "9:00 PM",
    name: "Lionel Messi",
    people: 2,
    table: "Mesa 1",
    status: "Pendiente",
  },
];

function Reservations() {
  return (
    <main className="reservas">
      <a className="back-link" href="#inicio">
        <FiArrowLeft />
        Volver al inicio
      </a>

      <section className="reservas-panel">
        <div className="reservas-header">
          <div>
            <h1>Reserva tu mesa</h1>
            <div className="fecha">
              <span>28 de Junio de 2026</span>
              <FaRegCalendarAlt />
            </div>
          </div>

          <a className="btn-primary" href="#/reservar">
            Reservar ahora
          </a>
        </div>

        <div className="filtros">
          <button className="active">Todas</button>
          <button>Confirmadas</button>
          <button>Pendientes</button>
          <button>Canceladas</button>
        </div>

        <table className="tabla">
          <thead>
            <tr>
              <th>Hora</th>
              <th>Nombre</th>
              <th>Personas</th>
              <th>Mesas</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <tr key={`${reservation.time}-${reservation.name}`}>
                <td>{reservation.time}</td>
                <td>{reservation.name}</td>
                <td>{reservation.people}</td>
                <td>{reservation.table}</td>
                <td>
                  <span className={`estado ${reservation.status.toLowerCase()}`}>
                    {reservation.status}
                  </span>
                </td>
                <td className="acciones">
                  <button aria-label="Ver reserva">
                    <FaRegEye />
                  </button>
                  <button aria-label="Editar reserva">
                    <FiEdit2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default Reservations;
