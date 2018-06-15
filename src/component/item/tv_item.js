import React, { Component } from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";
import Skeleton from "../../skeleton/index";

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

export default class TvItem extends Component {
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
      <Col xs="6" sm="6" md="3" className="my-2">
        {/* <div className="block-m d-flex flex-column ">
          <div className="mimg-wrapper">
            <img src="" alt="" />
            <div className="moverlay">
              <p className="plot mgold-text">
                {this.props.video.get("desc").substring(0, 180) + "..."}
              </p>
            </div>
          </div>
          <div className="mheader">
            <h6 size="sm " className=" mt-1 text-white">
              {this.props.video ? this.props.video.get("title") : <Skeleton />}{" "}
            </h6>
            <p className="" text-muted>
              {this.props.video ? this.props.video.get("year") : <Skeleton />}
            </p>
          </div>
        </div> */}

        <div className="tv-item  banner-large-subtle rounded-bottom">
          <div
            className="Item extra shadow"
            onClick={() => this.props.onVideoSelect()}
            style={{
              backgroundImage: "url(" + url + ")"
            }}
          >
            <div className="Item overlay">
              <div className="plot ">
                <small className="font-weight-bold ">
                  {this.props.video &&
                    this.props.video.get("desc").substring(0, 180) + "..."}
                </small>
              </div>
            </div>
          </div>
          <div className="title p-2  mt-1">
            <p size="sm " className=" mb-0 text-white">
              {this.props.video ? (
                this.props.video.get("title").substring(0, 20) + "..."
              ) : (
                <Skeleton />
              )}{" "}
            </p>
            <p className="m-0" text-muted>
              {this.props.video ? this.props.video.get("year") : <Skeleton />}
            </p>
          </div>
        </div>
      </Col>
    );
  }
}
