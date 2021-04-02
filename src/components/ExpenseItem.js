import React,{useContext} from 'react'
import {MdDeleteForever} from 'react-icons/md'
import { AppContext } from '../components/Context/AppContext'

const ExpenseItem = (props) => {
    const {dispatch} = useContext(AppContext)

    const handleDeleteExpense = () =>{
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id
        });
    }


    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {props.name}
            <span className='badge badge-primary badge-pill mr-3'>
                shs.{props.cost}
            </span>
            <MdDeleteForever size='1.5em' onClick={handleDeleteExpense}/>
        </li>
    )
}

export default ExpenseItem
