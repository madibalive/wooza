import React, { Component } from "react";
import { Parse } from "parse";
import { connect } from "react-redux";

import {
  Container,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonGroup,
  ButtonDropdown,
  Row,
  Col,
  Button,
  Jumbotron
} from "reactstrap";
import MovieItem from "../item/movie_item";

class MoviesPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFetching: false,
      currentPage: 0,
      items: [],
      pages: [],
      canLoadMore: true,
      selectedGenre: "All",
      error: null,
      dropdownOpen: false
    };
  }

  componentDidMount() {
    this.getdata();
  }

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
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  onGenreChange = event => {
    this.setState({ value: event.target.value, items: [] });
  };
  renderTvshow = () => {
    if (this.state.items) {
      const list = this.state.items.map(movie => {
        return (
          <MovieItem
            video={movie}
            onVideoSelect={() => {
              this.props.history.push({
                pathname: `/movies/${movie.id}`,
                state: { video: movie }
              });
            }}
          />
        );
      });
      return (
        <Row noGutters="true" className="justified-content-around">
          {list}
        </Row>
      );
    }
  };

  getdata = (refresh = true) => {
    if (this.state.isFetching) {
      return;
    }
    this.setState({ isFetching: true });
    const query = new Parse.Query("Movies");
    if (!this.state.selectedGenre == "all") {
      query.equalTo("genre", this.state.selectedGenre);
    }
    // query.skip(this.state.currentPage * 25);
    query.find().then(
      data => {
        if (data.length < 25) {
          this.setState({
            canLoadMore: false,
            items: data,
            isFetching: false
          });
        } else {
          this.setState({
            items: data,
            isFetching: false
          });
        }
      },
      error => {
        this.setState({ isFetching: false });
        this.setState({ error: error });
      }
    );
  };

  render() {
    return (
      <div>
        {this.state.error && (
          <Row>
            <div className="error_snippet">
              <div className="container mx-auto">
                <h4>Uh-oh... Something in the background crashed.</h4>
                <button className="btn fadedbutton active" aria-pressed="true">
                  Refresh site
                </button>
              </div>
            </div>
          </Row>
        )}
        {this.state.items.length > 0 ? (
          <div>
            <div
              style={{ height: "88px" }}
              className="banner_redblack w-100 d-flex align-items-center"
            >
              <h4 className="text-white ml-1 font-weight-bold">
                All Streaming Movies
              </h4>
            </div>
            <div
              md="12"
              className="py-2"
              style={{
                borderBottom: "4px solid #1a8679f9",
                marginTop: "2rem",
                marginBottom: "2rem",
                paddingBottom: "1rem"
              }}
              className="text-white "
            >
              <ButtonDropdown
                isOpen={this.state.dropdownOpen}
                toggle={this.toggle.bind(this)}
              >
                <DropdownToggle
                  className="btn-link text-center text-white border-0"
                  caret
                >
                  <h4 className="d-inline"> {this.state.selectedGenre}</h4>
                </DropdownToggle>
                <DropdownMenu>
                  {this.props.genres.map(element => {
                    return (
                      <DropdownItem
                        onClick={() =>
                          this.setState({ selectedGenre: element })
                        }
                      >
                        <h4 className="text-white">{element}</h4>
                      </DropdownItem>
                    );
                  })}
                </DropdownMenu>
              </ButtonDropdown>
            </div>

            <div>{this.renderTvshow()}</div>
            <div style={{ padding: "2rem" }}>
              {this.state.items.lenght > 0 && (
                <Button
                  className="fadedbutton"
                  onClick={event => this.getdata()}
                >
                  LoadMore
                </Button>
              )}
            </div>
          </div>
        ) : (
          <Container>{this.renderLoading()}</Container>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ home }) => ({
  genres: home.genres
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesPage);
