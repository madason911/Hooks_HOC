import React from "react";
import PropTypes from "prop-types";
import Subtitle from "../../common/typografy/subtitle";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    return (
        <Subtitle>
            {" "}
            {!isAuth ? (
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={onLogin}
                >
                    Войти
                </button>
            ) : (
                <button
                    type="submit"
                    className="btn btn-secondary"
                    onClick={onLogOut}
                >
                    Выйти из системы
                </button>
            )}{" "}
        </Subtitle>
    );
};
SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.bool
};

export default SimpleComponent;
