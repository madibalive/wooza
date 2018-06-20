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
import TvItem from "../item/tv_item";
import MusicItem from "../item/music_item";

class MusicPage extends Component {
  state = {
    items: [],
    trending: [],
    isFetching: false,
    error: false,
    index: 0
  };
  componentDidMount() {
    this.getdata();
  }
  toggleIndex = position => {
    this.setState({ index: position });
  };
  getdata = () => {
    const equery = new Parse.Query("Music");
    equery.find().then(data => {
      this.setState({
        items: data,
        trending: data
      });
    });
  };

  renderLoading = () => {
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

    return (
      <Row noGutters="true" className=" justified-content-around">
        {list}
      </Row>
    );
  };
  renderTop = () => {
    if (this.state.items.length > 0) {
      const sample = this.state.items[5];
      const topitem = (
        <div className="d-flex flex-column w-100 mb-2 " style={{ height: "300px" }}>
          <img
            className="w-100 shadow"
            style={{ height: "80%" }}
            src={sample.get("poster100")}
            alt=""
          />
          <h6 size="sm " className=" text-dark">
            {sample && sample.get("title")}
          </h6>
        </div>
      );
      const list = this.state.items.map((movie, i) => {
        if (i > 9) return;
        return (
          <Media className="my-4">
            <Media
              left
              middle
              href="#"
              style={{ height: "100px", width: "35%" }}
            >
              <Media
                style={{ objectFit: "cover" }}
                className="img w-100 h-100 shadow "
                object
                src={movie.get("poster50")}
                alt="Generic placeholder image"
              />
            </Media>
            <Media className=" p-1 text-dark" body>
              <Media>{movie && movie.get("title")}</Media>
              <small>views {movie && movie.get("viewCount")}</small>
            </Media>
          </Media>
        );
      });
      return (
        <div className=" p-2" style={{ width: "80%", margin: "0 auto" }}>
          <div md="12" className="pb-2">
            <h4
              style={{ borderBottom: "4px solid yellow", paddingBottom: "1rem" }}
              className="text-dark font-weight-bold"
            >
              TOP OF THE NEW
            </h4>
          </div>
          {topitem}
          {list}
        </div>
      );
    }
  };
  renderTrending = () => {
    if (this.state.items.length > 0) {
      const selectedItem = this.state.items[this.state.index];

      const list = this.state.items.map((movie, i) => {
        if (i > 4) return;
        const color = this.state.index == i ? " black" : " white";

        return (
          <Media
            style={{ backgroundColor: color }}
            className={
              this.state.index == i
                ? "p-4 text-white shadow "
                : "p-4 text-black"
            }
            onClick={event => this.toggleIndex(i)}
          >
            <Media style={{ backgroundColor: color }} body>
              <Media
                className={
                  this.state.index == i ? " text-white" : " text-dark"
                }
                onClick={event => this.toggleIndex(i)}
              >
                {movie && movie.get("title")}
              </Media>
              <small>views {movie && movie.get("viewCount")}</small>
            </Media>
          </Media>
        );
      });
      return (
        <div>
          <div md="12" className="pb-2">
            <h4
              style={{ borderBottom: "4px solid yellow", paddingBottom: "1rem" }}
              className="text-dark font-weight-bold"
            >
              SPANKING NEW
            </h4>
          </div>

          <Row
            className="shadow "
            style={{ height: "400px", marginBottom: "3rem" }}
            noGutters="true"
          >
            <Col md="8">
              <div className="d-flex flex-column w-100 h-100">
                <img
                  style={{ objectFit: "cover" }}
                  className="img w-100 h-100 shadow "
                  object
                  src={selectedItem.get("poster100")}
                />
                {/* <p>Top aligned medi</p> */}
              </div>
            </Col>
            <Col style={{ overflow: "auto" }} md="4">
              {list}
            </Col>
          </Row>
        </div>
      );
    }
  };

  renderItems = () => {
    if (this.state.items) {
      const list = this.state.items.map(movie => {
        return <MusicItem video={movie} onVideoSelect={() => {}} />;
      });
      return (
        <Row noGutters="true" className="my-3 justified-content-around">
          {list}
        </Row>
      );
    }
  };

  render() {
    return (
      <div style={{ backgroundColor: "#fff" }}>
        <div
          style={{ height: "88px" }}
          className="music-banner  mb-4 d-flex align-items-center justify-content-center"
        >
          <h2 className=" font-weight-text text-white">Music</h2>
        </div>

        {this.state.items.length > 0 ? (
          <Container fluid="true" className="pl-4 pr-4 pb-0 ">
            <Row>
              <Col xs="12" sm="12" md="12" lg="8">
                <Row>
                  <Col sm="12" className="d-none d-sm-block" >{this.renderTrending()}</Col>
                </Row>
                {this.renderItems()}
              </Col>
              <Col className="d-none d-sm-block"  xs="12" sm="12" md="12" lg="4">
                {this.renderTop()}
              </Col>
            </Row>
          </Container>
        ) : (
          <Container>{this.renderLoading()}</Container>
        )}
      </div>
    );
  }
}

export default MusicPage;
