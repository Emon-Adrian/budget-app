import React, {useContext} from 'react'
import ExpenseItem from './ExpenseItem'
import {AppContext} from '../components/Context/AppContext'

const Expenselist = () => {
    const {expenses} = useContext(AppContext);

    /*const expenses = [
        {id:1, name: 'Shopping', cost: 120000},
        {id:2, name: 'Holiday', cost: 500000},
        {id:3, name: 'Transportation', cost: 200000},
        {id:4, name: 'Fuel', cost: 150000},
        {id:5, name: 'Child Care', cost: 350000},
    ]*/

    return (
        <ul className='list-group'>
           {expenses.map((expense)=>(
               <ExpenseItem
                 id={expense.id}
                 name={expense.name}
                 cost={expense.cost}
               />
           ))}     
        </ul>
    )
}

export default Expenselist
