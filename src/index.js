// Code goes here
import React from 'react';
import ReactDOM from 'react-dom';

class MovieCard extends React.Component {
  render() {
    // ... The render stuff from before
    <div className="movie-card">
<<<<<<< HEAD
        <img
          src={this.props.poster}
          alt={this.props.title}
=======
        <img  
          src={this.props.poster} 
          alt={this.props.title} 
>>>>>>> e91d27fc669fa1d97a3a950058a1c17055b70440
        />
        <h2>{this.props.title}</h2>
        <small>Genres: {this.props.genres.join(', ')}</small>
      </div>
  }
}
<<<<<<< HEAD

MovieCard.defaultProps = {
  poster: 'http://i.imgur.com/bJw8ndW.png'
};

const jurassicWorldGenres = ['Action', 'Adventure', 'Science Fiction', 'Thriller'];

ReactDOM.render(
  <MovieCard
    title="Jurassic World"
    genres={jurassicWorldGenres}
  />,
  document.getElementById('root')
);
=======
 
MovieCard.defaultProps = {
  poster: 'http://i.imgur.com/bJw8ndW.png'
};
 
const jurassicWorldGenres = ['Action', 'Adventure', 'Science Fiction', 'Thriller'];
 
ReactDOM.render(
  <MovieCard
    title="Jurassic World"
    genres={jurassicWorldGenres} 
  />,
  document.getElementById('root')
);
>>>>>>> e91d27fc669fa1d97a3a950058a1c17055b70440
