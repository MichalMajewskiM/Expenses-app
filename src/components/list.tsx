import React from "react";
import ListHeader from "./listHeader";
import ListNavigation from "./listNavigation";
import ListTable from "./listTable";
import ListFooter from "./listFooter";

function List(): JSX.Element {
  return (
    <div className="listComponent">
      <ListHeader />
      <ListNavigation />
      <ListTable />
      <ListFooter />
    </div>
  );
}

export default List;
