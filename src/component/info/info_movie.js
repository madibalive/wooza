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
import Skeleton from "../../skeleton/index";

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
  renderLoading = () => {
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

    return (
      <Row noGutters="true" className=" justified-content-around">
        {list}
      </Row>
    );
  };

  renderEpisodes = () => {
    if (this.state.items.length) {
      const list = this.state.items.map(movie => {
        return (
          <MovieItem
            video={movie}
            onVideoSelect={() =>
              this.props.history.replace({
                pathname: `/movies/${movie.id}`,
                state: { video: movie }
              })
            }
          />
        );
      });
      return (
        <Row noGutters="true" className="justified-content-around">
          {list}
        </Row>
      );
    } else {
      let list = [];
      for (let index = 0; index < 6; index++) {
        list.push(<MovieItem />);
      }

      return (
        <Row noGutters="true" className="justified-content-around">
          {list}
        </Row>
      );
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
            {/* <div class="dropdown-divider mt-3" /> */}
            <div className="py-4">
              <h5 className="mb-4 text-white">Recommended Movies</h5>
              {this.renderEpisodes()}
            </div>
          </div>
        ) : (
          <Container>{this.renderLoading()}</Container>
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
