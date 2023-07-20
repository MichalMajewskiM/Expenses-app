import React from "react";
import { observer } from "mobx-react";
import store from "../store/store";

function ListNavigation() {
  const regex = new RegExp(/^(\d+(?:.\d{0,2})?)$/);

  const handleAddButtonClick = () => {
    if (store.expense.title.length < 5) {
      alert(
        "Expense title is too Short, it need to have at least 5 characters."
      );
    } else {
      store.addListElement();
    }
  };

  const handleAmountChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (regex.test(e.currentTarget.value)) {
      store.expense.amount = parseFloat(e.currentTarget.value);
    }
  };

  return (
    <table>
      <tr>
        <td>{"Title of transaction"}</td>
        <td>
          <input
            value={store.expense.title}
            onChange={(e) => (store.expense.title = e.target.value)}
          />
        </td>
        <td></td>
      </tr>
      <tr>
        <td>{"Amount (in PLN)"}</td>
        <td>
          <input
            type={"number"}
            value={store.expense.amount}
            step={0.01}
            onChange={handleAmountChange}
          />
        </td>
        <button onClick={handleAddButtonClick}>Add</button>
      </tr>
    </table>
  );
}

export default observer(ListNavigation);
