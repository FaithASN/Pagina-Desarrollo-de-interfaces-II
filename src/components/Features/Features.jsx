import "./Features.css";
import { LuLeaf } from "react-icons/lu";
import { LuChefHat } from "react-icons/lu";
import { LuCupSoda } from "react-icons/lu";

function Features() {
  return (
    <section className="features">

      <div className="feature">

        <LuLeaf className="feature-icon"/>

        <h3>Ingredientes frescos</h3>

        <p>
          Seleccionamos lo mejor
          <br />
          de cada estación
        </p>

      </div>

      <div className="feature">

        <LuChefHat className="feature-icon"/>

        <h3>Chef expertos</h3>

        <p>
          Pasión y creatividad en
          <br />
          cada plato
        </p>

      </div>

      <div className="feature">

        <LuCupSoda className="feature-icon"/>

        <h3>Ambiente acogedor</h3>

        <p>
          El lugar perfecto para
          <br />
          cada ocasión
        </p>

      </div>

    </section>
  );
}

export default Features;