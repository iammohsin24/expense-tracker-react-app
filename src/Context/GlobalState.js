import { createContext, useReducer } from "react"
import { appReducer } from './AppReducer';

// Initial State
const initialState = {
    transactions: []
}

// Create Context 
export const GlobalContext = createContext(initialState);

// Provider Component 
export const GlobalProvider = ({ children })=> {
    const [state, dispatch] = useReducer(appReducer, initialState);

    // Actions 
    function deleteTransactions(id) {
        dispatch({
            type: 'Delete_Transaction',
            payload: id
        });
    }
    function addTransactions(transaction) {
        dispatch({
            type: 'Add_Transaction',
            payload: transaction
        });
    }
    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransactions,
            addTransactions
        }}>
            {children}
        </GlobalContext.Provider>
    )
}