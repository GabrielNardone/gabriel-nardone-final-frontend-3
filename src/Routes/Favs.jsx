import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";


export const Favs = () => {

  const { state } = useContext(ContextGlobal)


  return (
    <div className="favs">
      <h2>Dentists Favorites</h2>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {
          state.favs.length < 1
            ? <h1>There is no favs</h1>
            : state.favs.map(elem => <Card key={elem.id} props={elem} isFav={true}/>)
        }
      </div>
    </div>
  );
};
