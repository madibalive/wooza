import React, { Component } from "react";
import PropTypes from "prop-types";
import { Parse } from "parse";
import MovieItem from "../item/movie_item";
import TvItem from "../item/tv_item";
import "./style.css";
import {
  Container,
  ButtonDropdown,
  Row,
  Col,
  Input,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonGroup
} from "reactstrap";
import { connect } from "react-redux";

class SearchPage extends Component {
  state = {
    index: 0,
    items: [],
    page: 0,
    isSearching: false,
    canLoadMore: false,
    selectedGenre: "All",
    term: "",
    dropdownOpen: false
  };
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  doSearch = () => {
    if (this.state.isSearching) {
      return;
    }
    this.setState({ isSearching: true, items: [] });

    const className = this.state.index == 0 ? "Movies" : "Tvshows";

    const query = new Parse.Query(className);
    if (!this.state.selectedGenre == "all") {
      query.equalTo("genre", this.state.selectedGenre);
    }

    if (this.state.term.length > 4) {
      query.startsWith("title", this.state.term);
    }
    query.skip(this.state.items.length);
    query.limit(25);

    query.find().then(
      data => {
        this.setState({
          items: data,
          isSearching: false
        });
      },
      error => {
        this.setState({
          isSearching: false
        });
      }
    );
  };

  toggleIndex = position => {
    this.setState({ index: position, items: [] });
  };

  onChangeListener = data => {
    this.setState({ term: data });
  };

  onGenreChange = event => {
    this.setState({ value: event.target.value, items: [] });
  };

  renderItem = () => {
    if (this.state.items) {
      const list = this.state.items.map(movie => {
        if (this.state.index == 0) {
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
        } else {
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
        }
      });
      return <Row className="justified-content-around">{list}</Row>;
    } else if (this.state.isSearching) {
      return <p>loadin</p>;
    }
  };

  render() {
    return (
      <div>
        <Container>
          <div
            style={{ height: "90px" }}
            className="d-flex flex-row align-items-center
           justify-content-between"
          >
            <input
              className="searchbox"
              onChange={e => this.onChangeListener(`${e.target.value}`)}
              placeholder="Search ..."
              type="text"
            />

            <button
              onClick={() => this.doSearch()}
              className="btn border-0"
              style={{ background: "transparent" }}
            >
              <i
                
                className="fa fa-search text-muted fa-1x"
              />
            </button>
          </div>
        </Container>

        <Container>
          <div
            className="d-flex flex-row align-items-center
           justify-content-between searchbar "
          >
            <ul className="list-inline">
              <li
                className={
                  this.state.index == 0
                    ? "list-inline-item active"
                    : "list-inline-item p-2"
                }
                onClick={event => this.toggleIndex(0)}
              >
                Movies
              </li>
              <li
                className={
                  this.state.index == 1
                    ? "list-inline-item active"
                    : "list-inline-item p-2"
                }
                onClick={event => this.toggleIndex(1)}
              >
                Tv
              </li>
              <li
                className={
                  this.state.index == 2
                    ? "list-inline-item active"
                    : "list-inline-item p-2"
                }
                onClick={event => this.toggleIndex(2)}
              >
                Videos
              </li>
            </ul>
            <div>
              <ButtonDropdown
                isOpen={this.state.dropdownOpen}
                toggle={this.toggle.bind(this)}
              >
                <DropdownToggle className="btn-link border-0" caret>
                  {this.state.selectedGenre}
                </DropdownToggle>
                <DropdownMenu>
                  {this.props.genres.map(element => {
                    return (
                      <DropdownItem
                        onClick={() =>
                          this.setState({ selectedGenre: element })
                        }
                      >
                        {element}
                      </DropdownItem>
                    );
                  })}
                </DropdownMenu>
              </ButtonDropdown>
            </div>
          </div>
        </Container>
        <div class="dropdown-divider" />
        <Container>{this.renderItem()}</Container>
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
)(SearchPage);
