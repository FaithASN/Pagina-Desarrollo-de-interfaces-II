import "./Hero.css";
import hero from "../../assets/images/hero.png";

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="hero-overlay">

        <div className="hero-content">

          <h1>
            Sabores que
            <br />
            cuentan historias
          </h1>

          <p>
            Una experiencia gastronómica única donde
            <br />
            la pasión por la cocina se convierte en arte.
          </p>

          <div className="hero-buttons">

            <button className="btn-primary">
              Reservar ahora
            </button>

            <button className="btn-secondary">
              Ver menú
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;