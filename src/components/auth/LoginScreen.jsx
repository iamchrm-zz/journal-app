import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  startGoogleLogin,
  startLoginWithEmailPassword,
} from "../../actions/auth";
import { useForm } from "../../hooks/useForm";

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.ui);
  const [formValues, handleInputChange] = useForm();

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    dispatch(startLoginWithEmailPassword(email, password));
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };
  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="email"
          name="email"
          className="auth__input"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          className="auth__input"
          value={password}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="btn btn-primary btn-block"
          disabled={loading}
        >
          <span>
            {loading && <i className="fa-solid fa-spinner spinner"></i>} Iniciar
            Sesion
          </span>
        </button>
        <hr />
        <div className="auth__social-networks">
          <p>Social Networks</p>
          <div className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link to="/auth/register">Create new account</Link>
      </form>
    </>
  );
};
