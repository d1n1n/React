import React from 'react';
import { Button } from 'antd';
import {useContext} from "react";
import { CounterContext } from '../context/counter-reducer';
export default function SportEvent() {
  const {increment,decrement} = useContext(CounterContext);
  return (
    <>
      <div style={{ fontSize: '20px' }}>
        <p>
          <strong>Name:</strong> Premier League: Manchester United vs Liverpool<br />
          <strong>Date:</strong> 2024-05-01 <br />
          <strong>Location:</strong> Old Trafford, Manchester <br />
          <Button onClick={increment} type="primary">Add To Favorite</Button>
          <Button onClick={decrement} style={{ marginLeft: '10px' }}>Remove From Favorite</Button>
        </p>
        <p>
          <strong>Name:</strong> La Liga: Barcelona vs Real Madrid<br />
          <strong>Date:</strong> 2024-05-10 <br />
          <strong>Location:</strong> Camp Nou, Barcelona <br />
          <Button onClick={increment} type="primary">Add To Favorite</Button>
          <Button onClick={decrement} style={{ marginLeft: '10px' }}>Remove From Favorite</Button>
        </p>
        <p>
          <strong>Name:</strong> Serie A: Juventus vs AC Milan<br />
          <strong>Date:</strong> 2024-05-20 <br />
          <strong>Location:</strong> Allianz Stadium, Turin <br />
          <Button onClick={increment} type="primary">Add To Favorite</Button>
          <Button onClick={decrement} style={{ marginLeft: '10px' }}>Remove From Favorite</Button>
        </p>
        <p>
          <strong>Name:</strong> Bundesliga: Bayern Munich vs Borussia Dortmund<br />
          <strong>Date:</strong> 2024-06-05 <br />
          <strong>Location:</strong> Allianz Arena, Munich <br />
          <Button onClick={increment} type="primary">Add To Favorite</Button>
          <Button onClick={decrement} style={{ marginLeft: '10px' }}>Remove From Favorite</Button>
        </p>
        <p>
          <strong>Name:</strong> Premier League: Chelsea vs Manchester City<br />
          <strong>Date:</strong> 2024-06-15 <br />
          <strong>Location:</strong> Stamford Bridge, London <br />
          <Button onClick={increment} type="primary">Add To Favorite</Button>
          <Button onClick={decrement} style={{ marginLeft: '10px' }}>Remove From Favorite</Button>
        </p>
        <p>
          <strong>Name:</strong> La Liga: Atletico Madrid vs Sevilla<br />
          <strong>Date:</strong> 2024-06-25 <br />
          <strong>Location:</strong> Wanda Metropolitano, Madrid <br />
          <Button onClick={increment} type="primary">Add To Favorite</Button>
          <Button onClick={decrement} style={{ marginLeft: '10px' }}>Remove From Favorite</Button>
        </p>
      </div>
    </>
  );
}
