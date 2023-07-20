import React from "react";
import store from "../store/store";
import { observer } from "mobx-react";

function ListTable() {
  const tableColumns: string[] = [
    "Title",
    "Amount(PLN)",
    "Amount(EUR)",
    "Options",
  ];

  const handleDelete = (id: number) => {
    store.removeListElement(id);
  };

  return (
    <table className="table">
      <thead className={"tableHeader"}>
        <tr>
          {tableColumns.map((column) => (
            <th className={"tableHeader-cell"}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {store.list.map((expense) => (
          <tr className={"tableRow"}>
            <td className={"tableRow-cell"}>{expense.title}</td>
            <td className={"tableRow-cell"}>{expense.amount}</td>
            <td className={"tableRow-cell"}>
              {(expense.amount / store.conversionRate).toFixed(2)}
            </td>
            <td className={"tableRow-cell tableRow-cell--delete"}>
              <span onClick={() => handleDelete(expense.id)}>{"Delete"}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default observer(ListTable);
