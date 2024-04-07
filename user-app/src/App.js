import './App.css';


import { FilmList } from "./components/FilmList";
import FilmCard from "./components/FilmCard";
const FILMS = [
  {id:1, name: "Venom", year: "2018", publisher: "Sony Pictures" },
  {id:2, name: "Spectre", year: "2021", publisher: "Warner Bros." },
  {id:3, name: "Interstellar", year: "2019", publisher: "Universal Pictures" }
];
export default function App() {


  return (
    <div className="App">

    <FilmList films = {FILMS} />

    </div>
  );
}



