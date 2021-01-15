import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "./table";
import auth from "../../services/authService";

class ThreatsTable extends Component {
  columns = [
    {
      path: "Title",
      label: "Title",
      content: threat => (
        // `/threats/${threat._id}`  is template literal
        <Link to={`/threats/${threat.ID}`}>{threat.Title}</Link>
      )
    },
    { path: "Description", label: "Description" },
    { path: "PageCount", label: "PageCount" },
    { path: "PublishDate", label: "PublishDate" }
  ];

  deleteColumn = {
    key: "delete",
    content: threat => (
      <button
        onClick={() => this.props.onDelete(threat)}
        className="btn btn-danger btn-sm"
      >
        Delete
      </button>
    )
  };
  constructor() {
    super();
    const user = auth.getCurrentUser();
    if (user && user.isAdmin) this.columns.push(this.deleteColumn);
  }

  render() {
    const { threats, onSort, sortColumn } = this.props;
    return (
      <Table
        columns={this.columns}
        sortColumn={sortColumn}
        onSort={onSort}
        data={threats}
      />
    );
  }
}

export default ThreatsTable;
