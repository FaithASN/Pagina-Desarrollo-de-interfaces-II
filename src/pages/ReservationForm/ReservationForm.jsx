import { useState } from "react";
import { FaRegCalendarAlt, FaRegClock, FaRegEnvelope, FaRegUser } from "react-icons/fa";
import { FiArrowLeft, FiPhone } from "react-icons/fi";
import hero from "../../assets/images/hero.png";
import "./ReservationForm.css";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  people: "",
  comment: "",
};

function ReservationForm() {
  const [form, setForm] = useState(initialForm);
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("reservationData", JSON.stringify(form));
    setMessage(`Reserva registrada para ${form.name} el ${form.date} a las ${form.time}.`);
    setForm(initialForm);
    window.location.hash = "#/mesa";
  };

  return (
    <main className="reservation-form-page">
      <section className="form-side">
        <a className="back-link" href="#inicio">
          <FiArrowLeft />
          Volver al inicio
        </a>

        <form className="reservation-form" onSubmit={handleSubmit}>
          <div className="form-heading">
            <h1>Reserva tu mesa</h1>
            <p>Completa los datos para reservar una mesa</p>
          </div>

          <label className="field-row">
            <FaRegUser />
            <span>
              Nombre completo
              <input
                name="name"
                type="text"
                placeholder="Ej: Alejandro Vega"
                value={form.name}
                onChange={handleChange}
                required
              />
            </span>
          </label>

          <label className="field-row">
            <FaRegEnvelope />
            <span>
              Correo electronico
              <input
                name="email"
                type="email"
                placeholder="ejemplo@correo.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </span>
          </label>

          <label className="field-row">
            <FiPhone />
            <span>
              Telefono
              <input
                name="phone"
                type="tel"
                placeholder="+51 900 000 000"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </span>
          </label>

          <div className="field-grid">
            <label className="field-row compact">
              <FaRegCalendarAlt />
              <span>
                Fecha
                <input
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                />
              </span>
            </label>

            <label className="field-row compact">
              <FaRegClock />
              <span>
                Hora
                <select name="time" value={form.time} onChange={handleChange} required>
                  <option value="">Selecciona hora</option>
                  <option>12:30 PM</option>
                  <option>1:30 PM</option>
                  <option>3:00 PM</option>
                  <option>6:00 PM</option>
                  <option>8:30 PM</option>
                  <option>9:00 PM</option>
                </select>
              </span>
            </label>
          </div>

          <label className="field-row people-field">
            <FaRegUser />
            <span>
              Numero de personas
              <select name="people" value={form.people} onChange={handleChange} required>
                <option value="">Selecciona</option>
                <option>1 persona</option>
                <option>2 personas</option>
                <option>3 personas</option>
                <option>4 personas</option>
                <option>5 personas</option>
                <option>6 personas</option>
              </select>
            </span>
          </label>

          <label className="comment-field">
            Comentario adicionales (opcional)
            <textarea
              name="comment"
              placeholder="Ej: Mesa en la terraza, ocasion especial, alergias, etc."
              value={form.comment}
              onChange={handleChange}
            />
          </label>

          <button className="submit-reservation" type="submit">
            Confirmar reserva
          </button>

          {message && <p className="success-message">{message}</p>}
        </form>
      </section>

      <section
        className="form-image"
        aria-label="Mesa preparada en restaurante"
        style={{ backgroundImage: `url(${hero})` }}
      />
    </main>
  );
}

export default ReservationForm;
