import { INFO } from "../data/equipo";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <img
        src="/escudo-cucei.png"
        alt="Escudo de CUCEI"
        className="footer-logo"
        onError={(e) => (e.currentTarget.style.display = "none")}
      />
      <div className="footer-text">
        <p><strong>Integrantes:</strong> {INFO.integrantes.join(", ")}</p>
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
