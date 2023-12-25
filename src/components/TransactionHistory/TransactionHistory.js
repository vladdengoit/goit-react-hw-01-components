import React from "react";
import css from "./TransactionHistory.module.css"
const TransactionHistory = ({props})=>{
  const elements = props.map(el=>
  <thead>
          <tr key={props.id}>
           <th>{el.type}</th>
           <th>{el.amount}</th>
           <th>{el.currency}</th>
          </tr>
        </thead>)

  
  return(
    
    <table className={css.transaction}>
  <thead>
    <tr className={css.title} >
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  {elements}
</table>
  )
}
export default TransactionHistory