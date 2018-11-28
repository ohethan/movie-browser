import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

export default class MovieList extends React.Component {

  render() {
    if (!this.props.movies) {
      return <Text>Begin searching for movies</Text>;
    } else if (this.props.movies.length === 0) {
      return <Text>No Results</Text>;
    } else {
      return <Text>Movies Searched!</Text>;
    }
  }
}

MovieList.propTypes = {
  movies: PropTypes.array,
}