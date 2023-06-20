import React, { useState, useEffect } from 'react'
import CreateExpense from './Components/CreateExpense'
import Expense from './Components/Expense'

const App = () => {
  const [allExpense, setAllExpenses] = useState([])

  // sending latest state to the db
  useEffect(() => {
    console.log("sending data using useEffect");

    const sendData = async () => {
      const response = await fetch("https://react-http-m14-default-rtdb.firebaseio.com/expenses.json", {
        method: "PUT",
        body: JSON.stringify(allExpense)
      })

      console.log(response.ok);

      const data = await response.json()
      console.log("Data Sent To DB", data);

    }

    sendData()

  }, [allExpense])

  // fetching data from db
  useEffect(() => {

    console.log("fetching data from db");

    const fetchExpenses = async () => {
      try {
        const response = await fetch("https://react-http-m14-default-rtdb.firebaseio.com/expenses.json")
        const data = await response.json()
        if (data) {
          setAllExpenses(data)
        }
      }
      catch (error) {
        console.log(error);
      }
    }
    fetchExpenses()

  }, [])



  const addExpenseHandler = (expense_data) => {
    setAllExpenses((prevValues) => {
      return [expense_data, ...prevValues]
    })
  }

  const deleteHandler = (id) => {

    console.log("deleting expense");

    setAllExpenses((prevValues) => {
      return prevValues.filter((expense,index) => {
        return index !== id
      })
    })
  }

  const expense_html = allExpense.map((expense, index) => {
    return <Expense onDelete={
      deleteHandler
    } key={index} id={index} description={expense.expense_description} amount={expense.expense_amount} />
  })

  return (
    <div className='App'>
      <CreateExpense onAdd={addExpenseHandler} />
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