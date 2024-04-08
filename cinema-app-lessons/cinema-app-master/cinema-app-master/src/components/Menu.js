import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <>
        <h2 className="Menu">Меню</h2>
        <nav>   
            <Link to="/about">About</Link>
            <Link to="/home">home</Link>
            <Link to="/privacy">privacy</Link>
            <Link to="/notFound">notFound</Link>
            
        </nav>
    


        </>
    )
}