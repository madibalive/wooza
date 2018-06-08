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
import TvItem from "../item/tv_item";
import registerServiceWorker from "../../registerServiceWorker";

class TvShowPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFetching: false,
      currentPage: 0,
      items: [],
      pages: [],
      canLoadMore: true,
      genres: ["All", "Drama ", "Entertainment", "Action", "Crime"],
      selectedGenre: 0,
      error: null
  };
  }

  componentDidMount() {
    this.getdata();
  }
  renderTvshow = () => {
    if (this.state.items) {
      const list = this.state.items.map(movie => {
        return (
          <TvItem
            video={movie}
            onVideoSelect={() =>
              this.props.history.push({
                pathname: `/tv/${movie.id}`,
                state: { video: movie }
              })
            }
          />
        );
      });
      return <Row className="justified-content-around">{list}</Row>;
    } else {
      return <p>loadin</p>;
    }
  };

  onRadioBtnClick = rSelected => {
    this.setState({ selectedGenre: rSelected });
    this.getdata();
  };

  renderGenres() {
    if (this.state.genres) {
      const list = this.state.genres.map((genre, n) => {
        let classname = "fadedbutton";

        if (n === this.state.selectedGenre) {
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
      return <ButtonGroup>{list}</ButtonGroup>;
    }
  }

  getdata = (refresh = true) => {
    if (this.state.isFetching) {
      return;
    }
    this.setState({ isFetching: true });
    const query = new Parse.Query("Tvshows");
    // query.limitTo(25);
    if (this.state.selectedGenre > 0) {
      alert(this.state.genres[this.state.selectedGenre].toLowerCase());
      query.equalTo(
        "genre",
        this.state.genres[this.state.selectedGenre].toLowerCase()
      );
    }
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
        <Container className="">
          <div>
            <h4
              style={{ padding: "2rem" }}
              className="text-white font-weight-bold"
            >
              All Streaming TV Shows
            </h4>
          </div>
        </Container>

        <Jumbotron className="jumbotron-fluid  " style={{ padding: "1rem" }}>
          <Container style={{ maxHeight: "100vh" }}>
            <div className="d-flex d-flex-row d-flex-wrap ">
              {this.renderGenres()}
            </div>
          </Container>
        </Jumbotron>
        <Container>{this.renderTvshow()}</Container>
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

export default TvShowPage;
