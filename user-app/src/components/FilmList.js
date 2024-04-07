import FilmCard from "./FilmCard";

export function FilmList({ films }) {
  return (
    <>
      <h2>My favorite films</h2>
      {films.map((u) => (
        <FilmCard key ={u.id} {...u} />
      ))}
    </>
  );
}
