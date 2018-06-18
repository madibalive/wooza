import React, { Component } from "react";
import { Parse } from "parse";
import {
  Container,
  CarouselCaption,
  CarouselItem,
  UncontrolledCarousel,
  Row,
  Col,
  Button,
  Jumbotron
} from "reactstrap";

class ViewChannelPage extends Component {
  state = {
    items: [],
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

  render() {
    return (
      <div className="h-100">
        <Container>
          <Row>
            <Col sm="12" style={{ height: "300px" }}>
              <img
                src="http://via.placeholder.com/350x150"
                className="img img-fluid w-100 h-100"
                alt=""
              />
            </Col>

            <Col sm="12" md="8" style={{ height: "100px" }}>
              <div className="w-100 h-100 d-flex flex-row align-items-center">
                <img
                  src="http://via.placeholder.com/58x58"
                  style={{ height: "70px", width: "58px" }}
                  className="img rounded-circular "
                  alt=""
                />
                <h5>Sample Name</h5>
              </div>
            </Col>

            <Col sm="12" md="auto" style={{ height: "100px" }}>
              <div className="d-flex flex-row align-items-center justify-content-end">
                <h4>4000\nvideos </h4>
                <h4>34k /n views</h4>
                <h4>34k /n followers</h4>
                <button className="btn btn-outline">subscribe</button>
              </div>
            </Col>

            <Col />
          </Row>
        </Container>
      </div>
    );
  }
}

export default ViewChannelPage;
