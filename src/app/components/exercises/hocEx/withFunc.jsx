import React from "react";

const withFunc = (Compenent) => (props) => {
    const handleLogin = () => {
        console.log("Login");
        localStorage.setItem("user", true);
    };

    const handleLogOut = () => {
        console.log("LogOut");
        localStorage.removeItem("user");
    };
    return (
        <Compenent {...props} onLogin={handleLogin} onLogOut={handleLogOut} />
    );
};

export default withFunc;
