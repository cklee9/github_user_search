import React from "react";
import { connect } from "react-redux";

class Following extends React.Component {
  render() {
    const { followers, userName } = this.props;
    return (
      <div >
        {userName === "" ? (
          <h1 className="follow__text">search for followers</h1>
        ) : (
          <div className="follow__container">
            <div className="follow__list">
              {followers.map((follower) => (
                <div key={follower.id} className="follow__item">
                  <img src={follower.avatar_url}></img>
                  <p>{follower.login}</p>
                </div>
              ))}
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Following);
