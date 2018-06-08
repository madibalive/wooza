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
import TvItem from "../item/tv_item";
import { fetchInfoError } from "../../store/actions";
import Hero from "../hero/Hero";

class InfoTvPage extends Component {
  state = {
    type: "",
    video: null,
    items: [],
    isFetching: false,
    error: false
  };
  componentDidMount() {
    this.process();
    this.getdata();
  }

 
  process = () => {
    let datao = Parse.Object.extend("Tvshows").createWithoutData(
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
          <TvItem
            video={movie}
            onVideoSelect={() =>
              this.props.history.push({
                pathname: `/tv/${movie.id}`,
                state: { video: this.state.video }
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
    let query = new Parse.Query("Episodes");
    query.equalTo(
      "tvshow",
      Parse.Object.extend("Tvshows").createWithoutData(
        this.props.match.params.id+""
      )
    );
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
        alert(error);
      }
    );
  };
  render() {
    return (
      <div>
        {this.state.video ? (
          <div>
            <Hero
              video={this.state.video }
              onWatch={() => {
                this.props.history.push({
                  pathname: `/play/${this.props.location.state.video.id}`,
                  state: { video:this.state.video  }
                });
              }}
            />
            <div class="dropdown-divider mt-0" />

           
            {this.renderEpisodes()}
            
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

export default InfoTvPage;
