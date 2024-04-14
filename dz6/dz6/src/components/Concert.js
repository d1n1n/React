import React from 'react';
import { Button } from 'antd';
import {useContext} from "react";
import { CounterContext } from '../context/counter-reducer';
export default function Concert() {
  const {increment,decrement} = useContext(CounterContext);
  return (
    <>
      <div style={{ fontSize: '20px' }}>
        <p>
          <strong>Name:</strong> Coldplay Live Concert<br />
          <strong>Date:</strong> 2024-05-01 <br />
          <strong>Location:</strong> Wembley Stadium, London <br />
          <Button type="primary">Add To Favorite</Button>
          <Button style={{ marginLeft: '10px' }}>Remove From Favorite</Button>
        </p>
        <p>
          <strong>Name:</strong> Ed Sheeran World Tour<br />
          <strong>Date:</strong> 2024-05-10 <br />
          <strong>Location:</strong> Madison Square Garden, New York <br />
<Button onClick={increment} type="primary">Add To Favorite</Button>
          <Button onClick={decrement} style={{ marginLeft: '10px' }}>Remove From Favorite</Button>
        </p>
        <p>
          <strong>Name:</strong> Jazz Night with Diana Krall<br />
          <strong>Date:</strong> 2024-05-20 <br />
          <strong>Location:</strong> Hollywood Bowl, Los Angeles <br />
          <Button onClick={increment} type="primary">Add To Favorite</Button>
          <Button onClick={decrement} style={{ marginLeft: '10px' }}>Remove From Favorite</Button>   </p>
        <p>
          <strong>Name:</strong> Pop Fest 2024<br />
          <strong>Date:</strong> 2024-06-05 <br />
          <strong>Location:</strong> O2 Arena, London <br />
          <Button onClick={increment} type="primary">Add To Favorite</Button>
          <Button onClick={decrement} style={{ marginLeft: '10px' }}>Remove From Favorite</Button>   </p>
        <p>
          <strong>Name:</strong> Classical Music Gala<br />
          <strong>Date:</strong> 2024-06-15 <br />
          <strong>Location:</strong> Vienna State Opera, Vienna <br />
          <Button onClick={increment} type="primary">Add To Favorite</Button>
          <Button onClick={decrement} style={{ marginLeft: '10px' }}>Remove From Favorite</Button>    </p>
        <p>
          <strong>Name:</strong> Rock Fest 2024<br />
          <strong>Date:</strong> 2024-06-25 <br />
          <strong>Location:</strong> Red Rocks Amphitheatre, Colorado <br />
          <Button onClick={increment} type="primary">Add To Favorite</Button>
          <Button onClick={decrement} style={{ marginLeft: '10px' }}>Remove From Favorite</Button>
        </p>
      </div>
    </>
  );
}
