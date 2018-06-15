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
    var username =this.regusername.value;
    var password =this.regpass.value;

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
      <Row>
        <Col xm="6" md={{ size: 8, offset: 2 }} sm="6" className="froze50  ">
          <Row className="align-items-center pt-2 justified-content-center">
            <Col sm="12">
              <div className="d-flex flex-column text-white justify-content-center">
                <h6>STEP 2 OF 2</h6>

                <p>Choose a Payment plan and your Done</p>
              </div>
            </Col>
            <Col
              md="6"
              sm="12"
              xs="12"
              className="text-center text-white py-3 justified-content-center"
            >
              <div style={{ width: "80%" }} className=" m-2">
                <h2 class=" font-weight-bold  text-white    ">
                  FREE
                  <small class="text-muted">/ 7day</small>
                </h2>

                <ul className="list-unstyled">
                  <li>
                    <small> 7 Days Free Trail</small>
                  </li>
                  <li>
                    <small>Thousands of Tv show,movies &amp; more </small>
                  </li>
                </ul>

                <br />
                <button
                  onClick={() => this.props.history.push("/")}
                  class="K fadedbutton "
                  style={{
                    width: "98%",
                    maxWidth: "160px",
                    backgroundColor: "hsla(0, 0%, 100%, 0.12)",
                    height: "38px"
                  }}
                >
                  Choose Plan
                </button>
              </div>
            </Col>
            <Col
              md="6"
              sm="12"
              xs="12"
              className="text-center text-white py-3 "
            >
              <div className="shadow-lg mx-auto  " style={{ width: "90%" }}>
                <h2 className=" font-weight-bold  text-white   mt-3">
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
                  class="authbutton mb-3"
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
      <Row>
        <Col xm="6" md={{ size: 8, offset: 2 }} sm="6" className="froze50  ">
          {this.state.login ? (
            <form class="auth_box">
              <div class="form-group">
                <label className="text-white" for="exampleInputEmail1">Email address</label>
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
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div class="form-group">
                <label className="text-white" for="exampleInputPassword1">Password</label>
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
                <label className="text-white" class="form-check-label" for="exampleCheck1">
                  Check me out
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
              <p>
                dont have a account{" "}
                <button
                  className="btn btn-sm btn-link"
                  onClick={() => this.setState({ login: false })}
                >
                  register
                </button>
              </p>
            </form>
          ) : (
            <form class="auth_box">
              <div class="form-group">
                <label className="text-white" for="exampleInputUsername1">Username </label>
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
                <label className="text-white" for="exampleInputEmail1">Email address</label>
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
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div class="form-group">
                <label className="text-white" for="exampleInputPassword1">Password</label>
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
                <label className="text-white" for="exampleInputPhone">Phone</label>
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
                <label className="text-white form-check-label" for="exampleCheck1">
                  Check me out
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
              <p>
                Already Have an Account Login
                <button
                  className="btn btn-sm btn-link font-weight-bold"
                  onClick={() => this.setState({ login: true })}
                >
                  Login
                </button>
              </p>
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
      <div className="">
        <div className="banner d-flex flex-column justify-content-center ">
          <div className="container ">
            <p className="lead text-center text-white">
              Are you a creator ?
              <span className="ml-2">
                <Button className="fadedbutton">Access Creator</Button>
              </span>
            </p>
          </div>
        </div>
        <div className="authbackground jumbotron jumbotron-fluid back-trans" />

        <div class="jumbotron jumbotron-fluid back-trans   d-flex flex-column justify-content-center">
          <Container>
            {this.state.index == 0
              ? this.renderStageOne()
              : this.renderstagetwo()}
          </Container>
        </div>
      </div>
    );
  }
}

export default withRouter(AuthPage);
