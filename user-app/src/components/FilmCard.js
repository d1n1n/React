import React from "react";

export default function FilmCard(props) {

  const { name, year, publisher } = props;
  return (
    <div className="user-card">
      <h3>Film card</h3>
      <p>Name: {name}</p>
      <p>Year: {year}</p>
      <p>Publisher: {publisher}</p>
    </div>
  );
}
