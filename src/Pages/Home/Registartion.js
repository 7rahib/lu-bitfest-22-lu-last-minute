import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import loginForm from "../../Assets/Images/Home/LoginForm.jpg";

const Registartion = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data.email, data.fullname, data.username, data.number, data.occupation, data.pickup, data.route, data.id, data.batch, data.section, data.batch, data.dept, data.codename, data.designation)
  }
  return (
    <div>
      <section class="relative flex flex-wrap lg:h-screen lg:items-center">
        <div class="w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
          <div class="max-w-lg mx-auto text-center">
            <div class="max-w-lg mx-auto text-center">
              <h1 class="text-2xl font-bold sm:text-3xl">Register New Account</h1>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} class="max-w-md mx-auto mt-8 mb-0 space-y-4">
            <div class="relative">
              <input
                type="fullname"
                placeholder="Your fullname"
                name="fullname"
                class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                {...register("fullname", {
                  required: {
                    value: true,
                    message: "fullname is Required",
                  }
                })}
              />
              <label className="label">
                {errors.fullname?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.fullname.message}
                  </span>
                )}
              </label>
            </div>
            <div class="relative">
              <input
                type="username"
                placeholder="Your username"
                name="username"
                class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                {...register("username", {
                  required: {
                    value: true,
                    message: "username is Required",
                  }
                })}
              />
              <label className="label">
                {errors.username?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.username.message}
                  </span>
                )}
              </label>
            </div>
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
                type="number"
                placeholder="Your number"
                name="number"
                class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                {...register("number", {
                  required: {
                    value: true,
                    message: "number is Required",
                  }
                })}
              />
              <label className="label">
                {errors.number?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.number.message}
                  </span>
                )}
              </label>
            </div>
            <div className='mb-2'>
              <select {...register("occupation")} name="occupation" className="select w-full p-4 pr-12 text-xs border-gray-200 rounded-lg shadow-sm">
                <option disabled selected>Pick a occupation</option>
                <option>Student</option>
                <option>Faculty</option>
                <option>Staff</option>
              </select>
            </div>
            <div class="relative">
              <input
                type="pickup"
                placeholder="Your pickup"
                name="pickup"
                class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                {...register("pickup", {
                  required: {
                    value: true,
                    message: "pickup is Required",
                  }
                })}
              />
              <label className="label">
                {errors.pickup?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.pickup.message}
                  </span>
                )}
              </label>
            </div>
            <div class="relative">
              <input
                type="route"
                placeholder="Your route"
                name="route"
                class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                {...register("route", {
                  required: {
                    value: true,
                    message: "route is Required",
                  }
                })}
              />
              <label className="label">
                {errors.route?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.route.message}
                  </span>
                )}
              </label>
            </div>
            <div class="relative">
              <input
                type="id"
                placeholder="Your id"
                name="id"
                class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                {...register("id", {
                  required: {
                    value: true,
                    message: "id is Required",
                  }
                })}
              />
              <label className="label">
                {errors.id?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.id.message}
                  </span>
                )}
              </label>
            </div>
            <div class="relative">
              <input
                type="batch"
                placeholder="Your batch"
                name="batch"
                class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                {...register("batch", {
                  required: {
                    value: true,
                    message: "batch is Required",
                  }
                })}
              />
              <label className="label">
                {errors.batch?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.batch.message}
                  </span>
                )}
              </label>
            </div>
            <div class="relative">
              <input
                type="section"
                placeholder="Your section"
                name="section"
                class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                {...register("section", {
                  required: {
                    value: true,
                    message: "section is Required",
                  }
                })}
              />
              <label className="label">
                {errors.section?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.section.message}
                  </span>
                )}
              </label>
            </div>
            <div class="relative">
              <input
                type="dept"
                placeholder="Your dept"
                name="dept"
                class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                {...register("dept", {
                  required: {
                    value: true,
                    message: "dept is Required",
                  }
                })}
              />
              <label className="label">
                {errors.dept?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.dept.message}
                  </span>
                )}
              </label>
            </div>
            <div class="relative">
              <input
                type="codename"
                placeholder="Your codename"
                name="codename"
                class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                {...register("codename", {
                  required: {
                    value: true,
                    message: "codename is Required",
                  }
                })}
              />
              <label className="label">
                {errors.codename?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.codename.message}
                  </span>
                )}
              </label>
            </div>
            <div class="relative">
              <input
                type="designation"
                placeholder="Your designation"
                name="designation"
                class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                {...register("designation", {
                  required: {
                    value: true,
                    message: "designation is Required",
                  }
                })}
              />
              <label className="label">
                {errors.designation?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.designation.message}
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
                register
              </button>
              <p>Already have an account? <Link to="/" className="text-blue-800">Login</Link></p>
            </div>
          </form>
        </div>
        <div class="relative w-full h-full sm:h-96 lg:w-1/2 lg:h-full">
          <img
            class="absolute inset-0 object-cover w-full h-full"
            src={loginForm}
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default Registartion;
