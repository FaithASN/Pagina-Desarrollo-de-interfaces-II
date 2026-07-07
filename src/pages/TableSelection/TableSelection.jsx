import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { GiWineBottle } from "react-icons/gi";
import "./TableSelection.css";

const tables = [
  { id: 1, status: "disponible" },
  { id: 2, status: "disponible" },
  { id: 3, status: "disponible" },
  { id: 4, status: "disponible" },
  { id: 5, status: "disponible" },
  { id: 6, status: "ocupada" },
  { id: 7, status: "disponible" },
  { id: 8, status: "disponible" },
  { id: 9, status: "disponible" },
  { id: 10, status: "disponible" },
];

function TableSelection() {
  const [selectedTable, setSelectedTable] = useState(null);
  const chooseTable = (table) => {
    if (table.status === "ocupada") {
      return;
    }

    setSelectedTable(table.id);
  };

  const confirmTable = () => {
    if (!selectedTable) {
      return;
    }

    localStorage.setItem("selectedTable", selectedTable);
    window.location.hash = "#/resumen";
  };

  return (
    <main className="table-page">
      <a className="back-link" href="#inicio">
        <FiArrowLeft />
        Volver al inicio
      </a>

      <section className="table-header">
        <div>
          <h1>Selecciona tu mesa</h1>
          <p>
            Elige tu mesa preferida disponible para
            <br />
            el 28 de Junio del 2026 a las 7:00 PM
          </p>
        </div>

        <div className="table-legend">
          <span><i className="available" />Disponible</span>
          <span><i className="selected" />Seleccionada</span>
          <span><i className="occupied" />Ocupada</span>
        </div>
      </section>

      <section className="floor-plan" aria-label="Plano de mesas del restaurante">
        <span className="corner corner-top-left" />
        <span className="corner corner-top-right" />
        <span className="corner corner-bottom-left" />
        <span className="corner corner-bottom-right" />

        {tables.map((table) => (
          <button
            className={`restaurant-table table-${table.id} ${table.status} ${
              selectedTable === table.id ? "seleccionada" : ""
            }`}
            disabled={table.status === "ocupada"}
            key={table.id}
            onClick={() => chooseTable(table)}
            type="button"
          >
            <span className="chair chair-top-left" />
            <span className="chair chair-top-right" />
            <span className="chair chair-left" />
            <span className="chair chair-right" />
            <span className="chair chair-bottom-left" />
            <span className="chair chair-bottom-right" />
            Mesa {table.id}
          </button>
        ))}

        <div className="bar">
          <span>BAR</span>
          <GiWineBottle />
        </div>
      </section>

      <button
        className="confirm-table"
        disabled={!selectedTable}
        onClick={confirmTable}
        type="button"
      >
        {selectedTable
          ? `Continuar al resumen con Mesa ${selectedTable}`
          : "Selecciona una mesa para continuar"}
      </button>

      <p className="table-hint">
        {selectedTable
          ? `Mesa ${selectedTable} seleccionada. Ahora puedes continuar al resumen de tu reserva.`
          : "Toca una mesa disponible para activar el boton de confirmacion."}
      </p>

    </main>
  );
}

export default TableSelection;
