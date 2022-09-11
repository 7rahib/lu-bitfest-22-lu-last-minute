import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("");
  const [userData, setUserData] = useState([]);
  const [route, setRoute] = useState("");
  let localUser = localStorage.getItem("username");

  useEffect(() => {
    fetch(`http://localhost:5000/users/${localUser}/info`)
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      });
  }, []);
  //   console.log(userData);
  //   console.log(userData?.regularRoute?.routeNumber);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    if (userData.role === "student") {
      data.dept = "0";
      data.codename = "0";
      data.designation = "0";
    }
    if (userData.role === "faculty") {
      data.batch = 0;
      data.section = "0";
    }
    const updateProfile = {
      displayName: data.fullname,
      username: userData.username,
      email: userData.email,
      contactNumber: data.number,
      role: userData.role,
      oid: parseInt(userData.id),
      regularRoute: {
        routeNumber: parseInt(data.route),
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
    fetch(`http://localhost:5000/users`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProfile),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        alert("updated");

        navigate("/");
      });
  };

  return (
    <div>
      <section class="relative flex flex-row lg:items-center justify-center">
        <div class="w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
          <div class="max-w-lg mx-auto text-center">
            <div class="max-w-lg mx-auto text-center">
              <h1 class="text-2xl font-bold sm:text-3xl">Update Account</h1>
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
                onChange={(e) => setRoute(e.target.value)}
              >
                <option value="">Update Your Route</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            {route === "1" ? (
              <div>
                {" "}
                <select
                  {...register("pickup")}
                  name="pickup"
                  className="select w-full p-4 pr-12 text-xs border-gray-200 rounded-lg shadow-sm"
                >
                  <option value="">Update Your Stopage</option>
                  <option>Tillagor</option>
                  <option>Route 2</option>
                  <option>Route 3</option>
                  <option>Route 4</option>
                </select>
              </div>
            ) : route === "2" ? (
              <div>
                {" "}
                <select
                  {...register("pickup")}
                  name="pickup"
                  className="select w-full p-4 pr-12 text-xs border-gray-200 rounded-lg shadow-sm"
                >
                  <option value="">Update Your Stopage</option>
                  <option>Bondor</option>
                  <option>Route 2</option>
                  <option>Route 3</option>
                  <option>Route 4</option>
                </select>
              </div>
            ) : route === "3" ? (
              <div>
                {" "}
                <select
                  {...register("pickup")}
                  name="pickup"
                  className="select w-full p-4 pr-12 text-xs border-gray-200 rounded-lg shadow-sm"
                >
                  <option value="">Update Your Stopage</option>
                  <option>Am</option>
                  <option>Route 2</option>
                  <option>Route 3</option>
                  <option>Route 4</option>
                </select>
              </div>
            ) : route === "4" ? (
              <div>
                {" "}
                <select
                  {...register("pickup")}
                  name="pickup"
                  className="select w-full p-4 pr-12 text-xs border-gray-200 rounded-lg shadow-sm"
                >
                  <option value="">Update Your Stopage</option>
                  <option>Shibgonj</option>
                  <option>Route 2</option>
                  <option>Route 3</option>
                  <option>Route 4</option>
                </select>
              </div>
            ) : (
              ""
            )}

            {userData.role === "student" ? (
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
            ) : userData.role === "faculty" ? (
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
            ) : userData.role === "Staff" ? (
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
                  Update
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default UpdateProfile;
