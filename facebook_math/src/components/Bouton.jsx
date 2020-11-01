import React from "react";

const Bouton = (props) => {
  return (
    <div>
      <a href={"/"+props.id}><input type="button" value={props.name}></input></a>
    </div>
  );
};

export default Bouton;
