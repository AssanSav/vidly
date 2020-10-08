import React, { Component } from "react";
import Like from "./commons/like";
import Table from "./commons/table";


const MoviesTable = ({ movies, onSort, sortColumn, onLike, onDelete }) => {
  const columns = [
    { path: "title", order: "Title" },
    { path: "genre.name", order: "Genre" },
    { path: "numberInStock", order: "Stock" },
    { path: "dailyRentalRate", order: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like liked={movie.liked} onClick={() => onLike(movie)} />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          onClick={() => onDelete(movie)}
          className="btn btn-danger"
        >
          Delete
        </button>
      ),
    },
  ];
  
  return (
      <>
        <Table
          data={movies}
          onSort={onSort}
          columns={columns}
          sortColumn={sortColumn}
        />
      </>
    );
}
 
export default MoviesTable;

