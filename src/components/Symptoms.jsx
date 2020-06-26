import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const symptom = () => {
  return (
    <div>
      <h1 className="symptoms_title">Mes symptômes</h1>
      <div className="symptoms">
        <div>
          <Link to="./nextpill">
            <button className="symptom">
              <h3>Je tremble</h3>
            </button>
          </Link>
        </div>
        <div>
          <Link to="./nextpill">
            <button className="symptom">
              <h3>Je suis bloqué</h3>
            </button>
          </Link>
        </div>
        <div>
          <Link to="./nextpill">
            <button className="symptom">
              <h3>perte de l'équilibre</h3>
            </button>
          </Link>
        </div>
        <div>
          <Link to="./nextpill">
            <button className="symptom">
              <h3>crampes</h3>
            </button>
          </Link>
        </div>
        <div>
          <Link to="./nextpill">
            <button className="symptom">
              <h3>je respire mal</h3>
            </button>
          </Link>
        </div>
        <div>
          <Link to="./nextpill">
            <button className="symptom">
              <h3>hallucinations visuelles</h3>
            </button>
          </Link>
        </div>
        <div>
          <Link to="./nextpill">
            <button className="symptom">
              <h3>dépression</h3>
            </button>
          </Link>
        </div>
        <div>
          <Link to="./nextpill">
            <button className="symptom">
              <h3>trouble du sommeil</h3>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default symptom;
