import React from "react";
import { connect } from "react-redux";
import {
  getFollowersAction,
  updateClickCountAction,
} from "../../../redux/actions/githubActions";

class Following extends React.Component {
  handleLoadButtonClick = (event) => {
    event.preventDefault();
    const { getFollowers, user, clickCount, updateCount } = this.props;
    updateCount();
    getFollowers(user.login, 1, (clickCount + 1) * 10);
  };
  render() {
    const { user, followers, userName } = this.props;
    return (
      <div className="follow__container">
        {user === null ? (
          userName === "" ? (
            <h1 className="follow__text">search for followers</h1>
          ) : (
            <h1 className="home__text">can not find {userName}</h1>
          )
        ) : (
          <div className="follow__form">
            <div className="follow__list">
              {followers.map((follower) => (
                <div key={follower.id} className="follow__item">
                  <a href={follower.html_url}>
                    <img src={follower.avatar_url}></img>
                  </a>
                  <h5>{follower.login}</h5>
                </div>
              ))}
            </div>
            <button onClick={this.handleLoadButtonClick}>Load More...</button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userName: state.userName,
    user: state.user,
    followers: state.followers,
    clickCount: state.clickCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFollowers: (userName, pageIndex, pageSize) =>
      dispatch(getFollowersAction(userName, pageIndex, pageSize)),
    updateCount: () => dispatch(updateClickCountAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Following);
