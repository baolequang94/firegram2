import { useContext, useState, useEffect } from "react";
import FirebaseContext from "../context/firebase";

export default function useAuthUser() {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );

  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authState) => {
      if (authState) {
        localStorage.setItem("authUser", JSON.stringify(authState));
        setAuthUser(authState);
      } else {
        localStorage.removeItem("authUser");
        setAuthUser(null);
      }
    });

    return () => listener();
  }, [firebase]);

  return { authUser };
}
