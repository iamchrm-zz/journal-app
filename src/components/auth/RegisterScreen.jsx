import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from "validator";
import { removeErrorAction, setErrorAction } from "../../actions/ui";
import { useDispatch, useSelector } from "react-redux";
import { startRegister } from "../../actions/auth";
export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    name: "Hernando",
    email: "nando@gmail.com",
    password: "123456",
    password2: "123456",
  });

  const { name, email, password, passwordConfirm } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(startRegister(email, password, name));
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setErrorAction("Name is required"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setErrorAction("Email is not valid"));
      return false;
    } else if (password !== passwordConfirm || password.length < 5) {
      dispatch(
        setErrorAction(
          "Password should be at least 6 characters and match each other"
        )
      );
      return false;
    }

    dispatch(removeErrorAction());
    return true;
  };
  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
        {msgError && <div className="auth__alert-error">{msgError}</div>}
        <input
          type="text"
          placeholder="name"
          name="name"
          value={name}
          className="auth__input"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          value={email}
          className="auth__input"
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={password}
          className="auth__input"
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Confirm your password"
          name="passwordConfirm"
          value={passwordConfirm}
          className="auth__input"
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="btn btn-primary btn-block"
          onClick={handleRegister}
        >
          Finalizar registro
        </button>
        <hr />
        <div className="auth__social-networks">
          <p>Social Networks</p>
          <div className="google-btn">
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
        <Link to="/auth/login">Already have account</Link>
      </form>
    </>
  );
};
