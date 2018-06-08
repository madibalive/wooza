import React, { Component } from "react";
import { VimeoEmbed } from "../../library/customvimeo";

class PlayerPage extends Component {
  render() {
    return (
      <div>
        player
        <div className="embed-responsive embed-responsive-16by9">
          <VimeoEmbed videoId={258238541} />
          {/* <iframe className="embed-responsive-item" src={url} /> */}
        </div>
      </div>
    );
  }
}

export default PlayerPage;
