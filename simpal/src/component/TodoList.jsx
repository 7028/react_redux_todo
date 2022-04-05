import React, { useState } from 'react'
import { FcPlus, FcEmptyTrash } from "react-icons/fc";


const TodoList = () => {
    const [inputData, setinputData] = useState("");
    const [items, setitems] = useState([]);
    const [tempArray, settempArray] = useState([]);

    // add item in todo list
    const addItem = () => {
        if (!inputData) {
            alert("pls fill the data");
        } else {
            setitems([...items, inputData]);
            settempArray([...tempArray, inputData]);
            setinputData('');
        }

    }


    // delete item in todo list
    // 
    const deleteIteam = (ind) => {
        console.log("ind", ind);
        const newDeleteList = tempArray.filter((e, i) => {
            return i !== ind
        })
        console.log("newDeleteList", newDeleteList);
        setitems(newDeleteList)

    }

    // remove all data
    const removeAll = () => {
        setitems([]);
    }

    // check function click

  

    return (
        <>
            <div className="main">
                <div className="todolist">
                    <input type="text" name="" id=""
                        value={inputData}
                        onChange={(e) => setinputData(e.target.value)}

                    />
                    <FcPlus onClick={addItem} />
                </div>
                {
                    items.map((ele, ind) => {
                        return (
                            <div className='ShowadditemList' key={ind}>
                                <h3>{ele}</h3>
                                <button type='delete' onClick={() => deleteIteam(ind)}><FcEmptyTrash/></button>
                                <input type="checkbox" ></input>
                            </div>
                        )
                    })
                }

                <div className="button-div">
                    <button onClick={removeAll}>Remove All</button>
                    <button>check</button>
                    <button>unCheck</button>
                </div>
            </div>
        </>
    )
}

export default TodoList
