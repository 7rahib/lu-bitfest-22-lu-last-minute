import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import UseAuth from "../../Context/UseAuth";
import { useQuery } from 'react-query';
import { async } from "@firebase/util";

const Registartion = () => {
  const navigate = useNavigate();
  const { emailPassSignIn } = UseAuth();
  const [role, setRole] = useState("");
  const [route, setRoute] = useState();
  const [stopages, setStopages] = useState([]);

  const { data: routes, isLoading, refetch } = useQuery('routes', () => fetch("http://localhost:5000/route",).then(res => {
    refetch()
    const data = res.json();
    return data;
  }))
  const fetchStoppage = (routeNumber) => {
    fetch(`http://localhost:5000/route/stoppage/${routeNumber}`).then((res) => res.json()).then((data) => {

      setStopages(data);

    });
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    // emailPassSignIn(data.email, data.password);
    if (role === "student") {
      data.dept = "0";
      data.codename = "0";
      data.designation = "0";
    }
    if (role === "faculty") {
      data.batch = 0;
      data.section = "0";
    }

    const newUser = {
      displayName: data.fullname,
      username: data.username,
      email: data.email,
      contactNumber: data.number,
      role: role,
      oid: parseInt(data.id),
      regularRoute: {
        routeNumber: parseInt(route),
        stoppage: data.pickup,
      },

      student: {
        batch: parseInt(data.batch),
        section: data.section,
      },
      teacher: {
        department: data.dept,
        codeName: data.codename,
        designation: data.designation,
      },
    };

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...newUser }),
    })
      .then((res) => res.json())
      .then((fetchedData) => {
        if (fetchedData._id) {
          console.log(fetchedData);
          alert("collected");
          emailPassSignIn(fetchedData.email, data.password);
          localStorage.setItem("username", data.username);

          navigate("/");
        } else {
          alert("not collected");
        }
      });
  };
  return (
    <div className="">
      <section class="relative flex flex-row lg:items-center justify-center">
        <div class="w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
          <div class="max-w-lg mx-auto text-center">
            <div class="max-w-lg mx-auto text-center">
              <h1 class="text-2xl font-bold sm:text-3xl">
                Register New Account
              </h1>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            class="max-w-md mx-auto mt-8 mb-0 space-y-4"
          >
            <div class="relative">
              <input
                type="text"
                placeholder="Full Name"
                name="fullname"
                class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                {...register("fullname", {
                  required: {
                    value: true,
                    message: "Fullname is Required",
                  },
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
                type="text"
                placeholder="User Name"
                name="username"
                class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                {...register("username", {
                  required: {
                    value: true,
                    message: "username is Required",
                  },
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
                placeholder="Email Address"
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
                placeholder="Number as (01xxxxxxxxx) "
                name="number"
                class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                {...register("number", {
                  required: {
                    value: true,
                    message: "number is Required",
                  },
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

            <div className="mb-2">
              <select
                {...register("route")}
                name="route"
                className="select w-full p-4 pr-12 text-xs border-gray-200 rounded-lg shadow-sm"
                onChange={async (e) => {
                  const rn = parseInt(e.target.value);
                  fetchStoppage(rn)
                  setRoute(e.target.value);
                }}
              >
                <option value="">Select your route</option>
                {
                  routes?.data?.map((route, index) => {
                    return <option>{route?.routeNumber}</option>
                  })
                }
              </select>
            </div>
            <div>
              {" "}
              <select
                {...register("pickup")}
                name="pickup"
                className="select w-full p-4 pr-12 text-xs border-gray-200 rounded-lg shadow-sm"
              >
                <option value="">Select Stopage</option>
                {
                  stopages?.map((stoppage) => {
                    return <option>{stoppage?.label}</option>
                  })
                }
              </select>
            </div>

            <div className="mb-2">
              <select
                name="occupation"
                value={role}
                onChange={(e) => setRole(e.target.value.toLowerCase())}
                className="select w-full p-4 pr-12 text-xs border-gray-200 rounded-lg shadow-sm"
              >
                <option value="">Register as a</option>
                <option>Student</option>
                <option>Faculty</option>
                <option>Staff</option>
              </select>
            </div>
            {role === "student" ? (
              <div>
                <div class="relative">
                  <input
                    type="text"
                    placeholder="Student ID"
                    name="id"
                    class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    {...register("id", {
                      required: {
                        value: true,
                        message: "Student ID is Required",
                      },
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
                    type="number"
                    placeholder="Batch Number"
                    name="batch"
                    class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    {...register("batch", {
                      required: {
                        value: true,
                        message: "Batch Number is Required",
                      },
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
                    type="text"
                    placeholder="Section"
                    name="section"
                    class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    {...register("section", {
                      required: {
                        value: true,
                        message: "Section is Required",
                      },
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
              </div>
            ) : role === "faculty" ? (
              <div>
                <div class="relative">
                  <input
                    type="text"
                    placeholder="Organisational ID"
                    name="id"
                    class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    {...register("id", {
                      required: {
                        value: true,
                        message: "Organisational ID is Required",
                      },
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
                    type="text"
                    placeholder="Department"
                    name="dept"
                    class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    {...register("dept", {
                      required: {
                        value: true,
                        message: "Department is Required",
                      },
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
                    type="text"
                    placeholder="Codename"
                    name="codename"
                    class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    {...register("codename", {
                      required: {
                        value: true,
                        message: "codename is Required",
                      },
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
                    type="text"
                    placeholder="Designation"
                    name="designation"
                    class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    {...register("designation", {
                      required: {
                        value: true,
                        message: "Designation is Required",
                      },
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
              </div>
            ) : role === "Staff" ? (
              <div>
                {" "}
                <div class="relative">
                  <input
                    type="text"
                    placeholder="Staff ID"
                    name="staffId"
                    class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    {...register("staffId", {
                      required: {
                        value: true,
                        message: "Staff ID is Required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.staffId?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.staffId.message}
                      </span>
                    )}
                  </label>
                </div>
              </div>
            ) : (
              ""
            )}

            <div class="relative">
              <input
                type="password"
                placeholder="Password"
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
            <div class="relative">
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                {...register("confirmPassword", {
                  required: {
                    value: true,
                    message: "Confirm Password is Required",
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
                {errors.confirmPassword?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.confirmPassword.message}
                  </span>
                )}
                {errors.confirmPassword?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </label>
            </div>
            <div class="flex items-center justify-between">
              <button
                type="submit"
                class="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg"
              >
                Register
              </button>
              <p>
                Already have an account?{" "}
                <Link to="/" className="text-blue-800">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
        {/* <div class="relative w-full h-full sm:h-96 lg:w-1/2 lg:h-full">
          <img
            class="absolute inset-0 object-cover w-full h-full"
            src={loginForm}
            alt=""
          />
        </div> */}
      </section>
    </div>
  );
};

export default Registartion;
