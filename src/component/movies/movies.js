import React, { Component } from "react";
import { Parse } from "parse";
import {
  Container,
  ButtonGroup,
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
      genres: ["All", "Drama ", "Entertainment", "Action"],
      selectedGenre: 0,
      error: null
    };
  }

  componentDidMount() {
     this.getdata();
  }

  renderLoading() {
    if (this.state.isFetching) {
      let list = [];
      for (let index = 0; index < 6; index++) {
        list.push(<MovieItem />);
      }

      return <Row className="justified-content-around">{list}</Row>;
    }
  }

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
      return <Row className="justified-content-around">{list}</Row>;
    }
  };

  onRadioBtnClick = rSelected => {
    this.setState({ selectedGenre: rSelected });
    // this.getdata();
  };

  renderGenres() {
    if (this.state.genres) {
      const list = this.state.genres.map((genre, n) => {
        let classname = "fadedbutton";

        if (n == this.state.selectedGenre) {
          // classname = "btn-primary";
        }
        return (
          <Button
            outline
            class="fadedbutton"
            style={{ marginRight: "1rem" }}
            size="sm"
            onClick={() => this.onRadioBtnClick(n)}
            active={this.state.selectedGenre === n}
          >
            {genre}
          </Button>
        );
      });
      return <ButtonGroup style={{ overflow: "hidden" }}>{list}</ButtonGroup>;
    }
  }

  getdata = (refresh = true) => {
    if (this.state.isFetching) {
      return;
    }
    this.setState({ isFetching: true });
    const query = new Parse.Query("Movies");
    // query.limitTo(25);
    // if (this.state.selectedGenre > 0) {
    //   alert(this.state.genres[this.state.selectedGenre].toLowerCase());
    //   query.equalTo(
    //     "genre",
    //     this.state.genres[this.state.selectedGenre].toLowerCase()
    //   );
    // }
    // query.skip(this.state.currentPage * 25);
    query.find().then(
      data => {
        // let pageindex = data.map(item => {
        //   return item.id;
        // });v
        let sdata;
        if (refresh) {
          sdata = [];
        } else {
          sdata = this.state.items;
        }
        data.forEach(i => sdata.push(i));
        // items[this.state.currentPage] = pageindex;
        // this.setState({ isFetching: false });
        // this.setState({ data: this.state.data.Push(...data) });
        // this.setState({ pages: pages });

        if (data.length < 25) {
          this.setState({
            canLoadMore: false,
            items: sdata,
            isFetching: false
          });
        } else {
          this.setState({
            items: sdata,
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
        <Container>
          <div style={{ height: "72px" }} className="d-flex align-items-center">
            <h4 className="text-white font-weight-bold">
              All Streaming Movies
            </h4>
          </div>
        </Container>
        <div class="dropdown-divider mb-3" />

        <Container>
          {this.renderTvshow()}
        </Container>

        <Container style={{ padding: "2rem" }}>
          {this.state.items.lenght > 0 && (
            <Button className="fadedbutton" onClick={event => this.getdata()}>
              LoadMore
            </Button>
          )}
        </Container>
      </div>
    );
  }
}

export default MoviesPage;
