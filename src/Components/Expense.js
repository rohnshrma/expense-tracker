import React from 'react'
import "./Expense.css"

const Expense = ({ id, description, amount, onDelete }) => {

  const clickHandler = () => {
    onDelete(id)
  }

  return (
    <li className='expense'>
      <div className='exp-desc'>{description}</div>
      <div className='exp-amt'>${amount}</div>
      <button onClick={clickHandler}>X</button>
    </li>
  )
}

export default Expense