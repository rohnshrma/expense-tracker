import React,{useState} from 'react'
import CreateExpense from './Components/CreateExpense'
import Expense from './Components/Expense'

const App = () => {
  const [allExpense , setAllExpenses]  = useState([])


  const addExpenseHandler = (expense_data)=>{
    setAllExpenses((prevValues)=>{
      return [expense_data , ...prevValues]
    })
  }


  const expense_html = allExpense.map((expense,index)=>{
    return <Expense key={index} id={index} description={expense.expense_description} amount={expense.expense_amount}/>
  })

  return (
    <div className='App'>
        <CreateExpense onAdd={addExpenseHandler}/>
        <main>
          <ul>
            {allExpense.length === 0 && <li className='expense'>No Expense Found</li>}
            {allExpense.length !== 0 && expense_html}
          </ul>
        </main>
    </div>
  )
}

export default App