import React, { useState } from "react";
import store from "../store/store";

function ListHeader() {
  const [edit, setEdit] = useState<boolean>(false);
  const [newRate, setNewRate] = useState<number>(store.conversionRate);

    const handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
        store.conversionRate = newRate;
        setEdit(false);
        e.stopPropagation();
    }

  return (
    <div className="listHeader">
      <span className="listHeader-title">
        <h1>{"List of expenses"}</h1>
      </span>
      <span className="listHeader-rate" onClick={() => setEdit(true)}>
        1 EUR{" = "}
        {edit ? (
          <>
            <input
              type={"number"}
              step={0.001}
              onChange={(e) => setNewRate(parseFloat(e.currentTarget.value))}
            />
            <button onClick={handleClick}>OK</button>
          </>
        ) : (
          <>{store.conversionRate}</>
        )}{" "}
        PLN
      </span>
    </div>
  );
}

export default ListHeader;
