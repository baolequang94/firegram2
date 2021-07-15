import { lazy, Suspense } from "react";
// import FirebaseContext from "./context/firebase";
// import { createSeed } from "./seed";
// import { firebase, FieldValue } from "./libs/firebase";

import UserContext from "./context/user";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "./helpers/ProtectedRoute";
import { ProtectedAlreadyLoggedInRoute } from "./helpers/ProtectedAlreadyLoggedInRoute";
import useAuthUser from "./hooks/useAuthUser";
import * as ROUTES from "./constants/ROUTES";

function App() {
  // useEffect(() => {
  //   return () => createSeed(firebase);
  // }, []);

  const Login = lazy(() => import("./pages/Login"));
  const SignUp = lazy(() => import("./pages/SignUp"));
  const Dashboard = lazy(() => import("./pages/Dashboard"));
  const UserProfile = lazy(() => import("./pages/UserProfile"));

  const { authUser } = useAuthUser();

  return (
    <>
      <UserContext.Provider value={{ authUser }}>
        <Router>
          <Suspense fallback={<p>Loading...</p>}>
            <Switch>
              <ProtectedAlreadyLoggedInRoute
                user={authUser}
                path={ROUTES.LOGIN}
                component={Login}
              />
              <ProtectedAlreadyLoggedInRoute
                user={authUser}
                path={ROUTES.SIGN_UP}
                component={SignUp}
              />
              <ProtectedRoute
                user={authUser}
                exact
                path={ROUTES.DASHBOARD}
                component={Dashboard}
              />
              <Route path={ROUTES.PROFILE} component={UserProfile} />
            </Switch>
          </Suspense>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
