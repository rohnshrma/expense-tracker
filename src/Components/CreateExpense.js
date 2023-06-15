import React, { useState } from 'react'
import "./CreateExpense.css"
const CreateExpense = ({ onAdd }) => {

    const [expense_data, setExpenseData] = useState({
        expense_description: "",
        expense_amount: ""
    })


    const handleDescChange = event => {
        const descriptionInput = event.target.value;

        setExpenseData((prevValues) => {
            return {
                expense_description: descriptionInput,
                expense_amount: prevValues.expense_amount
            }
        })
    }
    const handleAmtChange = event => {
        const amountInput = event.target.value;

        setExpenseData((prevValues) => {
            return {
                expense_description: prevValues.expense_description,
                expense_amount: amountInput
            }
        })
    }


    const submitHandler = (e) => {
        e.preventDefault()
        onAdd(expense_data)
    }
    console.log(expense_data);

    return (
        <form onSubmit={submitHandler} className="create-expense">
            <div className='form-group'>
                <input onChange={handleDescChange} className="form-control" type="text" name="expense-desc" placeholder='Enter Expense' />
            </div>
            <div className='form-group'>
                <input onChange={handleAmtChange} className="form-control" type="text" name="expense-amt" placeholder='Enter Expense Amount' />
            </div>
            <button className="btn-submit">Add Expense</button>
        </form>
    )
}

export default CreateExpense