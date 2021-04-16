import React from "react";

const Pagination = ({ nextPage, previouPage }) => {
  return (
    <div className="pagination">
      <span className="pagination-title">Pagination</span>
      <span className="pagination-button" onClick={previouPage}>
        {"< Back"}
      </span>
      <span className="pagination-button" onClick={nextPage}>
        {"Next >"}
      </span>
    </div>
  );
};

export default Pagination;
