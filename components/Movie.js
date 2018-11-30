import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity,  } from 'react-native';

export default class Movie extends React.Component {

  render() {
    console.log('movie.js')
    return (
      <TouchableOpacity style={styles.container}>
        <Image 
          style={styles.image}
          source={{uri: this.props.Poster}}
        />
        <Text>{this.props.Title}</Text>
        <Text>{this.props.Year}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 225,
    width: 150,
  },
  container: {
    marginBottom: 50,
    width: 150,
    borderWidth: 1,
    borderColor: 'red',
  }
});