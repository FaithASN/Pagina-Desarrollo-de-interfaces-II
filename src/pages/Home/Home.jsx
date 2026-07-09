import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import pastaImage from "../../assets/images/Pasta.png";
import risottoImage from "../../assets/images/Risotto.png";
import postreImage from "../../assets/images/Postre.png";
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />

      <main id="inicio">
        <Hero />

        <section className="home-section" id="menu">
          <span className="section-label">Menu</span>
          <h2>Platos destacados</h2>
          <div className="menu-grid">
            <article>
              <img src={pastaImage} alt="Pasta artesanal" />
              <h3>Pasta artesanal</h3>
              <p>Salsa cremosa, hierbas frescas y queso madurado.</p>
            </article>
            <article>
              <img src={risottoImage} alt="Risotto de la casa" />
              <h3>Risotto de la casa</h3>
              <p>Arroz suave, vegetales salteados y aroma de vino blanco.</p>
            </article>
            <article>
              <img src={postreImage} alt="Postre de temporada" />
              <h3>Postre de temporada</h3>
              <p>Una opcion dulce para cerrar la experiencia.</p>
            </article>
          </div>
        </section>

        <section className="home-section" id="nosotros">
          <span className="section-label">Nosotros</span>
          <h2>Cocina con identidad</h2>
          <p>
            Sabor & Arte combina recetas contemporaneas con ingredientes
            frescos para crear un ambiente calido y memorable.
          </p>
        </section>

        <Features />

        <section className="home-section contact-section" id="contacto">
          <span className="section-label">Contacto</span>
          <h2>Visitanos</h2>
          <p>Av. Principal 123 - Atencion de lunes a domingo.</p>
          <a className="btn-primary" href="#/reservas">
            Reservar una mesa
          </a>
        </section>
      </main>
    </>
  );
}

export default Home;
