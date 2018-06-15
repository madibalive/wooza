import React, { Component } from "react";
import { connect } from "react-redux";
import MovieItem from "../item/movie_item";
import TvItem from "../item/tv_item";
import { Parse } from "parse";
import "./style.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Skeleton from "../../skeleton/index";

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
    channles: [
      "Music Stories",
      "Celebrity Interviews",
      "Dance Fever",
      "Exercise Life",
      "Artist Corner"
    ],
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
    if (this.state.movies[1]) {
      const movie = this.state.movies[1];
      return (
        <div
          className="banner-large-subtle d-flex flex-row w-100 my-4"
          style={{ height: "260px" }}
        >
          <div className="w-25 p-4">
            <h2 className=" font-weight-bold text-white mt-3">
              {movie ? movie.get("title") : <Skeleton />}
            </h2>

            <p> {movie && movie.get("desc").substring(0, 120)}</p>

            <button
              onClick={() => {
                this.props.history.push({
                  pathname: `/movies/${movie.id}`,
                  state: { video: movie }
                });
              }}
              className="btn fadedbutton text-white"
            >
              watch now
            </button>
          </div>
          <div className="w-75">
            <img
              style={{ objectFit: "cover" }}
              src={movie.get("poster100")}
              className="img  w-100 h-100"
              alt=""
            />
          </div>
        </div>
      );
    }
  }

  renderChannels() {
    <Container>
      <Row>
        <Col sm="12">
          <div className="scrolling-wrapper">
            {this.state.channles.map(item => {
              return (
                <div className="cardroll">
                  <h4>{item}</h4>
                </div>
              );
            })}
          </div>
        </Col>
      </Row>
    </Container>;
  }

  render4Tv(data) {
    if (this.state.tv) {
      const movie = this.state.tv[1];
      let top = (
        <Col sm="12" md="6">
          <div
            className="block-m d-flex flex-column banner-large-subtle  "
            style={{ height: "400px" }}
          >
            <div className="himg-wrapper" style={{height:"80%"}}>
              <img
                style={{ objectFit: "cover" }}
                className="img img-fluid w-100 h-100"
                src={movie.get("poster100")}
                alt=""
              />
            </div>
            <div className="mheader p-2">
              <h6 size="sm " className=" mt-1 text-white">
                {movie ? movie.get("title") : <Skeleton />}
              </h6>
              <p className="" text-muted>
                {movie && movie.get("year").substring(0, 120)}
              </p>
            </div>
          </div>
        </Col>
      );

      const list = this.state.tv.map((movie, i) => {
        if (i > 1) return;
        return (
          <Col xs="6" sm="6">
            <div className="block-m d-flex flex-column banner-large-subtle  ">
              <div className="himg-wrapper h-75 w-100 " >
                <img
                  style={{ objectFit: "cover" }}
                  className="img w-100 h-100 img-fluid "
                   src={movie.get("poster100")}
                  alt=""
                />
              </div>
              <div className="mheader p-2">
                <h6 size="sm " className=" mt-1 text-white">
                  {movie ? movie.get("title") : <Skeleton />}{" "}
                </h6>
                <p className="" text-muted>
                  {movie && movie.get("year")}
                </p>
              </div>
            </div>
          </Col>
        );
      });

      return (
        <Row className="mb-3">
          {top}
          <Col sm="12" md="6"  >
            <Row className="align-items-center" style={{ height: "400px" }}>{list}</Row>
          </Col>
        </Row>
      );
    }
  }
  render4Movie() {
    if (this.state.movies) {
      const list = this.state.movies.map((movie, i) => {
        if (i > 3) return;
        return (
          <Col xs="6" sm="6" md="3" className="pr-1 mb-4">
            <div className="block-m d-flex flex-column h-100 banner-large-subtle  ">
              <div style={{ height: "80%" }} className="himg-wrapper  w-100">
                <img
                  style={{ backgroundSize: "cover" }}
                  className="img h-100 w-100 "
                  src={movie.get("poster100")}
                  alt=""
                />
              </div>
              <div className="mheader p-2">
                <h6 size="sm " className=" mt-1 text-white">
                  {movie ? movie.get("title") : <Skeleton />}{" "}
                </h6>
                <p className="" text-muted>
                  {movie ? movie.get("year") : <Skeleton />}
                </p>
              </div>
            </div>
          </Col>
        );
      });
      return <Row className="largeMovieBar mb-3">{list}</Row>;
    }
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

  renderChann = () => {
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
        <div
          style={{ height: "88px" }}
          className="p-2 banner-large d-flex flex-column justify-content-center"
        >
          <div className="container ">
            <p className="lead text-center">
              Are you a creator ?
              <span>
                <Button className="btn-sm ml-2">Access Creator</Button>
              </span>
            </p>
          </div>
        </div>

        <Container>
          <div style={{ height: "72px" }} className="d-flex align-items-center">
            <h4 className="text-white font-weight-bold">
              Movies and tv Selections
            </h4>
          </div>
        </Container>
        <div class="dropdown-divider mb-3" />
        {this.state.isFetching && <Container>{this.renderLoading()}</Container>}
        {this.renderchannels}

        {this.state.movies.length > 0 && (
          <Container>
            {this.renderBanner()}
            <Row className="mt-4 container">
              <Col sm="12">
                <h5 className="text-white addlftbrdr">Trending Movies </h5>
                <p>lose your self in binge worthy drama</p>
              </Col>
            </Row>

            {this.render4Movie()}
            <Row className="mt-4">
              <Col sm="12" className="d-flex justify-content-between px-3">
                <h5 className="text-white">Top Movies</h5>
              </Col>
            </Row>
            {this.renderMovies()}

            <Row className="mt-4 container">
              <Col sm="12">
                <h5 className="text-white addlftbrdr">Romance Shows Drama</h5>
                <p>lose your self in binge worthy drama</p>
              </Col>
            </Row>
            {this.render4Tv()}
            <Row className="mt-4">
              <Col sm="12" className="d-flex justify-content-between mt-4 px-3">
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
