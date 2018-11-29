import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

export default class Movie extends React.Component {

  render() {
    console.log('movie.js')
    return (
      <TouchableOpacity>
        <Image 
          style={{width: 120, height: 178}}
          source={{uri: this.props.Poster}}
        />
        <Text>{this.props.Title}</Text>
        <Text>{this.props.Year}</Text>
      </TouchableOpacity>
    );
  }
}

// const Movie = ({ poster, title, year }) => {
//   return (
//     <TouchableOpacity>
//       <Image 
//         style={{width: 120, height: 178}}
//         source={{uri: poster}}
//       />
//       <Text>{title}</Text>
//       <Text>{year}</Text>
//     </TouchableOpacity>
//   );
// };

// export default Movie;
