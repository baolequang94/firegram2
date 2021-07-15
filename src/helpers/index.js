import * as ROUTES from "../constants/ROUTES";

export const toggleShowPassword = (event, setIsShowPassword) => {
  const el = event.target.closest(".password-container").querySelector("input");

  if (el.type === "password") {
    el.type = "text";
    setIsShowPassword(true);
  } else {
    el.type = "password";
    setIsShowPassword(false);
  }
};

export const handleLogin = async (
  event,
  firebase,
  email,
  password,
  history
) => {
  event.preventDefault();

  //-----------Test accounts------------
  // if (email === "abc123@gmail.com" && password === "abc123") {
  //   history.push(ROUTES.DASHBOARD);
  //   console.log("Test account", email, password);
  //   return;
  // }
  //--------------END-----------------

  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);

    history.push(ROUTES.DASHBOARD);
  } catch (error) {
    console.log(error.message);
  }
};

export const handleLogout = async (event, firebase, history) => {
  event.preventDefault();
  await firebase.auth().signOut();
  history.push(ROUTES.LOGIN);
};

// Toggle State

export const toggleState = (state, setState) => {
  setState((state) => !state);
};
