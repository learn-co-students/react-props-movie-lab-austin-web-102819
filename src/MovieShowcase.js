import React, { Component } from "react";
import MovieCard from "./card-components/MovieCard.js";
import movieData from "./data.js";

class List extends React.Component {
  render() {
    return <li>{this.props.content}</li>;
  }
}

// const LIST = movieData;

export default class MovieShowcase extends Component {
  generateMovieCards = () => {
    return movieData.map(movie => (
      <MovieCard
        title={movie.title}
        IMDBRating={movie.IMDBRating}
        genres={movie.genres}
        poster={movie.poster}
      />
    ));
    // return LIST.map(item => <MovieCard content={item} />);
  };

  render() {
    return <div id="movie-showcase">{this.generateMovieCards()}</div>;
  }
}
