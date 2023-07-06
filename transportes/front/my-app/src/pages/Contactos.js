import React from "react";
import "./Contactos.css";
const Contactos = () => {
  return (
    <div style={{ display: "block" }}>
      <section id="contacto">
        <img src="./public/nosotros/nosotros2.jpg" alt="" />
        <h2>Contacto</h2>
        <p>Puedes ponerte en contacto con nosotros a través de...</p>

        <p>Telefono: 1123765433</p>
        <p>instagram: Transportes osaka/srl</p>
        <p>Fax:16692001010@ fax.plus</p>
      </section>
     <div style={{ display: "inLine" }}>
      <p>Quieres que te contactemos:</p>
      <label>
        Nombre: <input name="myInput" />
        Apellido: <input name="myInput" />
        Tel: <input name="myInput" />
        Email: <input name="myInput" />
      </label>
      <button>Enviar</button>
      </div>
   
    </div>
  );
};
export default Contactos;
