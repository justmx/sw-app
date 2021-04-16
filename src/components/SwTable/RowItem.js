import React from "react";

const RowItem = ({ person, onClick }) => {
  if (!person) return null;
  const { name, height, mass } = person;

  return (
    <div className="row" onClick={onClick}>
      <div className="cell">{name}</div>
      <div className="cell">{height}</div>
      <div className="cell">{mass}</div>
    </div>
  );
};

export default RowItem;
