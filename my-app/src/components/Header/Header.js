import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  updateUserNameAction,
  getFollowersAction,
  getUsersAction,
  setClickCountAction,
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
    const { updateUserName, getUser, getFollowers, setCount } = this.props;
    event.preventDefault();
    updateUserName(this.state.userName);
    getUser(this.state.userName);
    getFollowers(this.state.userName, 1, 10);
    setCount(1);
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
          <button onClick={this.handleOnClick}>Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { clickCount: state.clickCount };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserName: (userName) => dispatch(updateUserNameAction(userName)),
    getUser: (userName) => dispatch(getUsersAction(userName)),
    getFollowers: (userName, pageIndex, pageSize) =>
      dispatch(getFollowersAction(userName, pageIndex, pageSize)),
    setCount: (number) => dispatch(setClickCountAction(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
