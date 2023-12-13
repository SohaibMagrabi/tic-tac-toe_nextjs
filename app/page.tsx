"use client"
import { useEffect, useState } from 'react';
import Cell from './components/cell'
const winCombo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]
export default function Home() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""])
  const [go, setGo] = useState("circle");
  const [winMsg, setWinMsg] = useState("");

  useEffect(() => {
    winCombo.forEach((e) => {
      const circleWin = e.every((e2) => cells[e2] === "circle")
      const crossWin = e.every((e2) => cells[e2] === "cross")
      if (circleWin) {
        setWinMsg('circle win!')

      } else if (crossWin) {
        setWinMsg('cross win!')

      }
    })
  },[cells,winMsg])/* useEffect depend on cells and winMsg if not depend it works OK */
 useEffect(()=>{
 if(cells.every((e)=>  e !== '') && !winMsg){
  setWinMsg('draw')
 }
 })
  return (
    <div className="container" >
      <div className="gameboard">
        {cells.map((e, i) => (
          <Cell
            cell={e}
            id={i}
            go={go}
            setGo={setGo}
            key={i}
            cells={cells}
            setCells={setCells}
            winMsg={winMsg}          

          />
        ))}

      </div>
      <div>{winMsg}</div>
      {!winMsg && <div>{`it is now ${go} turn`}</div>}
    </div >
  );
}
