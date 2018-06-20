import React, { Component } from "react";
import { connect } from "react-redux";
import MovieItem from "../item/movie_item";
import TvItem from "../item/tv_item";
import { Parse } from "parse";
import "./style.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Skeleton from "../../skeleton/index";
import Carousel from "../../library/carousel";
import Dots from "../../library/indicator-dots";
import Buttons from "../../library/buttons";

import {
  Container,
  CarouselCaption,
  CarouselItem,
  UncontrolledCarousel,
  Row,
  Col,
  Button,
  Media,
  Jumbotron
} from "reactstrap";
import Hero from "../hero/Hero";

class HomePage extends Component {
  state = {
    movies: [],
    tv: [],
    channels: [],
    music: [],
    channles: [
      { name: "Music Stories", color: "#B58900" },
      { name: "Celebrity Interviews", color: "#6d2c84" },
      { name: "Dance Fever", color: "#333c41" },
      { name: "Exercise Life", color: "#42949b" },
      { name: "Artist Corner", color: "#eb008b" },
      { name: "Morning Show", color: "#f0f0f0" },
      { name: "Space Sample", color: "#243e59" },
      { name: "Space Sample", color: "#243e59" }
    ],
    isFetching: false,
    error: false,
    index: 0,
    indexm: 0
  };

  componentDidMount() {
    this.getdata();
  }
  toggleIndex = position => {
    this.setState({ index: position });
    this.getEpisode(this.state.channels[position].id);
  };
  renderLoading = () => {
    if (this.state.isFetching) {
      let list = [];
      for (let index = 0; index < 6; index++) {
        let view = (
          <Col
            xs="6"
            sm="6"
            md="4"
            style={{ height: "300px" }}
            className="w-100 mb-4 react-loading-pulsef react-loading-pulse"
          >
            <div className=" w-100 h-100  " />
          </Col>
        );

        list.push(view);
      }

      return <Row className="my-3 justified-content-around">{list}</Row>;
    }
  };


  renderTrending = () => {
    if (this.state.music.length > 0) {
      const selectedItem = this.state.music[this.state.indexm];

      const list = this.state.music.map((movie, i) => {
        if (i > 5) return;
        const color = this.state.indexm == i ? " black" : " white";

        return (
          <Media
            style={{ backgroundColor: color }}
            className={
              this.state.indexm == i
                ? "p-4 text-white shadow "
                : "p-4 text-black"
            }
            onClick={event => this.toggleIndex(i)}
          >
            <Media style={{ backgroundColor: color }} body>
              <Media
                className={
                  this.state.indexm == i ? " text-white" : " text-dark"
                }
                onClick={event => this.toggleIndex(i)}
              >
                {movie && movie.get("title")}
              </Media>
              <small>views {movie && movie.get("viewCount")}</small>
            </Media>
          </Media>
        );
      });
      return (
        <div className="d-none d-md-block">
          <div md="12" className="pb-2">
            <h4
              style={{ borderBottom: "4px solid yellow", paddingBottom: "1rem" }}
              className="text-white font-weight-bold"
            >
              SPANKING NEW MUSC VIDEOS
            </h4>
          </div>

          <Row
            className="shadow "
            style={{ height: "600px", marginBottom: "3rem" }}
            noGutters="true"
          >
            <Col md="8">
              <div className="d-flex flex-column w-100 h-100">
                <img
                  style={{ objectFit: "cover" }}
                  className="img w-100 h-100 shadow "
                  object
                  src={selectedItem.get("poster100")}
                />
                {/* <p>Top aligned medi</p> */}
              </div>
            </Col>
            <Col style={{ overflow: "auto" }} md="4">
              {list}
            </Col>
          </Row>
        </div>
      );
    }
  };

