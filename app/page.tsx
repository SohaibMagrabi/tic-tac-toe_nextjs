"use client"
import {useState} from 'react';
import Cell from './components/cell'

export default function Home() {
  const [cells, setCells] = useState(["","","","","","","","",""])
  const[go, setGo] = useState("circle");

  return (
   <div  className="container" >
     <div className="gameboard">
     {cells.map((e,i) => (
      <Cell id ={i} go={go} setGo={setGo} key={i} cells={cells} setCells={setCells}/>
     ))}
           
     </div>
    
   </div >
  );
}
