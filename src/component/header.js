import React, { Component } from "react";
import { Parse } from "parse";
import { withRouter } from "react-router";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";

class HeaderPage extends Component {
  state = {
    auth: true,
    current: "home",
    inputValue: "",
    isOpen: false
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
  onLogout=()=> {
        Parse.User.logOut().then(() => {
      this.props.history.replace("/");
    });
  }

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
        <Navbar color="dark" dark expand="md">
          <Container>
            <NavbarBrand href="/">WOOZA</NavbarBrand>
            <NavbarToggler onClick={this.toggle.bind(this)} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink href="/tv/">Tv</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/movies">Movies</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/videos">Videos</NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto">
                {!Parse.User.current() ? (
                  <NavItem>
                    <NavLink href="/auth">Login | Signup</NavLink>
                  </NavItem>
                ) : (
                  <NavItem>
                    <button
                      onClick={event => 
                        this.onLogout()
                      }
                      class="btn btn-link"
                      type="button"
                    >
                      {Parse.User.current().get("username")} | Logout
                    </button>
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
