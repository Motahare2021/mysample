import React from "react";
import TableHeader from "./tableHeader";
import TableBoby from "./tableBody";

const Table = ({ columns, sortColumn, onSort, data }) => {
  return (
    <table className="table">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBoby columns={columns} data={data} />
    </table>
  );
};

export default Table;
