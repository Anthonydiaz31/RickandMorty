import React from "react";
import ReactPaginate from "react-paginate";

function Footer({ pageCount, page, setPage }) {
  
  return (
    <div className="bottom">
      <ReactPaginate
        pageClassName="page-item"
        pageLinkClassName="page-link"
        pageCount={pageCount ? pageCount: 1}
        nextLabel="Next"
        previousLabel="Prev"
        previousClassName="Button-Style"
        nextClassName="Button-Style"
        activeClassName="active"
        onPageChange={(data) => {
          setPage(data.selected + 1);
        }}
      />
    </div>
  );
}

export default Footer;
