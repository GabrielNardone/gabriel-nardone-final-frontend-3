import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";


const Card = ({ props, isFav = false }) => {

  const { theme, addFav, removeFav } = useContext(ContextGlobal)

  return (
    <div className="card" style={{ boxShadow: theme.cardShadow, backgroundColor: theme.cardBg }}>
      {/* En cada card deberan mostrar en name - username y el id */}
      <img src="/images/doctor.jpg" alt="" className="doctorImg"/>
      <h3>{props.name}</h3>
      <h4>{props.username}</h4>
      <p>ID: {props.id}</p>

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      <Link to={"/dentist/" + props.id} style={{ marginBottom: 10, color: "#30A2FF" }}>See detail</Link>

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}


      {
        !isFav
          ? <button
            onClick={() => addFav(props)}
            className="favButton"
            style={{backgroundColor: theme.addBtnFavBg}}
          >
            Add to favorites
          </button>

          : <button
            className="deleteBtn"
            style={{color: theme.font}}
            onClick={() => removeFav(props.id)}
          >
            Delete
          </button>
      }

    </div>
  );
};

export default Card;
