import React, { Component } from "react";
import CommentListPage from "../comment/comment_list";
import PlayerPage from "./play_item";
import MovieItem from "../item/movie_item";
import TvItem from "../item/tv_item";
import { Container, Row, Col, Button, Jumbotron } from "reactstrap";
import { VimeoEmbed } from "../../library/customvimeo";
import { SSL_OP_PKCS1_CHECK_2 } from "constants";
import { Parse } from "parse";
import Skeleton from "../../skeleton/index";

class MediaPlayerPage extends Component {
  state = {
    video: null
  };

  componentDidMount() {
    this.process();
  }

  process = () => {
    let datao = Parse.Object.extend(
      this.props.location.state.video.className
    ).createWithoutData(this.props.match.params.id);
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
        <div>
          <Container>
            <Row class="justified-content-center">
              {this.state.video ? (
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    src="https://player.vimeo.com/video/271743868"
                    frameborder="0"
                    webkitallowfullscreen
                    mozallowfullscreen
                    allowfullscreen
                  />
                </div>
              ) : (
                <div
                  style={{
                    backgroundColor: "#202020",
                    height: "600px",
                    width: "100%"
                  }}
                />
              )}
            </Row>
          </Container>
          <Container className="my-2" style={{ backgroundColor: "#073642" }}>
            <Row className="p-1">
              <Col sm="12">
                {this.state.video && (
                  <div>
                    <h2 className=" font-weight-bold text-white my-2">
                      {this.state.video.get("title")}
                    </h2>

                    <p class="text-muted">
                      {this.state.video.get("runtime")}
                    </p>
                    <h5 className=" text-white">12321 views</h5>
                    <h5>share like </h5>
                  </div>
                )}
              </Col>
            </Row>
          </Container>

          <Container style={{ padding: "0 !important" }}>
            {this.state.video && <CommentListPage video={this.state.video} />}
          </Container>
        </div>
        )
      </div>
    );
  }
}

export default MediaPlayerPage;
