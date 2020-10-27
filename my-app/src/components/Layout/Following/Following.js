import React from "react";
import { connect } from "react-redux";
import {
  getFollowersAction,
  updateClickCountAction,
} from "../../../redux/actions/githubActions";

class Following extends React.Component {
  // state = {
  //   clickCount: 1,
  // };
  handleLoadButtonClick = (event) => {
    event.preventDefault();
    // this.setState({
    //   clickCount: this.state.clickCount + 1,
    // });
    const { clickCount, getFollowers, updateCount } = this.props;
    updateCount();
    getFollowers(this.props.user.login, 1, clickCount * 10);
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
                  <p>{follower.login}</p>
                </div>
              ))}
            </div>
            <button onClick={this.handleLoadButtonClick}>Load More...</button>
          </div>
        )}
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      clickCount: 1,
    });
  }
}

const mapStateToProps = (state) => {
  return {
    userName: state.userName,
    user: state.user,
    followers: state.followers,
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
