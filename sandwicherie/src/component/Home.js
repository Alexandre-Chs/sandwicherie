import { Fragment } from "react";
import "../styles/home.css";
import Server from "./Server";
import { AiOutlineArrowDown } from "react-icons/ai";
import { SiHappycow } from "react-icons/si";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      <div className="container__home">
        <nav>
          <a className="about__nav" href="#about">
            About us
          </a>
          <Link to="/" className="logo__nav">
            C
            <span>
              <SiHappycow className="cow__head" size={30} />
            </span>
            w Snack
          </Link>
          <a className="instagram__nav">Instagram</a>
        </nav>
        <section className="content__description">
          <div className="description__home">
            <h1>Découvrez le goût des vrais sandwiches</h1>
          </div>
          <div className="button__home">
            <Link to="/command" className="button__command">
              COMMANDER
            </Link>
          </div>
        </section>

        <Server />
      </div>
      <div>
        <div className="container__description" id="about">
          <div className="description__aboutUs">
            <h1>A PROPOS DE NOUS</h1>
            <p>Description de la sandwicherie</p>
          </div>
        </div>
      </div>
      <div className="icon__scroll">
        <AiOutlineArrowDown className="arrow_scroll" />
      </div>
    </Fragment>
  );
};

export default Home;
