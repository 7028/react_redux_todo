import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { addTodo, editItem, deleteTodo, removeTodo, updateItem } from '../actions/index'


const Todo = () => {
    const [inpData, setinpData] = useState('');
    const [togglesubmit, settogglesubmit] = useState(true);
    const list = useSelector((state) => state.todoReducers.list)
    const temStr = useSelector((state) => state.todoReducers.temStr)

    const dispatch = useDispatch();
    console.log("list", list);

    const updateHandler  = () => {
        // console.log("npData", inpData);
        // return false

        dispatch(updateItem(temStr.id, inpData))
        setinpData('')
    }
    useEffect(() => {
        setinpData(temStr.data)
    }, [temStr])
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='box-main'>
                            <div className='inp-btn'>
                                <h1 className='text-center'>Todo List</h1>
                                <input type="text" placeholder='Enter Items'
                                    value={inpData}
                                    onChange={(event) => setinpData(event.target.value)}
                                />


                                {
                                    temStr === "" ? (
                                        <>
                                            <AddCircleOutlineRoundedIcon className="setcolor" fontSize='large' onClick={() => dispatch(addTodo(inpData), setinpData(''))} />
                                        </>
                                    ) : (
                                        <>
                                            <EditIcon className='setcolor2' onClick={updateHandler} />
                                        </>
                                    )
                                }

                            </div>
                        </div>
                        <div className='show-item'>
                            <div className='show'>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <th>ITEMS</th>
                                            <th>ACTIONS</th>
                                        </tr>
                                        {
                                            list && list.map((elem) => {
                                                return (
                                                    <tr key={elem.id}>
                                                        <td>{elem.data}</td>
                                                        <td>
                                                            <EditIcon className='setcolor2' onClick={() => dispatch(editItem(elem.id))} /> Edit

                                                            <DeleteIcon className='setcolor2' onClick={()=> dispatch(deleteTodo(elem.id))}/> Delete

                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}


export default Todo