  renderepisode = () => {
    if (this.state.episodes) {
      const list = this.state.episodes.map(movie => {
        return (
          <Col xs="6" sm="6" md="3" className="h-100 p-2">
            <div className=" h-100 w-100 ">
              <img
                style={{ objectFit: "cover" }}
                className="img rounded shadow w-100 h-100 img-fluid "
                src={movie.get("poster100")}
                alt=""
              />
            </div>
          </Col>
        );
      });
      return (
        <Row noGutters="true" className=" h-100 justified-content-around">
          {list}
        </Row>
      );
    }
  };
  renderchannels = () => {
    if (this.state.channels) {
      const mainbg = this.state.channles[this.state.index].color;
      const list = this.state.channels.map((movie, i) => {
        const color = this.state.channles[i].color;
        return (
          <div
            style={{ backgroundColor: color, padding: "2rem" }}
            className={
              this.state.index == i
                ? "wcard active text-center d-flex align-items-center"
                : "wcard text-center d-flex align-items-center"
            }
            onClick={event => this.toggleIndex(i)}
          >
            <div style={{ height: "48px", width: "48px", marginRight: "1rem" }}>
              <img
                src={movie.get("poster50")}
                alt=""
                style={{ objectFit: "cover" }}
                className="rounded-circle shadow w-100 h-100"
              />
            </div>
            <h6 className=" font-weight-bold my-2 text-white">
              {movie.get("title")}
            </h6>
          </div>
        );
      });
      return (
        <div style={{ marginBottom: "3rem", marginTop: "1rem" }}>
          <div
            style={{
              height: "85px",
              overflow: "hidden"
            }}
          >
            <div className="scrolling-wrapper ">{list}</div>
          </div>
          <div
            className="pt-4"
            style={{ height: "400px", backgroundColor: mainbg }}
            noGutters="true"
          >
            {this.renderepisode()}
          </div>
        </div>
      );
    }
  };

  render4Tv = () => {
    if (this.state.tv) {
      const list = this.state.tv.map((movie, i) => {
        if (i > 8) return;
        return (
          <div className="mcard mx-2">
            <div
              style={{ height: "600px", width: "400px" }}
              className="d-flex flex-column h-100 "
            >
              <div style={{ height: "80%" }} className="w-100">
                <img
                  style={{ backgroundSize: "cover" }}
                  className="img h-100 w-100 "
                  src={movie.get("poster100")}
                  alt=""
                />
              </div>
              <div className="mheader p-2">
                <h6 size="sm " className=" mt-1 text-white">
                  {movie && movie.get("title")}
                </h6>
                <p className="" text-muted>
                  {movie && movie.get("year")}
                </p>
              </div>
            </div>
          </div>
        );
      });

      return (
        <div style={{ marginBottom: "3rem", marginTop: "1rem" }}>
          <div className="scrolling-movies ">{list}</div>
        </div>
      );
    }
  };

  render4Movie() {
    if (this.state.movies) {
      const list = this.state.movies.map((movie, i) => {
        if (i > 6) return;
        return (
          <div className="mcard mx-2">
            <div
              style={{ height: "600px", width: "400px" }}
              className="d-flex flex-column h-100 "
            >
              <div style={{ height: "80%" }} className="w-100">
                <img
                  style={{ backgroundSize: "cover" }}
                  className="img h-100 w-100 "
                  src={movie.get("poster100")}
                  alt=""
                />
              </div>
              <div className="mheader p-2">
                <h6 size="sm " className=" mt-1 text-white">
                  {movie && movie.get("title")}
                </h6>
                <p className="" text-muted>
                  {movie && movie.get("year")}
                </p>
              </div>
            </div>
          </div>
        );
      });
      return (
        <div style={{ marginBottom: "3rem", marginTop: "1rem" }}>
          <div className="scrolling-movies ">{list}</div>
        </div>
      );
    }
  }
  renderMovies = () => {
    if (this.state.movies) {
      const list = this.state.movies.map((movie, i) => {
        if (i > 5) return;
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
      return (
        <Row noGutters="true" className="my-3 w-100 justified-content-around">
          {list}
        </Row>
      );
    }
  };

  renderBanner(item) {
    if (this.state.movies) {
      const list = this.state.movies.map(movie => {
        return (
          <Row noGutters="true">
            <Col
              xs="12"
              sm="12"
              md="12"
              lg="12"
              style={{ height: "520px", width: "100%" }}
            >
              <img
                style={{ objectFit: "none", objectPosition: "50% 50%" }}
                src={movie.get("poster100")}
                className="img w-100 h-100"
                alt=""
              />
            </Col>
            {/* <Col
              xs="12"
              sm="12"
              md="4"
              lg="2"
              className="p-4 banner-large-subtle"
              style={{ height: "520px" }}
            >
              <h2 className=" font-weight-bold text-white mt-3">
                {movie ? movie.get("title") : <Skeleton />}
              </h2>

              <button
                onClick={() => {
                  this.props.history.push({
                    pathname: `/movies/${movie.id}`,
                    state: { video: movie }
                  });
                }}
                className="btn btn-primary text-white"
              >
                watch now
              </button>
            </Col> */}
          </Row>
        );
      });
      return (
        <Carousel
          auto
          loop
          auto
          axis="x"
          widgets={[Dots, Buttons]}
          frames={list}
        />
      );
    }
  }

  render4Tv(data) {
    if (this.state.tv) {
      const movie = this.state.tv[5];
      let top = (
        <Col xm="12" sm="12" md="6">
          <div
            className="d-flex flex-column banner-large-subtle  "
            style={{ height: "440px" }}
          >
            <div className="himg-wrapper" style={{ height: "80%" }}>
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
        if (i > 6) return;
        return (
          <Col xs="6" sm="4" md="3" className="">
            <div
              style={{ height: "400px" }}
              className="d-flex m-1 flex-column card card-block  "
            >
              <div className="h-75 w-100 ">
                <img
                  style={{ objectFit: "cover" }}
                  className="img w-100 h-100 "
                  src={movie.get("poster100")}
                  alt=""
                />
              </div>
              <div className="mheader text-center p-2">
                <small size="sm " className="  text-white">
                  {movie ? movie.get("title") : <Skeleton />}{" "}
                </small>
              </div>
            </div>
          </Col>
        );
      });

      return (
        <Row
          className=" flex-row flex-sm-nowrap pt-3"
          style={{ height: "400px" }}
        >
          {list}
        </Row>
      );
    }
  }
  // <Row noGutters="true" className="mb-3">
  //   {top}
  //   <Col className="d-none d-md-block" sm="12" md="6">

  renderTrendingMovies() {
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
      let data = <Row className="largeMovieBar mb-3">{list}</Row>;
      return (
        <Carousel
          auto
          loop
          auto
          axis="x"
          widgets={[Dots, Buttons]}
          frames={data}
        />
      );
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
      return (
        <Row noGutters="true" className="my-3 justified-content-around">
          {list}
        </Row>
      );
    }
  };

