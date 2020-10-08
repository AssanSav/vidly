import React from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

const Table = ({onSort, sortColumn, columns, data}) => {
  
  return (
    <table className="table">
      <TableHeader
        onSort={onSort}
        sortColumn={sortColumn}
        columns={columns}
      />
      <TableBody columns={columns} data={data} />
    </table>
  );
};

export default Table;
