import React from 'react';
import PropTypes from 'prop-types';
import {
  Pagination,
  PaginationItem,
  PaginationLink
} from 'reactstrap';

export default function RestaurantsPagination(props) {
  const {
    currentPage,
    perPage,
    totalEntries,
    pageChangeCallback,
  } = props;

  const pages = []
  const pageMax = Math.ceil(totalEntries/perPage);
  for (let i = 1; i <= pageMax; ++i) {
    pages.push(
      <PaginationItem
        key={i}
        active={i === currentPage}
      >
        <PaginationLink
          style={i === currentPage ? { backgroundColor: '#dc3545', borderColor: '#dc3545' } : {}}
          onClick={() => {
            pageChangeCallback(i);
          }}
        >
          {i}
        </PaginationLink>
      </PaginationItem>
    )
  }

  return (
    <Pagination aria-label="Restaurants page navigation">
      <PaginationItem>
        <PaginationLink
          previous
          onClick={() => {
            pageChangeCallback(currentPage - 1 || 1);
          }}
        />
      </PaginationItem>
      {pages}
      <PaginationItem>
        <PaginationLink
          next
          onClick={() => {
            pageChangeCallback(currentPage < pageMax ? currentPage + 1 : pageMax);
          }}
        />
      </PaginationItem>
    </Pagination>
  );
}

RestaurantsPagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  totalEntries: PropTypes.number.isRequired,  
  pageChangeCallback: PropTypes.func.isRequired,
};
