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
  Container,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown
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
        <Navbar color="dark" dark expand="md">
          <Container>
            <NavbarBrand href="/">INKAYE</NavbarBrand>
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
                  <NavLink href="/videos">Music </NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto">
                <NavLink href="/search">
                  <i class="fa fa-search" />
                </NavLink>

                {!Parse.User.current() ? (
                  <NavItem>
                    <NavLink href="/auth">Login | Signup</NavLink>
                  </NavItem>
                ) : (
                  <NavItem>
                    <ButtonDropdown
                      direction="left"
                      className="btn-link"
                      isOpen={this.state.dropdownOpen}
                      toggle={this.toggledrop.bind(this)}
                    >
                      <DropdownToggle
                        className="btn-link border-0"
                        style={{ border: "transparent !important" }}
                        caret
                        size="sm"
                      >
                        <div class="img-rounded profile-img" />
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
