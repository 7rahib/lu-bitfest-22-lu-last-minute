import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import loginForm from "../../Assets/Images/Home/LoginForm.jpg";
import UseAuth from "../../Context/UseAuth";

const Login = () => {
  const { emailPassLogIn } = UseAuth();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    emailPassLogIn(data.email, data.password);
  };
  return (
    <div>
      <section class="relative flex flex-wrap lg:h-screen lg:items-center">
        <div class="relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-full">
          <img
            class="absolute inset-0 object-cover w-full h-full"
            src={loginForm}
            alt=""
          />
        </div>
        <div class="w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
          <div class="max-w-lg mx-auto text-center">
            <h1 class="text-2xl font-bold sm:text-3xl">Login</h1>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            class="max-w-md mx-auto mt-8 mb-0 space-y-4"
          >
            <div class="relative">
              <input
                type="email"
                placeholder="Your email address"
                name="email"
                class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
              <span class="absolute inset-y-0 inline-flex items-center right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
            <div class="relative">
              <input
                type="password"
                placeholder="Your password"
                name="password"
                class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                    message:
                      "Minimum eight characters, at least one letter and one number",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            <div class="flex items-center justify-between">
              <button
                type="submit"
                class="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg"
              >
                Send
              </button>
              <p>
                Don't have an account?{" "}
                <Link to="/register" className="text-blue-800">
                  register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
