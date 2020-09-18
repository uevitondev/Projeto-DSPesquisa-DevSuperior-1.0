import React from "react";
import "./style.css";
import { ReactComponent as ArrowIcon } from "../../assets/arrow.svg";
import { ReactComponent as GamerImage } from "../../assets/gamer.svg";
import { Link } from "react-router-dom";

const Home = () => (
    <div className="home-container">
        <div className="home-text">
            <h1 className="home-text-title">
                Quais Jogos a galera gosta mais?
            </h1>
            <h3 className="home-text-subtitle">
                Clique no botão abaixo e saiba quais os jogos que os games estão escolhendo!
            </h3>
            <Link to="/Records">
                <div className="home-actions">
                    <button className="home-btn">
                        QUERO SABER QUAIS SÃO!
                    </button>
                    <div className="home-btn-icon">
                        <ArrowIcon />
                    </div>
                </div>
            </Link>
        </div>
        <GamerImage className="home-image" />
    </div>
);

export default Home;