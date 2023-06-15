import React from 'react'
import "./Expense.css"

const Expense = ({id,description,amount}) => {
  return (
    <li className='expense'>
    <div className='exp-desc'>{description}</div>
    <div className='exp-amt'>${amount}</div>
    <button>X</button>
    </li>
  )
}

export default Expense