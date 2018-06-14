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
import Skeleton from '../../skeleton/index'

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
    const url = this.props.video ? this.props.video.get("poster100") : "";

    return (
      <Col xs="6" sm="6" md="3" lg="2">

        {/* div.block-m>(div.mimg-wrapper>img+(div.moverlay>p.mtext-gold))+div.mheader */}


        <div className="movie-item">
          <div
            onClick={() => this.props.onVideoSelect()}
            className="Item  shadow-sm"
            style={{
              backgroundImage: "url(" + url + ")"
            }}
          >
            <div className="overlay">
              <div className="plot text-small ">
                <small>
                  {this.props.video &&
                    this.props.video.get("desc").substring(0, 120) + "..."}
                </small>
              </div>
            </div>
          </div>
          <div className="title">
            <h5 size="sm" className=" mt-1 text-white ">
              {this.props.video ? this.props.video.get("title") : <Skeleton />}
            </h5>
            <p className="" text-muted>
              {this.props.video ? this.props.video.get("year") : <Skeleton />}
            </p>
          </div>
        </div>
      </Col>
    );
  }
}
