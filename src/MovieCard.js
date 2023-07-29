import { Component } from "react";

class MovieCard extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     title: "The Avengers",
  //     plot: "Supernatural Powers Shown In The Movie.",
  //     price: 199,
  //     rating: 8.9,
  //     star: 0,
  //     fav: false,
  //     addToCart: false,
  //   };
  //   //Binding Globally
  //   // this.addstar = this.addstar.bind(this);
  // }
  //To Skip Binding Altogther, use Arrow Functions.
  // addstar() {
  //   console.log(this.state);
  // }
  // addstar = () => {
  //   //form 1 of setState()
  //   // this.setState({
  //   //   star: this.state.star + 0.5,
  //   // });

  //   //Second Form
  //   this.setState((prevState) => {
  //     return {
  //       star: prevState.star < 5 ? prevState.star + 0.5 : prevState.star,
  //     };
  //   });
  //   // this.state.star += 0.5;
  //   // console.log(this.state);
  // };
  // subtractstar = () => {
  //   //form 1 of setState()
  //   // this.setState({
  //   //   star: this.state.star + 0.5,
  //   // });

  //   //Second Form
  //   this.setState((prevState) => {
  //     return {
  //       star: prevState.star !== 0 ? prevState.star - 0.5 : prevState.star,
  //     };
  //   });
  //   // this.state.star += 0.5;
  //   // console.log(this.state);
  // };

  // handleFavourite = () => {
  //   this.setState({
  //     fav: !this.state.fav,
  //   });
  // };

  // handleAddRemoveCart = () => {
  //   this.setState({
  //     addToCart: !this.state.addToCart,
  //   });
  // };

  render() {
    const { title, plot, price, rating, star, fav, addToCart } =
      this.props.movies;
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img
              alt="Poster"
              src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
            />
          </div>
          <div className="right">
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">{price}</div>
            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
                <img
                  className="star-btn"
                  alt="minus"
                  src="https://img.icons8.com/?size=32&id=59837&format=png"
                  onClick={() => this.props.subtractStars(this.props.movies)}
                />
                <img
                  className="star-btn"
                  alt="star"
                  src="https://img.icons8.com/?size=35&id=8ggStxqyboK5&format=png"
                />
                <img
                  className="star-btn"
                  alt="plus"
                  src="https://img.icons8.com/?size=30&id=11255&format=png"
                  // onClick={this.addstar.bind(this)}
                  onClick={() => this.props.addStars(this.props.movies)}
                />
                <span>{star}</span>
              </div>
              {/* {fav ? (
                <button
                  className="unfavourite-btn"
                  onClick={this.handleFavourite}
                >
                  Unfavourite
                </button>
              ) : (
                <button
                  className="favourite-btn"
                  onClick={this.handleFavourite}
                >
                  Favoruite
                </button>
              )} */}

              <button
                className={fav ? "unfavourite-btn" : "favourite-btn"}
                // onClick={this.handleFavourite}
                onClick={() => {
                  this.props.favourite(this.props.movies);
                }}
              >
                {fav ? "UnFavourite" : "Favourite"}
              </button>
              <button
                className={addToCart ? "removeCart-btn" : "cart-btn"}
                // onClick={this.handleAddRemoveCart}
                onClick={() => this.props.addToCart(this.props.movies)}
              >
                {addToCart ? "Remove From Cart" : "Add To Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
