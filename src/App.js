import './App.css';
import { AddTransaction } from './Components/AddTransaction';
import { Balance } from './Components/Balance';
import { Header } from './Components/Header';
import { IncomeExpense } from './Components/IncomeExpense';
import { TransactionList } from './Components/TransactionList';
import { GlobalProvider } from './Context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header></Header>
      <div className='container'>
      <Balance></Balance>
      <IncomeExpense></IncomeExpense>
      <TransactionList></TransactionList>
      <AddTransaction></AddTransaction>
      </div>
    </GlobalProvider>
  );
}

export default App;
