import React from "react";
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
    <table class="transaction-history"style={{
      margin:2,
      padding: 5,
      border: 2,
      backgroundColor: "lightgray",
      color: "black",
    }}>
  <thead>
    <tr style={{
        margin: 8,
        padding: 5,
        border: 2,
        backgroundColor: "gray",
        color: "black",
      }}>
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