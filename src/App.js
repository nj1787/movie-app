import { React, Component } from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import { movies } from "./movieData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies,
      cartCount: 0,
    };
  }

  handleIncStar = (movie) => {
    const { movies } = this.state;

    const movieId = movies.indexOf(movie);

    if (movies[movieId].star >= 5) {
      return;
    }

    movies[movieId].star += 0.5;

    this.setState({
      movies,
    });
  };

  handleDecStar = (movie) => {
    const { movies } = this.state;

    const movieId = movies.indexOf(movie);

    if (movies[movieId].star <= 0) {
      return;
    }

    movies[movieId].star -= 0.5;

    this.setState({
      movies,
    });
  };

  handleAddToCart = (movie) => {
    let { movies, cartCount } = this.state;

    const movieId = movies.indexOf(movie);

    movies[movieId].addToCart = !movies[movieId].addToCart;

    if (movies[movieId].addToCart) {
      cartCount += 1;
    } else {
      cartCount -= 1;
    }

    this.setState({
      movies,
      cartCount,
    });

    console.log(cartCount);
  };

  handleFavourite = (movie) => {
    const { movies } = this.state;

    const movieId = movies.indexOf(movie);

    movies[movieId].fav = !movies[movieId].fav;

    this.setState({
      movies,
    });
  };
  render() {
    const { movies, cartCount } = this.state;
    return (
      <>
        <Navbar cartcount={cartCount} />
        <MovieList
          movies={movies}
          addStars={this.handleIncStar}
          subtractStars={this.handleDecStar}
          addToCart={this.handleAddToCart}
          favourite={this.handleFavourite}
        />
      </>
    );
  }
}

// function App() {
//   return (
//     <>
//       <Navbar />
//       <MovieList />
//     </>
//   );
// }

export default App;
