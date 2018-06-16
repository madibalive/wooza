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
  <div
    style={{ height: "760px" }}
    className="Hero"
    style={{
      backgroundImage: `url(${props.video.get("poster100")})`
    }}
  >
    <div className=" herooverlay">
      <Container >
        <h2 className=" ml-4 font-weight-bold text-white">
          {props.video ? props.video.get("title") : <Skeleton />}
        </h2>
      </Container>
      <Container>
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
            {/* <h2 className=" font-weight-bold text-white">
              {props.video ? props.video.get("title") : <Skeleton />}
            </h2> */}

            <small className="text-white">
              {props.video.get("production")}}
            </small>
            <p className="text-white">
              {props.video.get("year")} | runtime {props.video.get("runtime")}
            </p>
            <p className="text-white">Genre | {props.video.get("genre")}</p>
            <button
              onClick={() => {
                this.props.history.push({
                  pathname: `/movies/${props.video.id}`,
                  state: { video: props.video }
                });
              }}
              className="btn btn-primary btn-large text-white"
            >
              watch now
            </button>
          </Col>
          <Col xs="12" sm="6" md="6" lg="8" className="p-4 text-white">
            <p> {props.video && props.video.get("desc")}</p>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
  //   {/* //   className="Hero"
  // //   // style={{
  // //   //   backgroundImage: `url(${props.video.get("poster100")})`
  // //   // }}
  // // > */}
  //   <div className=" herooverlay">
  //     <Container>
  //       <Row noGutters="true">
  //         <Col sm="12" md="8">
  //           <div style={{ height: "400px" }}>
  //             <img
  //               style={{ objectFit: "cover" }}
  //               src={props.video.get("poster100")}
  //               className="img  w-00 h-100  "
  //               alt=""
  //             />
  //           </div>
  //         </Col>
  //         <Col sm="12" md="4" className="align-self-center">
  //           <div className="">
  //             <h2 className="text-white">{props.video.get("title")}</h2>
  //             <h5 className="text-white">tags : {props.video.get("genre")}</h5>
  //             <p>{props.video.get("desc")}</p>
  //             <h5 className="text-white">
  //               year
  //               {props.video.get("year")} runtime {props.video.get("runtime")}
  //             </h5>
  //             <Button
  //               className="btn-lg fadedbutton"
  //               onClick={() => props.onWatch()}
  //             >
  //               Play Now
  //             </Button>
  //           </div>
  //         </Col>
  //       </Row>
  //     </Container>
  //   </div>
  // </div>
);

Hero.defaultProps = {
  title: "Games of Thronse Season 2",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque id quam sapiente unde voluptatum alias vero debitis, magnam quis quod."
};

export default Hero;
