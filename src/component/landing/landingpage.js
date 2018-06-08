import React, { Component } from "react";
import { connect } from "react-redux";
import MovieItem from "../item/movie_item";
import TvItem from "../item/tv_item";
import { Parse } from "parse";
import "./style.css";
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom'


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

class LandingPage extends Component {
  state = {
    movies: [],
    tv: [],
    isFetching: false,
    error: false
  };

  componentDidMount() {
    this.getdata();
  }

  renderMovies = () => {
    if (this.state.movies) {
      const list = this.state.movies.map(movie => {
        return (
          <MovieItem video={movie} onVideoSelect={video => null} />
        );
      });
      return <Row className="justified-content-around">{list}</Row>;
    }
  };

  renderTvshow = () => {
    if (this.state.tv) {
      const list = this.state.tv.map(movie => {
        return <TvItem video={movie} onVideoSelect={video => null} />;
      });
      return <Row className="justified-content-around">{list}</Row>;
    }
  };
  getdata = () => {
    if (this.state.isFetching) {
      return;
    }
    this.setState({ isFetching: true });
    const query = new Parse.Query("Movies");
    let movies;
    let tvhows;
    query
      .find()
      .then(data => {
        movies = data;
        const query = new Parse.Query("Tvshows");
        query.limit(8)
        return query.find();
      })
      .then(
        data => {
          this.setState({
            movies: movies,
            tv: data,
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
        <Row className="justified-content-around align-items-center">
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
        <div className="banner d-flex flex-column justify-content-center">
          <div className="container ">
            <p className="lead text-center">
              Are you a creator ?
              <span>
                <Button className="btn-sm">Access Creator</Button>
              </span>
            </p>
          </div>
        </div>

        {/* <div class="dropdown-divider mt-0" /> */}

        <Jumbotron className="banner-subtle">
          <Container>
            <Row className="align-items-center justified-content-center">
              <Col sm="6">
                <h2 className="fh text-white">
                  The Best In Movie &amp; TV Shows
                </h2>
                <p className="fp text-white">
                  All the shows you to watch &amp; add movies you want to see
                  and Wooza will always have what more for you to watch next
                  queued up!
                </p>
                <button onClick={()=>this.history.push("/auth")} class="K S fq">CREATE FREE ACCOUNT</button>
              </Col>
              <Col md="6" className="d-none d-md-block">
                <img
                  style={{ height: "220px", width: "90%" }}
                  className="img-fluid rounded shadow-sm"
                  src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fscottmendelson%2Ffiles%2F2018%2F02%2Fau_rich_hero_blackpanther_1_3c317c85-1200x526.jpg"
                  alt=""
                />
              </Col>
            </Row>
          </Container>
        </Jumbotron>

        <Container>
          <Row className="mt-3">
            <Col sm="12" className="d-flex justify-content-between px-3">
              <h5 className="titlebar text-white">Top Movies</h5>
            </Col>
          </Row>
          {this.renderMovies()}

         
          <Row className="mt-3">
            <Col sm="12" className="d-flex justify-content-between px-3">
              <h5 className="titlebar text-white">Top Tvshows</h5>
            </Col>
          </Row>
          {this.renderTvshow()}
        </Container>
      </div>
    );
  }
}

export default LandingPage;
