import React from "react";
import { getUsersAction } from "../../../redux/actions/githubActions";
import { connect } from "react-redux";

class Home extends React.Component {
  render() {
    const { user, userName } = this.props;
    return (
      <div className="home__container">
        {user === null ? (
          userName === "" ? (
            <h1 className="home__text">search for user</h1>
          ) : (
            <h1 className="home__text">can not find {userName}</h1>
          )
        ) : (
          <div className="home__user__container">
            <div className="home__user">
              <a href={user.html_url}>
                <img src={user.avatar_url}></img>
              </a>
              <hr></hr>
              <div className="home__user__text">
                <h2>{user.login}</h2>
                <h4>Github User</h4>
                <hr></hr>
                <h4>{user.following} Followers</h4>
              </div>
            </div>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (userName) => dispatch(getUsersAction(userName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
