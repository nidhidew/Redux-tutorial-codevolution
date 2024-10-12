import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux";

const UserConatiner = ({userData, fetchUsers}) => {
  useEffect(() => {
    fetchUsers();
  }, []);
  return userData.loading ? (
    <h3>Loading...</h3>
  ) : userData.error ? (
    <h3>{userData.error}</h3>
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map((user) => <p>{user.name}</p>)}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserConatiner);
