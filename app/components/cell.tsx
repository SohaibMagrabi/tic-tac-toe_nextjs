import { Dispatch, SetStateAction } from "react";

type CellProps = {
    id:number;
     go:string;
     setGo:Dispatch<SetStateAction<string>>
     cells:string[];
     setCells:Dispatch<SetStateAction<string[]>>;
}
 const Cell = ({go, setGo, id,cells, setCells}:CellProps) => {
    const handleClick = (e)=>{
        console.log(id)

    }
    return (
        <div className="square" onClick = {handleClick} ></div>



    )

}

export default Cell;