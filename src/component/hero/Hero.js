import React from "react";
import ReactDom from "react-dom";
import "./style.css";
import { Link } from "react-router-dom";

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
  <div
    className="Hero"
    style={{
      backgroundImage: `url(${props.video.get("poster100")})`
    }}
  >
    <div class="jumbotron jumbotron-fluid  herooverlay mb-0 d-flex flex-column justify-content-center">
      <Container>
        <Row className="align-items-center">
          <Col sm="12" md="4">
            <div className=" text-center">
              <img
                src={props.video.get("poster100")}
                class="rounded imagesize shadow "
                alt=""
              />
            </div>
          </Col>
          <Col sm="12" md="8" className="align-self-center">
            <div className="">
              <h2 className="text-white">{props.video.get("title")}</h2>
              <p>{props.video.get("genre")}</p>
              <p>{props.video.get("desc")}</p>
              <p>{props.video.get("year")}     {props.video.get("runtime")}</p>
              <Button
                className="fadedbutton"
                onClick={() => props.onWatch()}
              >
                Play Now
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
);

Hero.defaultProps = {
  title: "Games of Thronse Season 2",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque id quam sapiente unde voluptatum alias vero debitis, magnam quis quod."
};

export default Hero;
