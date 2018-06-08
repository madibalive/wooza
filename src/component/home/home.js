import React, { Component } from "react";
import { connect } from "react-redux";
import MovieItem from "../item/movie_item";
import TvItem from "../item/tv_item";
class HomePage extends Component {
  renderBanner = () => {
    if (this.state.movies) {
      const list = this.props.movies.map(movie => {
        <MovieItem video={movie} onVideoSelect={video => null} />;
      });
      return <ul>{list}</ul>;
    }
  };
  renderMovies = () => {
    if (this.props.movies) {
      const list = this.props.movies.map(movie => {
        return (
          <MovieItem video={movie} onVideoSelect={video => alert("sad")} />
        );
      });
      return <ul>{list}</ul>;
    }
  };

  renderTvshow = () => {
    if (this.props.tvshows) {
      const list = this.props.tvshows.map(movie => {
        return (
          <MovieItem video={movie} onVideoSelect={video => alert("sad")} />
        );
      });
      return <ul>{list}</ul>;
    }
  };

  renderChannels = () => {
    if (this.props.movies) {
      const list = this.props.movies.map(movie => {
        <MovieItem video={movie} onVideoSelect={video => null} />;
      });
      return <ul>{list}</ul>;
    }
  };

  render() {
    return (
      <div>
        Homepage
        <div>sadasd</div>
        {this.renderTvshow()}
        {this.renderMovies()}
        {this.renderChannels()}
      </div>
    );
  }
}

const mapStateToProps = ({ home }) => ({
  tvshows: home.tvshows,
  movies: home.movies
});

const mapDispatchToProps = dispatch => {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
