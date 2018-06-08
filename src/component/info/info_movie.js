import React, { Component } from "react";
import { Parse } from "parse";
import {
  Container,
  ButtonGroup,
  Row,
  Col,
  Button,
  Jumbotron
} from "reactstrap";
import { Link } from "react-router-dom";
import MovieItem from "../item/movie_item";
import { fetchInfoError } from "../../store/actions";
import Hero from "../hero/Hero";

class InfoMoviePage extends Component {
  state = {
    type: "",
    video: "",
    items: [],
    isFetching: false,
    error: false
  };
  componentDidMount() {
    this.process();
    this.getdata();
  }

  process = () => {
    let datao = Parse.Object.extend("Movies").createWithoutData(
      this.props.match.params.id
    );
    datao.fetch().then(data => {
      this.setState({
        video: data
      });
    });
  };

  renderEpisodes = () => {
    if (this.state.items) {
      const list = this.state.items.map(movie => {
        return (
          <MovieItem
            video={movie}
            onVideoSelect={() =>
              this.props.history.push({
                pathname: `/movies/${movie.id}`,
                state: { video: movie }
              })
            }
          />
        );
      });
      return <Row className="justified-content-around">{list}</Row>;
    }
  };
  onPlay() {}

  getdata = () => {
    if (this.state.isFetching) {
      return;
    }
    this.setState({ isFetching: true });
    const query = new Parse.Query("Movies");
    let movies;
    let tvhows;
    query.find().then(
      data => {
        this.setState({
          items: data,
          isFetching: false
        });
      },
      error => {
        this.setState({ isFetching: false });
        this.setState({ error: error });
      }
    );
  };
  render() {
    return (
      <div>
        {this.state.video ? (
          <div>
            <Hero
              video={this.state.video}
              onWatch={() => {
                this.props.history.push({
                  pathname: `/play/${this.props.location.state.video.id}`,
                  state: { video: this.state.video }
                });
              }}
            />
            <div class="dropdown-divider mt-0" />
            <Container>
            <Row className="mt-3">
            <Col sm="12" className="d-flex justify-content-between px-3">
              <h5 className="titlebar text-white">Recommended Movies</h5>
            </Col>
          </Row>
            {this.renderEpisodes()}</Container>
          </div>
        ) : (
          <p>loading</p>
        )}
      </div>
    );
  }
}
const location = {
  pathname: "/somewhere",
  state: { fromDashboard: true }
};

export default InfoMoviePage;
