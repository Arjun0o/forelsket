import React from "react";

const Pagination = ({ page, setPage }) => {
  const pageNumbers = [];

  if (page > 10) {
    pageNumbers.push(
      <a href="!#" onClick={() => setPage(`${page}` - 1)}>
        &#x3c;
      </a>
    );
  }

  for (let i = 1; i <= Math.ceil(5000 / 10); i++) {
    pageNumbers.push(
      <a onClick={() => setPage(i)} href="!#">
        {i}
      </a>
    );
  }
  if (page) return <div>{pageNumbers}</div>;
};

export default Pagination;
