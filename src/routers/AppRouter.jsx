import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { JournalScreen } from "../components/journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";
import { firebase } from "../firebase/firebaseConfig";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import { LoadingScreen } from "../components/loading/LoadingScreen";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { startLoadingNotes } from "../actions/notes";

export const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //check if you're logged in the app
  const [checking, setChecking] = useState(true);
  //contaste necesaria para llamar hacer un dispatch en la aplicacion
  const dispatch = useDispatch();
  useEffect(() => {
    //onAuthStateChanged es un observable que esta pendiente al estado del login de la aplicacion
    firebase.auth().onAuthStateChanged(async (user) => {
      console.log("user logged: " + user);
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
        // luego hacemos un dispatch a la accion pasandole el uid del usuario logeado
        dispatch(startLoadingNotes(user.uid));
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);
  if (checking) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <Switch>
        <PublicRoute
          path="/auth"
          component={AuthRouter}
          isAuthenticated={isLoggedIn}
        />
        <PrivateRoute
          isAuthenticated={isLoggedIn}
          path="/"
          exact
          component={JournalScreen}
        />
        <Redirect to="/auth/login" />
      </Switch>
    </Router>
  );
};
