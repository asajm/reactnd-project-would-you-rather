import React from "react";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Collapse
} from "shards-react";
import NavUserAction from "./navUserAction";

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      dropdownOpen: false,
      collapseOpen: false
    };
  }

  toggleDropdown() {
    this.setState({
      ...this.state,
      ...{
        dropdownOpen: !this.state.dropdownOpen
      }
    });
  }

  toggleNavbar() {
    this.setState({
      ...this.state,
      ...{
        collapseOpen: !this.state.collapseOpen
      }
    });
  }

  render() {
    return (
      <Navbar type="dark" theme="success" expand="md">
        <NavbarBrand href="#">Would You Rather</NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} />

        <Collapse open={this.state.collapseOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink
                className='nav-link'
                to="/"
                isActive={(match, location) => location.pathname === '/' ? true : false}
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className='nav-link'
                to="/add"
                isActive={(match, location) => location.pathname === '/add' ? true : false}
              >
                New
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className='nav-link'
                to="/leaderboard"
                isActive={(match, location) => location.pathname === '/leaderboard' ? true : false}
              >
                Leaderboard
              </NavLink>
            </NavItem>
          </Nav>

          <Nav navbar className="ml-auto">
            <NavUserAction></NavUserAction>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}


export default Navigation