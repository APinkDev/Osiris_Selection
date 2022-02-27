import React from "react";
import "./Pagination.css"

const Pagination = ({ foodsPerPage, totalFoods, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalFoods / foodsPerPage); i++) {
    pageNumbers.push(i);
  }
  // console.log("pagination: ", totalDogs, dogsPerPage)

  return (
    <nav>
      <ul className="Pagination__ul">
        {pageNumbers.map(number => (
          <li  key={number} className="Pagination__Li">
            <button onClick={() => paginate(number)} className="Pagination__Button">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;