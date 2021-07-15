import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import SignUpForm from "../components/Form/SignUpForm";

const SignUp = () => {
  useEffect(() => {
    document.title = `Sign up • Firegram`;
  }, []);
  return (
    <div className="bg-dark-500 h-screen w-full">
      <div className="container mx-auto max-w-screen-lg">
        <Navbar type={"LOGIN"} />
        <div className="flex flex-col items-center justify-center">
          <div className="text-white mb-8">
            <h2 className="text-center text-6xl font-semibold text-gray-100">
              Welcome to Firegram
            </h2>
            <p className="text-center font-medium text-xl text-lightGray-750 py-8 px-16">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
              laboriosam porro maiores necessitatibus itaque laudantium. Id
              pariatur distinctio facilis nemo.
            </p>
          </div>

          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
