import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import loginForm from "../../Assets/Images/Home/LoginForm.jpg";
import UseAuth from "../../Context/UseAuth";

const Login = () => {
  const [userData, setUserData] = useState([]);
  const { emailPassLogIn, user } = UseAuth();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [email, setEmail] = useState();

  const onSubmit = (data) => {
    fetch(`http://localhost:5000/users/${data.username}/info`)
      .then((res) => res.json())
      .then((data) => {
        setEmail(data.email);
        setUserData(data)
      });
    emailPassLogIn(email, data.password);
  };

  // useEffect(() => {

  //   fetch(`http://localhost:5000/users/${user.username}/info`, {
  //     method: 'GET',
  //     headers: {
  //       "content-type": "application/json",
  //     }
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUserData(data)
  //     })
  // }, [user.username])

  console.log(userData);


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

        {(user.email) ?
          <div className="flex justify-center">
            <article class="p-4 border rounded-xl w-96 sm:mt-10 lg:ml-36">
              <div class="flex items-center">
                <img
                  src="https://unavatar.now.sh/twitter/itsmarkmead"
                  alt="Mark Mead"
                  class="w-16 h-16 rounded-full"
                />

                <div class="ml-3">
                  <h5 class="text-lg font-medium">{userData?.displayName}</h5>
                  <div class="flow-root">
                    <ul class="flex flex-wrap -m-1">
                      <li class="p-1 leading-none">
                        <div
                          class="text-xs font-medium"
                        >
                          {userData?.student.batch}
                        </div>
                      </li>

                      <li class="p-1 leading-none">
                        <div
                          class="text-xs font-medium"
                        >
                          {userData?.student.section}
                        </div>
                      </li>

                      <li class="p-1 leading-none">
                        <div
                          class="text-xs font-medium "
                        >{userData?.role}</div
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <ul class="mt-4 space-y-2">
                <li>
                  <div
                    class="block h-full p-4 border rounded-lg"
                  >
                    <h5 class="font-medium ">Stoppage: {userData?.regularRoute.stoppage}</h5>
                  </div>
                </li>

                <li>
                  <div
                    class="block h-full p-4 border rounded-lg"
                  >
                    <h5 class="font-medium ">Phone Number: {userData?.contactNumber}</h5>
                    <h5 class="font-medium ">Email: {userData?.email}</h5>

                    <button class="btn btn-sm mt-5">
                      Update your profile
                    </button>
                  </div>
                </li>
              </ul>
            </article>
          </div>
          :
          <div><div class="w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
            <div class="max-w-lg mx-auto text-center">
              <h1 class="text-2xl font-bold sm:text-3xl">Login</h1>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              class="max-w-md mx-auto mt-8 mb-0 space-y-4"
            >
              <div class="relative">
                <input
                  type="text"
                  placeholder="Your email address"
                  name="username"
                  class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  {...register("username", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
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
          </div></div>
        }
      </section>
    </div>

  );
};

export default Login;
