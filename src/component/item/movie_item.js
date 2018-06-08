import React, { Component } from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";
import "./style.css";
import {
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
  Button,
  CardImgOverlay
} from "reactstrap";

export default class MovieItem extends Component {
  static defaultProps = {
    title: "Episode 4",
    rating: 6,
    overview: "This demo item brought you by Bit team",
    backdrop: ""
  };

  static propTypes = {
    title: PropTypes.string,

    score: PropTypes.number,

    overview: PropTypes.string,

    backdrop: PropTypes.string
  };

  render() {
    const { backdrop, title, score, overview } = this.props;
    return (
      <Col xs="6" sm="6" md="4" lg="3">
        <div className="movie-item">
          <div
            onClick={() => this.props.onVideoSelect()}
            className="Item shadow-sm"
            style={{
              backgroundImage: "url(" + this.props.video.get("poster100") + ")"
            }}
          >
            {/* <div className="overlay">
              <div className="rating">{score} / 10</div>
              <div className="plot ">
                {this.props.video.get("desc").substring(0, 180) + "..."}
              </div>
            </div> */}
          </div>
          <div className="title">
            <h5 size="sm" className=" mt-1 ">
              {this.props.video.get("title")}
            </h5>
            <p className="" text-muted>
              2014
            </p>
          </div>
        </div>
      </Col>
    );
  }
}
