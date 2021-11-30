import React from "react";

const withAuth = (Component) => (props) => {
    const isAuth = localStorage.getItem("user") !== null;
    return <Component {...props} isAuth={isAuth} />;
};

export default withAuth;
