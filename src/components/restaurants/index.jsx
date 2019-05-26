import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import Search from './Search';
import { fetchRestaurants } from '../../utils/api';
import Listing from './Listing';
import RestaurantsPagination from './Pagination';

export default class Restaurants extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchStr: '',
      currentPage: 1,
      perPage: 0,
      restaurants: [],
      totalEntries: 0,
      error: null,
    };
  }

  pageChange = (currentPage) => {
    return new Promise((resolve) => {
      this.setState({
        currentPage,
      }, () => {
        resolve();
      })
    });
  }

  sendSearch = () => {
    const { searchStr, currentPage } = this.state;
    return fetchRestaurants({
      city: searchStr,
      page: currentPage,
    }).then((result) => {
      const {
        per_page,
        restaurants,
        total_entries,
      } = result;
      this.setState({
        perPage: per_page,
        totalEntries: total_entries,
        restaurants,
      });
    }).catch((err) => {
      console.log('--- err:', err);
    });
  }

  render() {
    const {
      searchStr,
      restaurants,
      currentPage,
      perPage,
      totalEntries,
    } = this.state;
    return (
      <Container>
        <Row>
          <Col>
            <h2>Restaurants listing</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Search
              searchStrCallback={(searchStr) => {
                this.setState({ searchStr });
              }}
              searchStr={searchStr}
              sendSearch={() => {
                this.pageChange(1).then(() => {
                  this.sendSearch();
                });
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Listing restaurants={restaurants} />
          </Col>
        </Row>
        <Row>
          <Col>
            <RestaurantsPagination
              currentPage={currentPage}
              totalEntries={totalEntries}
              perPage={perPage}
              pageChangeCallback={(page) => {
                this.pageChange(page).then(() => {
                  this.sendSearch();
                });
              }}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}
