import React from "react";

const DetailSection = ({ person }) => {
  if (!person) return null;
  const { name, height, birth_year, gender, allfilms } = person;

  return (
    <div className="swap-detail-container">
      <h2>Detail section</h2>
      <div className="swap-detail">
        <div className="swap-detail-info">
          Name: <span>{name}</span>
        </div>
        <div className="swap-detail-info">
          Height: <span>{height}</span>
        </div>
        <div className="swap-detail-info">
          Birth year: <span>{birth_year}</span>
        </div>
        <div className="swap-detail-info">
          Gender: <span>{gender}</span>
        </div>
        <div className="swap-detail-info">
          List of films:
          {allfilms.map((film, i) => {
            return <li key={i}>{film.title}</li>;
          })}
        </div>
      </div>
    </div>
  );
};

export default DetailSection;
