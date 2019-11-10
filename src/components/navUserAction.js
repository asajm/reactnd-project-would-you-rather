import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import {
  Button
} from "shards-react";

class NavUserActions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.toggleUserActions = this.toggleUserActions.bind(this);
  }

  toggleUserActions() {
    this.setState({
      visible: !this.state.visible
    });
  }

  handleLogout = (e) => {
    this.props.dispatch(setAuthedUser(null))
  }

  render() {
    const { user } = this.props
    return (
      user == null
        ? null
        : <form className="form-inline my-2 my-lg-0" onSubmit={this.handleLogout}>
            <img
              className="user-avatar rounded-circle mr-2"
              src={user.avatarURL}
              alt="User Avatar"
            />
            <span className="navbar-text mr-2">{user.name}</span>
            <Button pill theme="light" size="sm" className='text-success'>Logout</Button>
          </form>


          // <NavItem tag={Dropdown} caret toggle={this.toggleUserActions}>
          //   <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
          //     <img
          //       className="user-avatar rounded-circle mr-2"
          //       src={user.avatarURL}
          //       alt="User Avatar"
          //     />{" "}
          //     <span className="d-none d-md-inline-block">{user.name}</span>
          //   </DropdownToggle>
          //   <Collapse tag={DropdownMenu} right small open={this.state.visible}>
          //     <DropdownItem className="text-danger">
          //       <FontAwesomeIcon icon={faSearch} /> Logout
          // </DropdownItem>
          //   </Collapse>
          // </NavItem>
          );
  }
}

function mapStateToProps(state) {
  const { users, authedUser } = state
  const user = users[authedUser]
  return {
    user
  }
}

export default connect(mapStateToProps)(NavUserActions)
