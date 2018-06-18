import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Parse } from "parse";
import {
  Container,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  FormFeedback
} from "reactstrap";
import "./style.css";

import classnames from "classnames";

class AuthPage extends Component {
  state = {
    index: 0,
    error: null,

    isloading: false
  };

  onLogin(e) {
    e.preventDefault();
    // this.props.authcheck(true);
    var email = this.loginemail.value;
    var password = this.loginpass.value;

    // this.props.updateAuth(true);
    this.setState({ isloading: true });

    Parse.User.logIn(email, password, {
      success: user => {
        // this.setState({
        //   index: 1
        // });
        this.props.history.push("/");
      },
      error: (user, err) => {
        this.setState({
          error: err.message,
          isloading: false
        });
      }
    });
  }

  onPaymentComplete = index => {
    Parse.user.put("payment", 0);
    Parse.user.put("renewDate", new Date());
    this.props.history.push("/");
  };

  onRegister(e) {
    e.preventDefault();
    var email = this.regemail.value;
    var username = this.regusername.value;
    var password = this.regpass.value;

    var user = new Parse.User();
    user.set("username", username);
    user.set("password", password);
    user.set("email", email);
    this.setState({ isloading: true });
    user.signUp(null, {
      success: user => {
        this.setState({
          index: 1
        });
        // this.props.history.replace("/");
      },
      error: (user, err) => {
        this.setState({
          error: err.message,
          isloading: false
        });
        alert(this.state.error);
      }
    });
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  renderstagetwo = () => {
    return (
      <Row noGutters="true" >
        <Col
          style={{ minHeight: "620px" }}
          xm="12"
          md={{ size: 6, offset: 6 }}
          lg={{ size: 4, offset: 8 }}
          sm="12"
          className="shadow-lg bdr4  banner-large"
        >
          <Row noGutters="true" className="">
            <Col sm="12" >
              <div className="text-white text-center pt-4 pl-4 pr-4 ">
                <h5>STEP 2 OF 2</h5>

                <p>Choose a Payment plan and your Done</p>
              </div>
            </Col>
            <Col
              sm="12"
              xs="12"
              className="text-center  text-white w-100 "
            >
              <div  className="shadow-lg py-4" style={{ margin: "5%" }}>
                <h2 class=" font-weight-bold  text-white     ">
                  Limited
                  <small class="text-muted">/ free</small>
                </h2>

                <ul className="list-unstyled">
                  <li>
                    <small> 7 Days Free Trail</small>
                  </li>
                  <li>
                    <small>Thousands of Tv show,movies &amp; more </small>
                  </li>
                </ul>

                <button
                  onClick={() => this.props.history.push("/")}
                  class="btn fadedbutton text-white font-weight-bold"
                  style={{   width: "60%",                    height: "38px",                   
                  }}
                >
                  Choose Plan
                </button>
              </div>
            </Col>
           
            <Col sm="12" xs="12" className=" text-center text-white w-100 ">
              <div className="shadow-lg  py-4  " style={{ margin: "5%",backgroundColor:"#00000031"}}>
                <h2 className=" font-weight-bold  text-white ">
                  GH 14.99
                  <small class="text-muted">/ mo</small>
                </h2>

                <ul className="list-unstyled">
                  <li>
                    <small>1 Month unlimited Access</small>
                  </li>
                  <li>
                    <small>Thousands of Tv show,movies &amp; more </small>
                  </li>
                </ul>
                <br />

                <button
                  onClick={() => this.props.history.push("/")}
                  class="authbutton "
                  style={{
                    width: "90%",
                    height: "38px",
                    maxWidth: "160px"
                  }}
                >
                  Choose Plan
                </button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  };
  renderStageOne = () => {
    return (
      <Row noGutters="true" >
        <Col
          style={{ minHeight: "620px" }}
          xm="12"
          md={{ size: 6, offset: 6 }}
          lg={{ size: 4, offset: 8 }}
          sm="12"
          className="shadow-lg bdr4  banner-large p-3"
        >
          <div className="d-flex flex-row justify-content-around w-100 ">
            <h5
              onClick={() => this.setState({ login: true })}
              className={this.state.login ? "font-weight-bold text-white" : ""}
            >
              Login
            </h5>
            <h5
              onClick={() => this.setState({ login: false })}
              className={!this.state.login ? "font-weight-bold text-white" : ""}
            >
              Signup
            </h5>
          </div>
          <div class="dropdown-divider mb-3" />

          {this.state.login ? (
            <form class="auth_box">
              <div class="form-group">
                {this.state.error && (
                  <div className="">
                    <p className="text-white">Error {this.state.error}</p>
                  </div>
                )}
                <label className="text-white" for="exampleInputEmail1">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  ref={ref => {
                    this.loginemail = ref;
                  }}
                  placeholder="Enter email"
                />
              </div>
              <div class="form-group">
                <label className="text-white" for="exampleInputPassword1">
                  Password
                </label>
                <input
                  type="password"
                  ref={ref => {
                    this.loginpass = ref;
                  }}
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div class="form-group form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label
                  className="text-white"
                  class="form-check-label"
                  for="exampleCheck1"
                >
                  Remember me
                </label>
              </div>
              <button
                onClick={event => this.onLogin(event)}
                type="submit"
                class="btn btn-primary"
              >
                Submit{" "}
                {this.state.isloading && (
                  <i class="fa-li fa fa-circle-o-notch fa-spin" />
                )}
              </button>
            </form>
          ) : (
            <form class="auth_box">
              <div class="form-group">
                {this.state.error && (
                  <div className="">
                    <p className="text-white">Error {this.state.error}</p>
                  </div>
                )}
                <label className="text-white" for="exampleInputUsername1">
                  Username{" "}
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputUsername1"
                  aria-describedby="emailHelp"
                  ref={ref => {
                    this.regusername = ref;
                  }}
                  placeholder="Username"
                />
              </div>
              <div class="form-group">
                <label className="text-white" for="exampleInputEmail1">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  ref={ref => {
                    this.regemail = ref;
                  }}
                  placeholder="Enter email"
                />
              </div>
              <div class="form-group">
                <label className="text-white" for="exampleInputPassword1">
                  Password
                </label>
                <input
                  type="password"
                  ref={ref => {
                    this.regpass = ref;
                  }}
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div class="form-group">
                <label className="text-white" for="exampleInputPhone">
                  Phone
                </label>
                <input
                  type="tel"
                  ref={ref => {
                    this.regphone = ref;
                  }}
                  class="form-control"
                  id="exampleInputPhone"
                  placeholder="Password"
                />
              </div>
              <div class="form-group form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label
                  className="text-white form-check-label"
                  for="exampleCheck1"
                >
                  Remember me
                </label>
              </div>
              <button
                onClick={event => this.onRegister(event)}
                type="submit"
                class="btn btn-primary"
              >
                Submit
                {this.state.isloading && (
                  <i class="fa-li fa fa-circle-o-notch fa-spin" />
                )}
              </button>
            </form>
          )}
        </Col>
      </Row>
    );
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;
    return (
      <div className="error_nosize d-flex align-items-center" style={{ minHeight: "100vh" }}>
        {/* <div className="banner-large d-flex flex-column justify-content-center ">
        <div className="" />
          <div className="container ">authbackground
            <p className="lead text-center text-white">
              Are you a creator ?
              <span className="ml-2">
                <Button className="fadedbutton">Access Creator</Button>
              </span>
            </p>
          </div>
        </div> */}

        <Container className="">
          {this.state.index == 0
            ? this.renderStageOne()
            : this.renderstagetwo()}
        </Container>
      </div>
    );
  }
}

export default withRouter(AuthPage);
