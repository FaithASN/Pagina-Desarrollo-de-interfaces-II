import "./Hero.css";
import hero from "../../assets/images/hero.png";

function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${hero})` }}>
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>
            Sabores que
            <br />
            cuentan historias
          </h1>

          <p>
            Una experiencia gastronomica unica donde
            <br />
            la pasion por la cocina se convierte en arte.
          </p>

          <div className="hero-buttons">
            <a className="btn-primary" href="#/reservas">
              Reservar ahora
            </a>

            <a className="btn-secondary" href="#menu">
              Ver menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
