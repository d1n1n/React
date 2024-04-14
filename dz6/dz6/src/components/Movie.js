import { Button} from 'antd';
import {useContext} from "react";
import { CounterContext } from '../context/counter-reducer';
export default function Movie() {
    const {increment,decrement} = useContext(CounterContext);
    return (
    <>
        <div style={{fontSize:'20px'}}>
          <p>
            <strong>Name:</strong> The Shawshank Redemption<br/>
            <strong>Author:</strong> Frank Darabont <br />
            <strong>Year:</strong> 1994 <br />
            <strong>Genre:</strong> Drama<br/>
            <Button onClick={increment} type="primary">Add To Favorite</Button>
          <Button onClick={decrement} style={{ marginLeft: '10px' }}>Remove From Favorite</Button>       </p>
          <p>
            <strong>Name:</strong> The Godfather <br />
            <strong>Author:</strong> Francis Ford Coppola <br />
            <strong>Year:</strong> 1972 <br />
            <strong>Genre:</strong> Crime, Drama<br/>
            <Button onClick={increment} type="primary">Add To Favorite</Button>
          <Button onClick={decrement} style={{ marginLeft: '10px' }}>Remove From Favorite</Button>
          </p>
          <p>
            <strong>Name:</strong> The Dark Knight <br />
            <strong>Author:</strong> Christopher Nolan <br />
            <strong>Year:</strong> 2008 <br />
            <strong>Genre:</strong> Action, Crime, Drama<br/>
            <Button onClick={increment} type="primary">Add To Favorite</Button>
          <Button onClick={decrement} style={{ marginLeft: '10px' }}>Remove From Favorite</Button>
          </p>
          <p>
            <strong>Name:</strong> Pulp Fiction <br />
            <strong>Author:</strong> Quentin Tarantino <br />
            <strong>Year:</strong> 1994 <br />
            <strong>Genre:</strong> Crime, Drama<br/>
            <Button onClick={increment} type="primary">Add To Favorite</Button>
          <Button onClick={decrement} style={{ marginLeft: '10px' }}>Remove From Favorite</Button>     </p>
          <p>
            <strong>Name:</strong> Forrest Gump <br />
            <strong>Author:</strong> Robert Zemeckis <br />
            <strong>Year:</strong> 1994 <br />
            <strong>Genre:</strong> Drama, Romance<br/>
            <Button onClick={increment} type="primary">Add To Favorite</Button>
          <Button onClick={decrement} style={{ marginLeft: '10px' }}>Remove From Favorite</Button>    </p>
          <p>
            <strong>Name:</strong> The Matrix <br />
            <strong>Author:</strong> The Wachowskis <br />
            <strong>Year:</strong> 1999 <br />
            <strong>Genre:</strong> Action, Sci-Fi<br/>
            <Button onClick={increment} type="primary">Add To Favorite</Button>
          <Button onClick={decrement} style={{ marginLeft: '10px' }}>Remove From Favorite</Button>   </p>
          <p>
            <strong>Name:</strong> Star Wars: Episode IV - A New Hope <br />
            <strong>Author:</strong> George Lucas <br />
            <strong>Year:</strong> 1977 <br />
            <strong>Genre:</strong> Action, Adventure, Fantasy<br/>
            <Button onClick={increment} type="primary">Add To Favorite</Button>
          <Button onClick={decrement} style={{ marginLeft: '10px' }}>Remove From Favorite</Button>    </p>
        </div>
    </>
    );
}
