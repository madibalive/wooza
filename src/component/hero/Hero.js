import React from "react";
import ReactDom from "react-dom";
import "./style.css";
import { Link } from "react-router-dom";
import Skeleton from "../../skeleton/index";

import {
  Container,
  Col,
  Row,
  Button,
  Jumbotron,
  Card,
  CardImg
} from "reactstrap";
import parse from "parse";

/**
 * @render react
 * @name Hero
 * @description Netflix's Hero banner, shows our featured content.
 * @example
 * <Hero
 *   title="Season 66 will be available soon!"
 *   description="Lorem ipsum dolor sit amet hey! id quam sapiente unde voluptatum alias vero debitis, magnam quis quod."
 * />
 */
const Hero = props => (
  <div className=" " style={{ minHeight: "760px", position: "relative" }}>
    <div
      className=""
      style={{
        backgroundImage: `url(${props.video.get("poster50")})`,
        filter: "blur(20px)",
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        backgroundSize: "cover"
      }}
    />
    <Container style={{ zIndex: "20" }}>
      <Row noGutters="true" className="m-4">
        <Col
          xs="12"
          sm="12"
          md="12"
          className="p-4"
          style={{ height: "460px" }}
        >
          <img
            style={{ objectFit: "cover" }}
            src={props.video.get("poster100")}
            className="img  w-100 h-100 shadow"
            alt=""
          />
        </Col>
        <Col xs="12" sm="6" md="6" lg="4" className="p-4">
          <h2 className=" font-weight-bold text-white">
            {props.video ? props.video.get("title") : <Skeleton />}
          </h2>

          <small className="text-white">{props.video.get("production")}}</small>
          <p className="text-white">
            {props.video.get("year")} | runtime {props.video.get("runtime")}
          </p>
          <p className="text-white">Genre | {props.video.get("genre")}</p>
          <button
            onClick={() => props.onWatch()}
            className="btn btn-primary btn-large text-white"
          >
            watch now
          </button>
        </Col>
        <Col xs="12" sm="6" md="6" lg="8" className="p-4 text-white">
          <p> {props.video && props.video.get("desc").substring(0, 600)}</p>
        </Col>
      </Row>
    </Container>
  </div>
);

Hero.defaultProps = {
  title: "Games of Thronse Season 2",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque id quam sapiente unde voluptatum alias vero debitis, magnam quis quod."
};

export default Hero;
