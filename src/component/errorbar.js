import React from "react";
import { withRouter } from "react-router";

import { Container, Row, Col, Button } from "reactstrap";

const ErrorBar = props => {
  return (
  
      <Row>
        <Col sm="12" className="error_snippet" style={{ height: props.size }}>
          <div class="container mx-auto">
            <h2>{props.description}</h2>
            <button
              onClick={event => this.props.history.replace("/")}
              className="btn ml fadedbutton "
            >
              Refresh site
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

Hero.defaultProps = {
    size: "88px",
    description:
      "Uh-oh... Something in the background crashed"
  };

export default withRouter(ErrorBar);
