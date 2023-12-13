import { Dispatch, SetStateAction } from "react";

type CellProps = {
    id:number;
     go:string;
     setGo:Dispatch<SetStateAction<string>>
    cells: string[];
    setCells: Dispatch<SetStateAction<string[]>>;
    cell: string;
    winMsg:string 

}
const Cell = ({ go, setGo, id, cells, setCells,cell ,winMsg}: CellProps) => {
    const handleClick = (e) => {
        if(winMsg){
            return ;
        }
        if (!cells[id]) {
            if (go == "circle") {
                handleCellChange("circle");
                setGo("cross");
            } else if (go == "cross") {
                handleCellChange("cross");
                setGo("circle");
            }
        }
    }
    const handleCellChange = (cellTochange: string) => {
        let copyCells = [...cells];
        copyCells[id] = cellTochange;
        setCells(copyCells);
    }



    return (
        <div className="square" onClick = {handleClick} >
            <div className={cell}>{cell ?(cell=='circle'?'O' :'X'):'' }</div>
        </div>



    )

}

export default Cell;