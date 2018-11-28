import React from 'react';
import { Button, TextInput, View, } from 'react-native';
import { Constants } from 'expo';
import { fetchMovies } from '../api'
import SearchBar from '../components/SeachBar';
import MovieList from '../components/MovieList';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    movies: undefined,
    search: '',
  };

  _handleChangeText = (text) => {
    this.setState({search: text});
  }

  _onSearch = async () => {
    const movies = await fetchMovies(this.state.search);
    if (movies) {
      this.setState({movies});
    } else {
      this.setState({movies: []});
    }
    console.log(this.state.movies);
  }

  render() {
    return (
      <View style={{marginTop: Constants.statusBarHeight}}>
        <SearchBar 
          handleChangeText={this._handleChangeText}
          handleSubmit={this._onSearch}
          search={this.state.search}
        />
        <MovieList 
          movies={this.state.movies}
        />
      </View>
    );
  }
}