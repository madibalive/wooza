import React, { Component } from "react";
import { Parse } from "parse";
import { withRouter } from "react-router";

import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown,
  CardImg
} from "reactstrap";

class HeaderPage extends Component {
  state = {
    auth: true,
    current: "home",
    inputValue: "",
    isOpen: false,
    dropdownOpen: false
  };
  toggledrop() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
  onLogout = () => {
    Parse.User.logOut().then(() => {
      this.props.history.replace("/");
    });
  };

  onSearch() {}
  handleSelect = value => {
    // location.href = value;
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <div>
        <Navbar
          fixed="top"
          style={{ backgroundColor: "#0a101685" }}
          expand="md"
        >
          <Container>
            <NavbarBrand href="/">INKAYI</NavbarBrand>
            <NavbarToggler onClick={this.toggle.bind(this)} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink
                    style={{ fontSize: "16px" }}
                    className="mx-2 "
                    activeStyle={{
                      fontWeight: "bold",
                      color: "#00e36a"
                    }}
                    to="/tv"
                  >
                    Tvshows
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    style={{ fontSize: "16px" }}
                    className="mx-2 "
                    activeStyle={{
                      fontWeight: "bold",
                      color: "#00e36a"
                    }}
                    to="/movies"
                  >
                    Movies
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    style={{ fontSize: "16px" }}
                    className="mx-2 "
                    activeStyle={{
                      fontWeight: "bold",
                      color: "#00e36a"
                    }}
                    to="/videos"
                  >
                    Music
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto">
                <NavLink
                                      style={{ fontSize: "16px" }}

                  className="mx-2 "
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#00e36a"
                  }}
                  to="/search"
                >
               
                  <i className="fa fa-search mt-3" /> 
                </NavLink>

                {!Parse.User.current() ? (
                  <NavItem>
                    <NavLink to="/auth">Login | Signup</NavLink>
                  </NavItem>
                ) : (
                  <NavItem>
                    <ButtonDropdown
                      className="btn-link"
                      isOpen={this.state.dropdownOpen}
                      toggle={this.toggledrop.bind(this)}
                    >
                      <DropdownToggle
                        className="btn-link border-0"
                        style={{ border: "transparent !important" }}
                        caret
                        size="lg"
                      >
                        <div class="img-rounded profile-img">
                          {Parse.User.current().get("avatar") && (
                            <img
                              className="w-100 h-100 img img-fluid rounded-circle"
                              src={Parse.User.current()
                                .get("avatar")
                                .url()}
                              alt=""
                            />
                          )}
                        </div>
                        <span class="caret" />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem
                          onClick={() => this.props.history.push("/account")}
                        >
                          Account
                        </DropdownItem>
                        <DropdownItem onClick={event => this.onLogout()}>
                          Logout
                        </DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </NavItem>
                )}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>

      // <div id="header" className="header">
      //   <ul>
      //     <li>
      //       <Link to="/home">home</Link>
      //     </li>
      //     <li>
      //       <Link to="/tvshows">tvshow</Link>
      //     </li>
      //     <li>
      //       <Link to="/movies">movies</Link>
      //     </li>
      //     <li>
      //       <Link to="/videos">video</Link>
      //     </li>
      //   </ul>
      //   <input
      //     ref="searchterm"
      //     type="text"
      //     onChange={event => {
      //       this.setState({ searchTerm: event.target.value });
      //     }}
      //   />
      //   <button onClick={this.onSearch.bind(this)}>search</button>

      //   <img src="" alt="" />
      //   <button onClick={this.onLogout.bind(this)}>logout</button>
      // </div>
    );
  }
}

export default withRouter(HeaderPage);
