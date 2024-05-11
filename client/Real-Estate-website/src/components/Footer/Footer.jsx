import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />
          <span className="secondaryText">
          Nuestra visión es hacer que todas las personas <br />
          el mejor lugar para vivir para ellos.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Informacion</span>
          <span className="secondaryText">145 New York, FL 5467, USA</span>
          <div className="flexCenter f-menu">
            <span>Propiedad</span>
            <span>Servicios</span>
            <span>Producto</span>
            <span>Sobre nosotros</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
