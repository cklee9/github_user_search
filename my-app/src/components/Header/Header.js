import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  updateUserNameAction,
  getFollowersAction,
  getUsersAction,
} from "../../redux/actions/githubActions";

class Header extends React.Component {
  state = {
    userName: "",
  };

  handleOnChange = (event) => {
    event.preventDefault();
    this.setState({
      userName: event.target.value,
    });
  };

  handleOnClick = (event) => {
    event.preventDefault();
    this.props.updateUserName(this.state.userName);
    this.props.getUser(this.state.userName);
    this.props.getFollowers(this.state.userName, 1, 10);
    this.setState({
      userName: "",
    });
  };
  render() {
    return (
      <div className="header__container">
        <nav className="header__navBar">
          <Link to="/home">HOME</Link>
          <Link to="/following">FOLLOWING</Link>
        </nav>
        <form className="header__form">
          <input
            type="text"
            placeholder="search..."
            onChange={this.handleOnChange}
            value={this.state.userName}
          ></input>
          <button onClick={this.handleOnClick}>Sumbit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserName: (userName) => dispatch(updateUserNameAction(userName)),
    getUser: (userName) => dispatch(getUsersAction(userName)),
    getFollowers: (userName, pageIndex, pageSize) =>
      dispatch(getFollowersAction(userName, pageIndex, pageSize)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
