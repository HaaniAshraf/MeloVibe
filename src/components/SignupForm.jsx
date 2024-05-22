import React from "react";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import Button from "./Button";
import { SignupValidation, ArtistValidation } from "../utils/FieldValidation";
import Logo from "../assets/trans-logo.png";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { GoLock } from "react-icons/go";

const initialValues = {
  userName: "",
  email: "",
  password: "",
  profilePicture: null
};

const SignupForm = ({
  bgImage,
  loginLink,
  className,
  handleSubmit,
  profilePicInput = false,
  type,
}) => {
  return (
    <div
      className={`flex text-white xxs:px-7 xs:px-12 sm:px-20 lg:px-28 xl:px-64 xxs:py-2 xxs:gap-7 md:gap-10 lg:gap-12 xl:gap-14 items-center ${className}`}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="rounded-lg xxs:px-10 md:px-14 xxs:py-3 md:py-5 lg:py-7 xl:py-8 animate-fadeIn bg-[#050505df]">
        <div className="flex items-center justify-center">
          <img src={Logo} alt="" className="xxs:h-14 lg:h-20" />
          <h1 className="text-5xl xxs:text-3xl lg:text-5xl font-semibold font-signature gradient-bg">
            MeloVibe
          </h1>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={
            type == "artist" ? ArtistValidation : SignupValidation
          }
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="flex flex-col gap-3">
              {profilePicInput && (
                <div className="flex flex-col gap-1">
                  <div>
                    <label
                      htmlFor="profilePicture"
                      className="block font-bold text-gray-500"
                    >
                      Profile Picture :
                    </label>
                    <Field
                      type="file"
                      name="profilePicture"
                      accept="image/*"
                      className="p-1 w-full bg-transparent border-2 border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                    />
                  </div>
                  {touched.profilePicture && errors.profilePicture && (
                    <small className="text-red-400">
                      {errors.profilePicture}
                    </small>
                  )}
                </div>
              )}
              <div className="flex flex-col gap-1">
                <div>
                  <label
                    htmlFor="userName"
                    className="block font-bold text-gray-500"
                  >
                    UserName :
                  </label>
                  <div className="flex items-center bg-transparent border-2 border-gray-500 rounded">
                  <AiOutlineUser className="text-gray-500 mx-1"/>
                  <Field
                    type="userName"
                    name="userName"
                    className="bg-transparent w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 border-l-2 border-gray-500"
                  />
                  </div>
                </div>
                {touched.userName && errors.userName && (
                  <small className="text-red-400">{errors.userName}</small>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <div>
                  <label
                    htmlFor="email"
                    className="block font-bold text-gray-500"
                  >
                    Email :
                  </label>
                  <div className="flex items-center bg-transparent border-2 border-gray-500 rounded">
                  <HiOutlineMail className="text-gray-500 mx-1"/>
                  <Field
                    type="email"
                    name="email"
                    className="bg-transparent w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 border-l-2 border-gray-500"
                  />
                  </div>
                </div>
                {touched.email && errors.email && (
                  <small className="text-red-400">{errors.email}</small>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <div>
                  <label
                    htmlFor="password"
                    className="block font-bold text-gray-500"
                  >
                    Password :
                  </label>
                  <div className="flex items-center bg-transparent border-2 border-gray-500 rounded">
                  <GoLock className="text-gray-500 mx-1"/>
                  <Field
                    type="password"
                    name="password"
                    className="bg-transparent w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 border-l-2 border-gray-500"
                  />
                  </div>
                </div>
                {touched.password && errors.password && (
                  <small className="text-red-400">{errors.password}</small>
                )}
              </div>
              <Button
                type="submit"
                classname="mt-4 py-3 px-6 bg-gradient-to-r from-pink-500 to-blue-900"
              >
                Signup
              </Button>
            </Form>
          )}
        </Formik>
        <div className="text-center mt-5 text-gray-400">
          Already Signed Up ?
          <Link to={loginLink}>
            <span className="font-bold text-blue-800 hover:text-pink-500 duration-150 cursor-pointer ml-1">
              Login
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
