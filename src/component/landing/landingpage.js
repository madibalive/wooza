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

class LandingPage extends Component {
  state = {
    movies: [],
    tv: [],
    isFetching: false,
    error: false
  };

  componentDidMount() {
    //this.getdata();
  }

  renderMovies = () => {
    if (this.state.movies) {
      const list = this.state.movies.map(movie => {
        return <MovieItem video={movie} onVideoSelect={video => null} />;
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
        // query.limit(8);
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
                <button className="btn fadedbutton active text-white" aria-pressed="true">
                  Refresh site
                </button>
              </div>
            </Col>
          </Row>
        )}
      

        {/* <div class="dropdown-divider mt-0" /> */}
        <div
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1497271679421-ce9c3d6a31da?ixlib=rb-0.3.5&s=fb2bf45324ffdbe8780fc90bb813a35e&auto=format&fit=crop&w=1051&q=80)",
            backgroundSize: "cover"
          }}
        >
          <div className="mb-0 banner-large " style={{height:"800px"}}>
            <Container className="w-100 h-75">
              <Row className="align-items-center justified-content-center h-100 w-100">
                <Col xs="12" md={{ size: 12, offset: 0 }} sm="12">
                
                  <h2 className="font-weight-bold   text-white">
                    The Best In Movie &amp; TV Shows
                  </h2>
                  <p className="font-weight-bold   text-white">
                    All the shows you to watch &amp; add movies you want to see
                    and Wooza will always have what more for you to watch next
                    queued up!
                  </p>
                  <button
                      onClick={() => this.props.history.replace("/auth")}
                      class="K S fq font-weight-bold   mt-3"
                    >
                     Start Your Free Trial
                    </button>
                </Col>
                {/* <Col xs="0" md="6" sm="0" className="d-none d-sm-block">
                 <img
                  style={{ height: "220px", width: "90%" }}
                  className="img-fluid rounded -sm"
                  src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fscottmendelson%2Ffiles%2F2018%2F02%2Fau_rich_hero_blackpanther_1_3c317c85-1200x526.jpg"
                  alt=""
                />
                </Col> */}
              </Row>
            </Container>
          </div>
        </div>



        {/* <Container>
          <Row className="mt-3">
            <Col sm="12" className="d-flex justify-content-between px-3">
              <h5 className=" text-white">Top Movies</h5>
            </Col>
          </Row>
          {this.renderMovies()}
        </Container> */}
  <div style={{ height: "88px" }} className="banner-large d-flex flex-column justify-content-center">
          <div className="container text-white ">
            <h5 className="  text-center text-white">
              Are you a creator ?
              <span>
                <Button className="btn-sm fadedbutton p-2 ml-4 text-white">
                  Access Creator
                </Button>
              </span>
            </h5>
          </div>
        </div>
        <Jumbotron style={{ padding: "3rem" }} className="error_nosize mb-0">
          <Container>
            <Row className="align-items-center justified-content-center">
              <Col md="8"  sm="12" xs="12">
                <h2 className="font-weight-bold   text-white">Watch Movies & TV On the GO!</h2>
                <p className="   text-white">
                  Watch your favorite tv shows, movies from anywhere at any
                  time.... WOOZA App provides contens from hundreds of Show to
                  make sure you for more stuff to watch.
                </p>
              </Col>
              <Col md="4" sm="12" xs="12" className="">
                <button onClick={() => null} class="K S fq font-weight-bold  align-self-center">
                  GET ON PLAYSTORE
                </button>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <Container>
          {/* <Row className="mt-3">
            <Col sm="12" className="d-flex justify-content-between px-3">
              <h5 className=" text-white">Top Tvshows</h5>
            </Col>
          </Row>
          {this.renderTvshow()} */}
        </Container>
      </div>
    );
  }
}

export default LandingPage;
