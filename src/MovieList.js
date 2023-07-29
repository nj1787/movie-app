import { Component } from "react";
import MovieCard from "./MovieCard";

//Props are Passed From Parent To Child
class MovieList extends Component {
  render() {
    // const { title, plot, price, rating, stars, fav, addToCart } =
    //   this.state.movies;
    const { movies, addStars, subtractStars, favourite, addToCart } =
      this.props;
    return (
      <>
        {movies.map((movie) => (
          <MovieCard
            movies={movie}
            addStars={addStars}
            subtractStars={subtractStars}
            favourite={favourite}
            addToCart={addToCart}
            key={movie.id}
          />
        ))}
      </>
    );
  }
}

export default MovieList;
