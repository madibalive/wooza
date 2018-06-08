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
  NavLink
, 
  FormFeedback
} from "reactstrap";
import "./style.css";

import classnames from "classnames";

class AuthPage extends Component {
  state = {
    activeTab: "1",
    error: null
  };

  onLogin(e) {
    e.preventDefault();
    // this.props.authcheck(true);

    var email = this.refs.email.value;
    var password = this.refs.password.value;

    // this.props.updateAuth(true);
    this.props.history.push("/");

    Parse.User.logIn(email, password, {
      success: user => {
        this.props.history.push("/");
      },
      error: (user, err) => {
        this.setState({
          error: err.message
        });
      }
    });
  }

  onRegister(e) {
    e.preventDefault();
    var email = this.refs.email.value;
    var password = this.refs.password.value;

    var user = new Parse.User();
    user.set("username", email);
    user.set("password", password);
    user.set("email", email);

    user.signUp(null, {
      success: user => {
        this.props.history.replace("/");
      },
      error: (user, err) => {
        this.setState({
          error: err.message
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

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;
    return (
      <div>
        <div className="banner d-flex flex-column justify-content-center">
          <div className="container ">
            <p className="lead text-center text-white">
              Are you a creator ?
              <span className="ml-2">
                <Button className="fadedbutton">Access Creator</Button>
              </span>
            </p>
          </div>
        </div>
        <div
          className="auth"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1497271679421-ce9c3d6a31da?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=af630c2717bf02408f58d51685dacb73&auto=format&fit=crop&w=751&q=80)"
          }}
        >
          <div class="jumbotron jumbotron-fluid  authoverlay mb-0 d-flex flex-column justify-content-center">
            <Container>
              <Row>
                <Col sm="0" md="6" />
                <Col sm="12" md="4">
                  <Nav tabs className="">
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.activeTab === "1"
                        })}
                        onClick={() => {
                          this.toggle("1");
                        }}
                      >
                        Login
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.activeTab === "2"
                        })}
                        onClick={() => {
                          this.toggle("2");
                        }}
                      >
                        Sign up
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent
                    class="text-white"
                    activeTab={this.state.activeTab}
                  >
                    <TabPane tabId="1">
                      <form onSubmit={this.onLogin.bind(this)}>
                        <small class="form-text text-muted">
                          {this.state.error}
                        </small>
                        <FormGroup>
                          <Label className="text-white" for="exampleEmail">
                            Email
                          </Label>
                          <input
                            bsSize="sm"
                            type="email"
                            name="email"
                            ref="email"
                            id="exampleEmail"
                            placeholder="email"
                          />
                          <small id="emailHelp" class="form-text text-muted">
                            We'll never share your email with anyone else.
                          </small>
                        </FormGroup>
                        <FormGroup>
                          <Label className="text-white" for="password">
                            Password
                          </Label>
                          <input
                            bsSize="sm"
                            type="password"
                            name="password"
                            ref="password"
                            id="password"
                            placeholder="password "
                          />
                        </FormGroup>

                        <Button className="fadedbutton">Proceed</Button>
                      </form>
                    </TabPane>
                    <TabPane tabId="2">
                      <form onSubmit={this.onRegister.bind(this)}>
                        <small class="form-text text-muted">
                          {this.state.error}
                        </small>
                        <FormGroup>
                          <Label className="text-white" for="exampleEmail">
                            Email
                          </Label>
                          <input
                            bsSize="sm"
                            type="email"
                            name="email"
                            ref="email"
                            id="exampleEmail"
                            placeholder="with a placeholder"
                          />
                          <small id="emailHelp" class="form-text text-muted">
                            We'll never share your email with anyone else.
                          </small>
                        </FormGroup>
                        <FormGroup>
                          <Label className="text-white" for="password">
                            Password
                          </Label>
                          <input
                            bsSize="sm"
                            type="password"
                            name="password"
                            ref="password"
                            id="password"
                            placeholder="password "
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label className="text-white" for="phone">
                            Phone
                          </Label>
                          <input
                            bsSize="sm"
                            type="phone"
                            ref="phone"
                            name="phone"
                            id="phone"
                            placeholder="xxx xxx xxxx "
                          />
                        </FormGroup>

                        <Button className="fadedbutton">Proceed</Button>
                      </form>
                    </TabPane>
                  </TabContent>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
      // <div>
      //   {this.state.login ? (
      //     <div>
      //       <form onSubmit={this.onLogin.bind(this)}>
      //         <p className="red-text">{this.state.error}</p>
      //         <input id="email" type="email" className="validate" ref="email" />
      //         <input
      //           id="password"
      //           type="password"
      //           className="validate"
      //           ref="password"
      //         />

      //         <button>Login</button>
      //       </form>

      //       <p>
      //         have an account already
      //         <button onClick={() => this.setState({ login: false })}>
      //           register
      //         </button>
      //       </p>
      //     </div>
      //   ) : (
      //     <div>
      //       <div className="container">
      //         <h1>REGISTER</h1>
      //         <p className="red-text">{this.state.error}</p>
      //         <form className="col s12" onSubmit={this.onRegister.bind(this)}>
      //           <div className="row">
      //             <div className="input-field col s12">
      //               <label>Username</label>
      //               <input
      //                 id="username"
      //                 type="username"
      //                 className="validate"
      //                 ref="username"
      //               />
      //             </div>
      //           </div>

      //           <div className="row">
      //             <div className="input-field col s12">
      //               <label>Email</label>
      //               <input
      //                 id="email"
      //                 type="email"
      //                 className="validate"
      //                 ref="email"
      //               />
      //             </div>
      //           </div>

      //           <div className="row">
      //             <div className="input-field col s12">
      //               <label>phone</label>
      //               <input
      //                 id="phone"
      //                 type="phone"
      //                 className="validate"
      //                 ref="phone"
      //               />
      //             </div>
      //           </div>
      //           <div className="row">
      //             <div className="input-field col s12">
      //               <label>Password</label>
      //               <input
      //                 id="password"
      //                 type="password"
      //                 className="validate"
      //                 ref="password"
      //               />
      //             </div>
      //           </div>

      //           <button>Register</button>
      //         </form>
      //         <p>
      //           have an account already
      //           <button onClick={() => this.setState({ login: true })}>
      //             log in
      //           </button>
      //         </p>
      //       </div>
      //     </div>
      //   )}
      // </div>
    );
  }
}

export default withRouter(AuthPage);
