import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-row justify-center items-center h-screen">
      <div className="bg-white rounded-2xl drop-shadow-2xl py-3 px-5 pt-8">
        <h1 className="text-3xl font-semibold text-center">Get started</h1>
        <p className="text-lg font-normal text-center text-gray-300">
          Create an account to continue.
        </p>
        <Formik
          initialValues={{
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("Invalid email")
              .required("Email is required"),
            password: Yup.string()
              .required("Password is required")
              .min(8, "Password must be at least 8 characters"),
            confirmPassword: Yup.string()
              .oneOf([Yup.ref("password"), null], "Passwords must match")
              .required("Confirm Password is required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              // Submit the form
              console.log("Form submitted:", values);
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form>
              <div className="w-full my-2">
                <label htmlFor="email" className="w-full">
                  Enter email address
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="youremail@email.com"
                  className={`w-full border rounded-lg p-2 focus:outline-none focus:border-0 focus:ring focus:ring-orange-400 mt-2 ${
                    errors.email && touched.email
                      ? "border-red-500"
                      : "border-black"
                  }`}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>
              <div className="w-full ">
                <label htmlFor="password" className="w-full">
                  Enter password
                </label>
                <div className="w-full relative">
                  <Field
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="******"
                    className={`w-full border rounded-lg p-2 focus:outline-none focus:border-0 focus:ring focus:ring-orange-400 mt-2 ${
                      errors.password && touched.password
                        ? "border-red-500"
                        : "border-black"
                    }`}
                  />
                  <span
                    onClick={handlePasswordVisibility}
                    className="cursor-pointer absolute bottom-3 right-3"
                  >
                    {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                  </span>
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>
              <div className="w-full">
                <label htmlFor="confirmPassword" className="w-full">
                  Confirm password
                </label>
                <div className="w-full relative">
                  <span
                    onClick={handlePasswordVisibility}
                    className="cursor-pointer absolute bottom-3 right-3"
                  >
                    {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                  </span>
                  <Field
                    type={showPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="******"
                    className={`w-full border rounded-lg p-2 focus:outline-none focus:border-0 focus:ring focus:ring-orange-400 mt-2 ${
                      errors.confirmPassword && touched.confirmPassword
                        ? "border-red-500"
                        : "border-black"
                    }`}
                  />
                </div>
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 text-xl text-white rounded-lg mt-3 p-2 hover:bg-orange-600"
              >
                {isSubmitting ? "Signing Up..." : "Signup"}
              </button>
              <p className="text-gray-300 text-center mt-1">
                Already have an account?{" "}
                <Link
                  to={"/login"}
                  className="text-orange-400 hover:underline cursor-pointer"
                >
                  Login
                </Link>
              </p>
              <div className="flex items-center justify-center space-x-4 my-4 w-10/12 mx-auto">
                <hr className="flex-grow border-t border-gray-300" />
                <span className="text-gray-500">or continue with</span>
                <hr className="flex-grow border-t border-gray-300" />
              </div>
              <div className="w-full py-2 text-center rounded-md border border-gray-300 cursor-pointer hover:bg-gray-100 active:border-orange-500">
                <p className="text-gray-800">Google</p>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignupPage;
