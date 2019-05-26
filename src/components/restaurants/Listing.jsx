import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';

export default function Listing(props) {
  const { restaurants } = props;

  return (
    <React.Fragment>
      {restaurants.length === 0 && <h3>No restaurants available for dislplay.</h3>}
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((restaurant) => {
            return (
              <tr key={restaurant.id}>
                <td>{restaurant.name}</td>
                <td>{restaurant.address}</td>
                <td>{restaurant.price}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </React.Fragment>
  );
}

Listing.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    address: PropTypes.string,
    price: PropTypes.number,
  })),
}

Listing.defaultProps = {
  restaurants: [],
}
