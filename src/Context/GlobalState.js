import { createContext, useReducer } from "react"
import { AppReducer } from './AppReducer';

// Initial State
const initialState = {
    transactions: [
        { id:1, text: 'Flower', amount: -10},
        { id:2, text: 'salary', amount: 30},
        { id:3, text: 'bitch', amount: -40},
        { id:4, text: 'pog', amount: 100}
    ]
}

// Create Context 
export const GlobalContext = createContext(initialState);

// Provider Component 
export const GlobalProvider = ({ children })=> {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return(
        <GlobalProvider value={{
            transactions: state.transactions
        }}>
            {children}
        </GlobalProvider>
    )
}