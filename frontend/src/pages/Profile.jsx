import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { getUser, user, token, logOut } = useContext(UserContext);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      {user ? (
        <>
          <p>Email: {user.email}</p>
          <p>Id: {user.id}</p>
        </>
      ) : (
        <p>Please login to view your profile.</p>
      )}
      <div>
        {token ? (
          <button
            className="btn btn-dark"
            onClick={() => {
              logOut();
            }}
            to="/logout"
          >
            Cerrar sesion
          </button>
        ) : null}
      </div>
    </div>
  );
};
export default Profile;