  getEpisode = id => {
    const equery = new Parse.Query("Episode");
    equery.equalTo(
      "parent",
      Parse.Object.extend("Channel").createWithoutData(id)
    );
    equery.limit(4);
    equery.find().then(data => {
      this.setState({
        episodes: data
      });
    });
  };
  getdata = () => {
    if (this.state.isFetching) {
      return;
    }
    this.setState({ isFetching: true });
    const mquery = new Parse.Query("Movies");
    const cquery = new Parse.Query("Channel");
    const tquery = new Parse.Query("Tvshows");
    const equery = new Parse.Query("Music");
    tquery.limit(8);
    mquery.limit(12);
    let movies;
    let tvhows;
    let channels;

    mquery
      .find()
      .then(data => {
        movies = data;
        return tquery.find();
      })
      .then(data => {
        tvhows = data;
        return cquery.find();
      })
      .then(data => {
        channels = data;
        return equery.find();
      })
      .then(
        data => {
          this.setState({
            movies: movies,
            tv: tvhows,
            channels: channels,
            music: data,
            isFetching: false
          });
          this.getEpisode(this.state.channels[this.state.index].id);
        },
        error => {
          this.setState({ isFetching: false });
          this.setState({ error: error });
        }
      );
  };

  render() {
    return (
      <div className="h-100 p-4">
        {/* <Hero /> */}
        {this.state.error && (
          <Row className="h-100">
            <Col sm="12" className="error_snippet" style={{ height: "88px" }}>
              <div className="container text-center ">
                <h5>Uh-oh... Something in the background crashed.</h5>
                <button
                  className="btn btn-sm fadedbutton text-white"
                  aria-pressed="true"
                >
                  Refresh site
                </button>
              </div>
            </Col>
          </Row>
        )}

        {/* <Container>
          <div style={{ height: "72px" }} className="d-flex align-items-center">
            <h4 className="text-white  ">Movies and tv Selections</h4>
          </div>
        </Container> */}
        {/* <div class="dropdown-divider mb-3" /> */}
        {this.state.isFetching && <Container>{this.renderLoading()}</Container>}

        {this.state.movies.length > 0 && (
          <div>
            {/* <div style={{ height: "520px" }}>{this.renderBanner()}</div>
            
            */}

            {this.renderTrending()}
            <Row className="mt-4 div">
              <Col sm="12">
                <h5 className="text-white addlftbrdr">Trending Channels </h5>
                <p>lose your self in binge worthy drama</p>
              </Col>
            </Row>
            {this.renderchannels()}
            <Row className="mt-4 div">
              <Col sm="12">
                <h5 className="text-white addlftbrdr">Trending Movies </h5>
                <p>lose your self in binge worthy drama</p>
              </Col>
            </Row>
            {this.render4Movie()}

            <Row className="mt-4 div">
              <Col sm="12">
                <h5 className="text-white addlftbrdr">Romance Shows Drama</h5>
                <p>lose your self in binge worthy drama</p>
              </Col>
            </Row>
            {this.render4Tv()}
          </div>
        )}

        {/* <div class="dropdown-divider mt-0" /> */}
      </div>
    );
  }
}

export default HomePage;
