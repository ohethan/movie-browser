import React from 'react';
import { Text, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import Movie from './Movie';

export default class MovieList extends React.Component {

  render() {
    if (!this.props.movies) {
      return <Text>Begin searching for movies</Text>;
    } else if (this.props.movies.length === 0) {
      return <Text>No Results</Text>;
    } else {
      return (
        <FlatList
          columnWrapperStyle={{justifyContent: 'space-around'}}
          data={this.props.movies}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          renderItem={({item}) => <Movie {...item} />}
        />
      );
    }
  }
}

MovieList.propTypes = {
  movies: PropTypes.array,
}