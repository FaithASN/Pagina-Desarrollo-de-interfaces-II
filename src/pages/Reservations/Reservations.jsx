import { useMemo, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FiArrowLeft, FiEdit2 } from "react-icons/fi";
import "./Reservations.css";

const reservations = [
  {
    time: "12:30 PM",
    name: "Nikola Tesla",
    people: 2,
    table: "Mesa 4",
    status: "Confirmado",
    date: "2026-06-28",
  },
  {
    time: "1:30 PM",
    name: "Elliot Anderson",
    people: 4,
    table: "Mesa 7",
    status: "Confirmado",
    date: "2026-06-28",
  },
  {
    time: "3:00 PM",
    name: "Louis Zamperini",
    people: 3,
    table: "Mesa 2",
    status: "Pendiente",
    date: "2026-06-29",
  },
  {
    time: "6:00 PM",
    name: "Terry Davis",
    people: 2,
    table: "Mesa 6",
    status: "Confirmado",
    date: "2026-06-30",
  },
  {
    time: "8:30 PM",
    name: "Steve Jobs",
    people: 5,
    table: "Mesa 9",
    status: "Confirmado",
    date: "2026-06-28",
  },
  {
    time: "9:00 PM",
    name: "Lionel Messi",
    people: 2,
    table: "Mesa 1",
    status: "Pendiente",
    date: "2026-06-29",
  },
];

function Reservations() {
  const [activeFilter, setActiveFilter] = useState("Todas");
  const [dateFilter, setDateFilter] = useState("");

  const currentDate = useMemo(() => {
    const now = new Date();
    return new Intl.DateTimeFormat("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(now);
  }, []);

  const filteredReservations = useMemo(() => {
    let filtered = reservations;

    if (activeFilter !== "Todas") {
      filtered = filtered.filter(
        (reservation) => reservation.status.toLowerCase() === activeFilter.toLowerCase()
      );
    }

    if (dateFilter) {
      filtered = filtered.filter((reservation) => reservation.date === dateFilter);
    }

    return filtered;
  }, [activeFilter, dateFilter]);

  const handleFilterClick = (status) => {
    setActiveFilter(status);
  };

  const handleDateChange = (event) => {
    setDateFilter(event.target.value);
  };

  const handleNewReservation = () => {
    localStorage.removeItem("reservationToEdit");
    window.location.hash = "#/reservar";
  };

  const handleEditReservation = (reservation) => {
    const reservationToEdit = {
      name: reservation.name,
      time: reservation.time,
      people: `${reservation.people} personas`,
    };

    localStorage.setItem("reservationToEdit", JSON.stringify(reservationToEdit));
    window.location.hash = "#/reservar";
  };

  return (
    <main className="reservas">
      <a className="back-link" href="#inicio">
        <FiArrowLeft />
        Volver al inicio
      </a>

      <section className="reservas-panel">
        <div className="reservas-header">
          <h1>Reserva tu mesa</h1>

          <button className="btn-primary" type="button" onClick={handleNewReservation}>
            Reservar ahora
          </button>
        </div>

        <div className="reservas-header-row">
          <div className="busqueda-fecha">
            <label>
              Buscar por fecha
              <input
                type="date"
                value={dateFilter}
                onChange={handleDateChange}
                aria-label="Buscar por fecha"
              />
            </label>
          </div>

          <div className="fecha-actual">
            <span>{currentDate}</span>
          </div>
        </div>

        <div className="filtros">
          <button
            type="button"
            className={activeFilter === "Todas" ? "active" : ""}
            onClick={() => handleFilterClick("Todas")}
          >
            Todas
          </button>
          <button
            type="button"
            className={activeFilter === "Confirmado" ? "active" : ""}
            onClick={() => handleFilterClick("Confirmado")}
          >
            Confirmadas
          </button>
          <button
            type="button"
            className={activeFilter === "Pendiente" ? "active" : ""}
            onClick={() => handleFilterClick("Pendiente")}
          >
            Pendientes
          </button>
          <button
            type="button"
            className={activeFilter === "Cancelado" ? "active" : ""}
            onClick={() => handleFilterClick("Cancelado")}
          >
            Canceladas
          </button>
        </div>

        <div className="table-scroll">
          <table className="tabla">
          <thead>
            <tr>
              <th>Hora</th>
              <th>Fecha</th>
              <th>Nombre</th>
              <th>Personas</th>
              <th>Mesas</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredReservations.map((reservation) => (
              <tr key={`${reservation.time}-${reservation.name}`}>
                <td>{reservation.time}</td>
                <td>{reservation.date}</td>
                <td>{reservation.name}</td>
                <td>{reservation.people}</td>
                <td>{reservation.table}</td>
                <td>
                  <span className={`estado ${reservation.status.toLowerCase()}`}>
                    {reservation.status}
                  </span>
                </td>
                <td className="acciones">
                  <button aria-label="Ver reserva" type="button">
                    <FaRegEye />
                  </button>
                  <button
                    aria-label="Editar reserva"
                    type="button"
                    onClick={() => handleEditReservation(reservation)}
                  >
                    <FiEdit2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

export default Reservations;
