import React, { Component } from "react";
import CommentListPage from "../comment/comment_list";
import PlayerPage from "./play_item";
import MovieItem from "../item/movie_item";
import TvItem from "../item/tv_item";
import { Container, Row, Col, Button, Jumbotron } from "reactstrap";
import { VimeoEmbed } from "../../library/customvimeo";
import { SSL_OP_PKCS1_CHECK_2 } from "constants";
import { Parse } from "parse";

class MediaPlayerPage extends Component {
  state = {
    video: null
  };

  componentDidMount() {
    this.process();
  }

  process = () => {

    

    let datao = Parse.Object.extend(this.props.location.state.video.className).createWithoutData(
      this.props.match.params.id
    );
    datao.fetch().then(data => {
      this.setState({
        video: data
      });
    });
  };
  onVideoSelect(video) {}
  onInputChange(comment) {
    this.setState({ comment });
  }

  renderMovies = () => {
    if (this.state.movies) {
      const list = this.state.movies.map(movie => {
        return (
          <recommendatedItem video={movie} onVideoSelect={video => null} />
        );
      });
      return list;
    }
  };
  renderEpisodes = () => {
    if (this.state.episodes) {
      const list = this.state.episodes.map(movie => {
        <TvItem video={movie} onVideoSelect={video => null} />;
      });
      return <ul>{list}</ul>;
    }
  };

  render() {
    return (
      <div>
        {this.state.video ? (
          <div>
            <Container>
              <Row class="justified-content-center">
                <div className="embed-responsive embed-responsive-16by9">
                <iframe src="https://player.vimeo.com/video/271743868" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                </div>
              </Row>
            </Container>
            <Container style={{ padding: "1rem", backgroundColor: "#073642" }}>
              <Row>
                <Col sm="12"><h3 className="text-white">{this.state.video.get("title")}</h3></Col>
                <Col sm="12">12321 views</Col>

                <Col sm="12">
                 
                  {this.state.video.get("runtime")}{" "}
                </Col>
                <Col sm="12">share like </Col>
              </Row>
            </Container>

            <Container>
              <Row>
                <Col sm="12">
                  <CommentListPage video={this.state.video} />
                </Col>
              </Row>
            </Container>
          </div>
        ) : (
          <p> loading</p>
        )}
      </div>
    );
  }
}

export default MediaPlayerPage;
