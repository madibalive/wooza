import React, { Component } from "react";
import CommentItem from "./comment_item";
import { Parse } from "parse";
import "./style.css";

import { Media, Jumbotron, Container, Col, Button, Row } from "reactstrap";

class CommentListPage extends Component {
  state = {
    comments: [],
    comment: "",
    isFetching: false,
    isPosting: false,
    canLoadMore: true,
    currentPage: 0,
    error: null
  };

  componentDidMount() {
    this.fetchComments();
  }
  onInputChange(comment) {
    this.setState({ comment });
  }
  loadComment() {}
  renderComments = () => {
    if (this.state.comments) {
      const list = this.state.comments.map(item => {
        return <CommentItem datas={item} />;
      });
      return list;
    }
  };
  addComment(e) {
    e.preventDefault();

    if (!this.state.comment.length > 0) {
      return;
    }
    var Comment = Parse.Object.extend("Comment");
    var comment = new Comment();

    // comment.set("from", "");
    comment.set("to", this.props.video);
    comment.set("content", this.state.comment);

    comment.save().then(
      data => {
        let comments = this.state.comments;
        comments.push(data);
        this.setState({
          comments: comments,
          comment: ""
        });
      },
      error => {}
    );
  }

  fetchComments = () => {
    if (!this.state.canLoadMore || this.state.isFetching) {
      return;
    }
    this.setState({ isFetching: true });
    const query = new Parse.Query("Comment");
    query.equalTo("to", this.props.video);

    //query.limitTo(25);
    //// if (this.state.selectedGenre != null) {
    //   query.contains;
    // }
    //query.skip(this.state.currentPage * 25);
    query.find().then(
      data => {
        let sdata = this.state.comments;
        let current = this.state.currentPage;
        current++;
        data.forEach(i => sdata.push(i));
        if (data.length < 25) {
          this.setState({
            canLoadMore: false,
            comments: sdata,
            isFetching: false,
            currentPage: current
          });
        } else {
          this.setState({
            comments: sdata,
            isFetching: false,
            currentPage: current
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
        <Row>
          {this.state.error && (
            <Col sm="12" className="error_snippet" style={{ height: "88px" }}>
              <div className="container mx-auto">
                <h4>Uh-oh... Something in the background crashed.</h4>
                <button className="btn fadedbutton active" aria-pressed="true">
                  Refresh site
                </button>
              </div>
            </Col>
          )}
        </Row>

        <form
          style={{ width: "100%" }}
          className="form-group"
          onSubmit={this.addComment.bind(this)}
        >
          <Jumbotron style={{ padding: "1rem", marginTop: "5px" }}>
            <Row>
              <Col className="d-none d-md-block" sm="0" md="1">
                <img
                  class=" rounded-circle mr-3 align-self-start"
                  src="http://via.placeholder.com/38x38"
                  alt="Generic placeholder image"
                />
              </Col>
              <Col sm="12" md="10" lg="10">
                <label>James simon</label>
                <textarea
                  className="form-control commentbox text-white"
                  id="exampleTextarea"
                  rows="2"
                  placeholder="add a comment..."
                  onChange={event => this.onInputChange(event.target.value)}
                />
              </Col>
              <Col className="align-self-end" sm="12" md="1">
                <input
                  class="btn btn-sm fadedbutton text-white "
                  type="submit"
                  value="Submit"
                />
              </Col>
            </Row>
          </Jumbotron>
        </form>

        <Row>
          <Col sm="12">
            <h4>{this.state.comments.length} comments</h4>
          </Col>

          <Col sm="12">
            <ul class="list-unstyled">{this.renderComments()}</ul>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CommentListPage;
