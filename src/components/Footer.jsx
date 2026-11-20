import { useState } from "react";
import { INFO } from "../data/equipo";
import "./Footer.css";

function Footer() {
  const [logoOk, setLogoOk] = useState(true);

  return (
    <footer className="site-footer">
      {logoOk && (
        <img
          src="/escudo-cucei.png"
          alt="Escudo de CUCEI"
          className="footer-logo"
          onError={() => setLogoOk(false)}
        />
      )}
      <div className="footer-text">
        <p><strong>{INFO.integrantes.length > 1 ? "Integrantes" : "Integrante"}:</strong> {INFO.integrantes.join(", ")}</p>
        <p><strong>Profesor:</strong> {INFO.profesor}</p>
        <p><strong>Materia:</strong> {INFO.materia}</p>
        <p><strong>Calendario escolar:</strong> {INFO.calendario}</p>
        <p><strong>Mes y año:</strong> {INFO.mesAnio}</p>
        <p><strong>Institución:</strong> {INFO.institucion}</p>
      </div>
    </footer>
  );
}

export default Footer;
