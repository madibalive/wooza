import React from "react";
import { Media } from "reactstrap";

const CommentItem = props => {
  return (
    <li class="media mt-2">
      <img
        class=" rounded-circle mr-3 align-self-start"
        src="http://via.placeholder.com/38x38"
        alt="Generic placeholder image"
      />
      <div class="media-body">
        <small class="mt-0">Media heading</small>
        <p className="text-white">{props.datas.get("content")}</p>
      </div>
    </li>
  );
};

export default CommentItem;
