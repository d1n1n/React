import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <>
        <h2 className="Menu">Меню</h2>
        <nav>   
            <Link to="/bio">Біографія</Link>
            <Link to="/famouspic">Найвідоміша Картина</Link>
            <Link to="/gallery">Галерея</Link>
            
        </nav>
    


        </>
    )
}