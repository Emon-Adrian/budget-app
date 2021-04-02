import {createContext, useReducer} from 'react';

const AppReducer = (state, action) =>{
    switch (action.type){
        case 'ADD_EXPENSE':
            return{
                ...state,
                expenses: [...state.expenses, action.payload]
            };
        case 'DELETE_EXPENSE':
            return{
                ...state,
                expenses: state.expenses.filter(
                    (expense) => expense.id !== action.payload
                )
            }    
        default:
            return state;
    }
}

const initialState = {
    budget: 2000000,
    expenses: [
        {id: 14, name:'Gaming', cost: 10000},
        {id: 16, name:'shopping', cost: 16000},
        {id: 19, name:'Bonnie ', cost: 600},
    ]
} 

export const AppContext = createContext();

export const AppProvider = (props) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState)

    return (<AppContext.Provider value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
    }}>
        {props.children}
    </AppContext.Provider>)
};
