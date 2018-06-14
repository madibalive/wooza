import React, { Component } from "react";
import { connect } from "react-redux";
import MovieItem from "../item/movie_item";
import TvItem from "../item/tv_item";
import { Parse } from "parse";
import "./style.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

import {
  Container,
  CarouselCaption,
  CarouselItem,
  UncontrolledCarousel,
  Row,
  Col,
  Button,
  Jumbotron
} from "reactstrap";
import Hero from "../hero/Hero";

class HomePage extends Component {
  state = {
    movies: [],
    tv: [],
    isFetching: false,
    error: false
  };

  componentDidMount() {
    this.getdata();
  }

  renderLoading = () => {
    if (this.state.isFetching) {
      let list = [];
      for (let index = 0; index < 6; index++) {
        list.push(<MovieItem />);
      }

      return <Row className="my-3 justified-content-around">{list}</Row>;
    }
  };

  renderMovies = () => {
    if (this.state.movies) {
      const list = this.state.movies.map(movie => {
        return (
          <MovieItem
            video={movie}
            onVideoSelect={() => {
              this.props.history.push({
                pathname: `/movies/${movie.id}`,
                state: { video: movie }
              });
            }}
          />
        );
      });
      return <Row className="my-3 justified-content-around">{list}</Row>;
    }
  };

  renderBanner(item) {
    return (
      <Jumbotron className="back-trans my-3">
        <Row>
          <Col sm="6" md="8" className="error-banner justify-content-center">
            <h2 className=" font-weight-bold  mt-3">GH 14.99</h2>

            <p>Description </p>

            <button className="btn">watch now</button>
          </Col>
          <Col sm="6" md="4">
            <img src="" className="img img-fluid" alt="" />
          </Col>
        </Row>
      </Jumbotron>
    );
  }

  render4Tv(data) {
    return (
      <Row className="my-3">
        <Col sm="12" md="6">
          <TvItem />
        </Col>
        <Col sm="12" md="6">
          <Row>
            <Col sm="6">
              <TvItem />
            </Col>
            <Col sm="6">
              <TvItem />
            </Col>
            <Col sm="6">
              <TvItem />
            </Col>
            <Col sm="6">
              <TvItem />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
  render4Movie(data) {
    return (
      <Row className="largeMovieBar my-3">
        <Col sm="6">
          <TvItem />
        </Col>
        <Col sm="6">
          <TvItem />
        </Col>
        <Col sm="6">
          <TvItem />
        </Col>
        <Col sm="6">
          <TvItem />
        </Col>
      </Row>
    );
  }

  renderTvshow = () => {
    if (this.state.tv) {
      const list = this.state.tv.map(movie => {
        return (
          <TvItem
            video={movie}
            onVideoSelect={() => {
              this.props.history.push({
                pathname: `/tv/${movie.id}`,
                state: { video: movie }
              });
            }}
          />
        );
      });
      return <Row className="my-3 justified-content-around">{list}</Row>;
    }
  };
  getdata = () => {
    if (this.state.isFetching) {
      return;
    }
    this.setState({ isFetching: true });
    const mquery = new Parse.Query("Movies");
    const tquery = new Parse.Query("Tvshows");
    tquery.limit(8);
    mquery.limit(12);
    let movies;
    let tvhows;
    mquery
      .find()
      .then(data => {
        movies = data;
        return tquery.find();
      })
      .then(
        data => {
          tvhows = data;
          this.setState({
            movies: movies,
            tv: tvhows,
            isFetching: false
          });
        },
        error => {
          this.setState({ isFetching: false });
          this.setState({ error: error });
        }
      );
  };

  renderChannels = () => {
    if (this.props.movies) {
      const list = this.props.movies.map(movie => {
        return <MovieItem video={movie} onVideoSelect={video => null} />;
      });
      return (
        <Row className="my-3 justified-content-around align-items-center">
          {list}
        </Row>
      );
    }
  };
  render() {
    return (
      <div>
        {/* <Hero /> */}
        {this.state.error && (
          <Row>
            <Col sm="12" className="error_snippet" style={{ height: "88px" }}>
              <div className="container mx-auto">
                <h4>Uh-oh... Something in the background crashed.</h4>
                <button className="btn fadedbutton active" aria-pressed="true">
                  Refresh site
                </button>
              </div>
            </Col>
          </Row>
        )}
        <div style={{height:"88px"}} className="p-2 banner-large d-flex flex-column justify-content-center">
          <div className="container ">
            <p className="lead text-center">
              Are you a creator ?
              <span>
                <Button className="btn-sm ml-2">Access Creator</Button>
              </span>
            </p>
          </div>
        </div>
        {this.state.isFetching && <Container>{this.renderLoading()}</Container>}

        {this.state.movies.length>0 && (
          <Container>


            {this.renderBanner()}
            <Row className="mt-3">
              <Col sm="12" className="d-flex justify-content-between px-3">
                <h5 className="text-white">Top Movies</h5>
              </Col>
            </Row>
            {this.renderMovies()}
            <Row className="mt-3">
              <Col sm="12" className="d-flex justify-content-between px-3">
                <h5 className="text-white">Top Tvshows</h5>
              </Col>
            </Row>
            {this.renderTvshow()}
            <Row className="mt-3">
              <Col sm="12" className="d-flex justify-content-between px-3">
                <h5 className="text-white">Top Movies</h5>
              </Col>
            </Row>
            {this.renderMovies()}
            <Row className="mt-3">
              <Col sm="12" className="d-flex justify-content-between px-3">
                <h5 className="text-white">Top Tvshows</h5>
              </Col>
            </Row>

            {this.renderTvshow()}
          </Container>
        )}

        {/* <div class="dropdown-divider mt-0" /> */}
      </div>
    );
  }
}

export default HomePage;
