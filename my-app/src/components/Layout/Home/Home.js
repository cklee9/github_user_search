import React from "react";
import { getUsersAction } from "../../../redux/actions/githubActions";
import { connect } from "react-redux";

class Home extends React.Component {
  render() {
    const { user, userName } = this.props;
    console.log("user in Header", user);
    return (
      <div className="home__container">
        {userName === "" ? (
          <h1>search for user</h1>
        ) : (
          <div className="home__container">
            <div className="home__item">
              <img src={user.avatar_url}></img>
              <p>{userName}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
  //   componentDidMount() {
  //     const { userName, getUser } = this.props;
  //     getUser(userName);
  //   }
  //   componentDidUpdate() {
  //     const { userName, getUser } = this.props;
  //     getUser(userName);
  //   }
}

const mapStateToProps = (state) => {
  return {
    userName: state.userName,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (userName) => dispatch(getUsersAction(userName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
