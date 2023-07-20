import React from "react";
import store from "../store/store";
import { observer } from "mobx-react";

function ListFooter() {
  const sumNumber: number = store.list.length
    ? store.list.map((el) => el.amount).reduce((a, b) => a + b)
    : 0;

  return (
    <div>
      <p>{`Sum: ${sumNumber.toFixed(2)}PLN (${(
        sumNumber / store.conversionRate
      ).toFixed(2)}EUR)`}</p>
    </div>
  );
}

export default observer(ListFooter);
