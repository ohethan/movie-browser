import React from 'react';
import { Text, FlatList, View, } from 'react-native';
import { Constants } from 'expo';
import { fetchMovies } from '../api'
import SearchBar from '../components/SeachBar';
import Movie from '../components/Movie';
import { throttle } from 'lodash';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    movies: undefined,
    search: '',
    searchOptions: {
      page: 1,
    },
  };

  _handleChangeText = (text) => {
    this.setState({search: text});
  }

  _loadNextPageAsync = () => {
    return throttle(async () => {
      const movies = await fetchMovies(this.state.search, this.state.searchOptions);
      this.setState((prevState) => ({
        movies: [...prevState.movies, ...movies],
        searchOptions: {
          page: prevState.searchOptions.page + 1,
        }
      }));
      console.log(this.state.searchOptions.page);
    }, 2000)();
  }

  _onSearch = () => {
    this.setState({searchOptions: {
      page: 1
    }}, async () => {
      const movies = await fetchMovies(this.state.search, this.state.searchOptions);
      this.setState({movies});
    });
    this.FlatListRef && this.FlatListRef.scrollToOffset({offset: 0});
  }

  render() {
    let searchResults;

    if (!this.state.movies) {
      searchResults =  <Text>Begin searching for movies</Text>;
    } else if (this.state.movies.length === 0) {
      searchResults = <Text>No Results</Text>;
    } else {
      searchResults = (
        <FlatList
          ref={(ref) => {this.FlatListRef = ref;}}
          style={{marginBottom: 50}}
          columnWrapperStyle={{justifyContent: 'space-around'}}
          data={this.state.movies}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          onEndReached={this._loadNextPageAsync}
          onEndReachedThreshold={1}
          renderItem={({item}) => <Movie {...item} />}
        />
      );
    }

    return (
      <View style={{marginTop: Constants.statusBarHeight}}>
        <SearchBar 
          handleChangeText={this._handleChangeText}
          handleSubmit={this._onSearch}
          search={this.state.search}
        />
        {searchResults}
      </View>
    );
  }
}