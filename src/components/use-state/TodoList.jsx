import { useState } from "react";

const TodoList = () => {

    let [list, setList] = useState([]);
    let [item, setItem] = useState("");
    
    const AddToList = () => {
        list.push(item);
        setList([...list]);
    }

    const RemoveFromList = (index) =>{
        list.splice(index, 1);
        setList([...list])
    }

    return (
        <div>
            <input onChange={(e) => setItem(e.target.value)}/>
            <button onClick={()=>AddToList()}>Click</button>
            <table>
                <tbody>
                    {
                        list.length !== 0 ? (
                            list.map((element, index)=>{
                                return (
                                    <tr key={index.toString()}>
                                        <td>{element}</td>
                                        <td><button onClick={()=>RemoveFromList(index)}>Remove</button></td>
                                    </tr>
                                )
                            })
                        )
                        :(<tr></tr>) 
                    }
                </tbody>
            </table>
        </div>
    );
};

export default TodoList