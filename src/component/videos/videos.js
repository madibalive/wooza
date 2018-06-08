import React, { Component } from "react";
import Item from "../item/tv_item";
import { connect } from "react-redux";

class VideosPage extends Component {
  renderVideos = () => {
    if (this.props.videos) {
      const list = this.props.videos.map(movie => {
        return <Item video={movie} onVideoSelect={video => alert("sad")} />;
      });
      return <ul>{list}</ul>;
    }
  };
  render() {
    return (
      <div>
        VIDEO PAGE
        <div>{this.renderVideos()}</div>
      </div>
    );
  }
}
const mapStateToProps = ({ videos }) => ({
  videos: videos.items,
  isLoading: videos.loading,
  error: videos.error
});

const mapDispatchToProps = dispatch => {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideosPage);
