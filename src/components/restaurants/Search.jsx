import React from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  FormGroup,
  Input,
  Button,
} from 'reactstrap';

export default function Search(props) {
  const {
    searchStrCallback,
    searchStr,
    sendSearch,
  } = props;
  return (
    <Form
      onSubmit={(evt) => {
        evt.preventDefault();
        sendSearch();
      }}
    >
      <FormGroup>
        <label htmlFor="search-input">Input a city name to search a restaurant:</label>
        <Input
          type="text"
          placeholder="City Name"
          id="search-input"
          value={searchStr}
          onChange={(evt) => {
            searchStrCallback(evt.target.value);
          }}
        />
      </FormGroup>
      <FormGroup>
        <Button color="danger" type="submit">
          Search
        </Button>
      </FormGroup>
    </Form>
  );
}

Search.propTypes = {
  searchStrCallback: PropTypes.func.isRequired,
  searchStr: PropTypes.string.isRequired,
};
