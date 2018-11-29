import React from 'react';
import { Button, TextInput, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

export default class SearchBar extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          autoCapitalize='none'
          onChangeText={this.props.handleChangeText}
          onSubmitEditing={this.props.handleSubmit}
          placeholder="Search for movies"
          selectTextOnFocus
          style={styles.search}
          value={this.props.search}
        />
      </View>
    );
  }
}

SearchBar.propTypes = {
  handleChangeText: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#FFF',
  },
  search: {
    flex: 1,
    fontSize: 26,
  },
});