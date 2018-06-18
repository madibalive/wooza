import React, { Component } from "react";
import { Parse } from "parse";
import {
  Container,
  ButtonGroup,
  Row,
  Col,
  Button,
  Media,
  Jumbotron
} from "reactstrap";
class MusicPage extends Component {
  state = {
    items: [],
    trending: [],
    channles: [
      "Music Stories",
      "Celebrity Interviews",
      "Dance Fever",
      "Exercise Life",
      "Artist Corner"
    ],
    isFetching: false,
    error: false
  };

  renderLoading = () => {
    if (this.state.isFetching) {
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

      return <Row className="my-3 justified-content-around">{list}</Row>;
    }
  };

  renderTop = () => {
    if (this.state.channles) {
      const topitem = (
        <div className="d-flex flex-column w-100 " style={{ height: "300px" }}>
          <img
            className="w-100"
            style={{ height: "80%" }}
            src="http://via.placeholder.com/104x64"
            alt=""
          />
          <p>Top aligned medi</p>
        </div>
      );
      const list = this.state.channles.map(movie => {
        return (
          <Media className="my-4">
            <Media left top href="#">
              <Media
                className="mr-1"
                object
                src="http://via.placeholder.com/104x64"
                alt="Generic placeholder image"
              />
            </Media>
            <Media body>
              <Media>Top aligned media</Media>
              Cras sit amet nibh libero
            </Media>
          </Media>
        );
      });
      return (
        <div>
          {topitem}
          {list}
        </div>
      );
    }
  };
  renderTrending = () => {
    if (this.state.channles) {
      const list = this.state.channles.map(movie => {
        return (
          <Media className="my-2">
            <Media body>
              <Media>Top aligned media</Media>
              Cras sit amet nibh libero
            </Media>
          </Media>
        );
      });
      return (
        <Row style={{ height: "400px" }} noGutters="true">
          <Col md="8">
            <div className="d-flex flex-column w-100 h-100">
              <img
                className="w-100"
                style={{ height: "80%" }}
                src="http://via.placeholder.com/104x64"
                alt=""
              />
              {/* <p>Top aligned medi</p> */}
            </div>
          </Col>
          <Col md="4">{list}</Col>
        </Row>
      );
    }
  };

  renderItems = () => {};

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs="12" sm="12" md="12" lg="8">
              <Row>
                <Col sm="12">{this.renderTrending()}</Col>
                <Col sm="12">item</Col>
              </Row>
            </Col>
            <Col xs="12" sm="12" md="12" lg="4">
              <h4> top trending</h4>
              {this.renderTop()}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MusicPage;
