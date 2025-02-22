import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddBusInventory = () => {
  const [isActive, setIsActive] = useState();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    let isActiveBool;
    if (isActive === "Yes") {
      isActiveBool = 1;
    } else {
      isActiveBool = 0;
    }
    const newBus = {
      codename: data.codename,
      licenseNum: data.licence,
      capacity: data.capacity,
      driver: {
        Name: data.driverName,
        contact: data.driverContact,
      },
      isActive: isActiveBool,
    };
    fetch("http://localhost:5000/bus", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...newBus }),
    })
      .then((res) => res.json())
      .then((fetchedData) => {
        if (fetchedData._id) {
          console.log(fetchedData);
          alert("collected");
        } else {
          alert("not collected");
        }
      });
  };

  return (
    <div className="flex flex-col mx-auto w-1/2">
      <div>
        <div>
          <p className="text-xl font-semibold">Add new bus to inventory</p>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                type="text"
                placeholder="Bus Code Name"
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
            <div>
              <input
                type="text"
                placeholder="Licence Number"
                name="licence"
                class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                {...register("licence", {
                  required: {
                    value: true,
                    message: "Licence is Required",
                  },
                })}
              />
              <label className="label">
                {errors.licence?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.licence.message}
                  </span>
                )}
              </label>
            </div>
            <div>
              <input
                type="number"
                placeholder="Seat Capacity"
                name="capacity"
                class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                {...register("capacity", {
                  required: {
                    value: true,
                    message: "capacity is Required",
                  },
                })}
              />
              <label className="label">
                {errors.capacity?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.capacity.message}
                  </span>
                )}
              </label>
            </div>
            <div>
              <select
                value={isActive}
                onChange={(e) => setIsActive(e.target.value)}
                name="isActive"
                className="select w-full p-4 pr-12 text-xs border-gray-200 rounded-lg shadow-sm"
              >
                <option disabled selected>
                  Is the bus available
                </option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div>
              <input
                type="text"
                placeholder="Driver Name"
                name="driverName"
                class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                {...register("driverName", {
                  required: {
                    value: true,
                    message: "driverName is Required",
                  },
                })}
              />
              <label className="label">
                {errors.driverName?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.driverName.message}
                  </span>
                )}
              </label>
            </div>
            <div>
              <input
                type="number"
                placeholder="Driver Contact Number"
                name="driverContact"
                class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                {...register("driverContact", {
                  required: {
                    value: true,
                    message: "driverContact is Required",
                  },
                })}
              />
              <label className="label">
                {errors.driverContact?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.driverContact.message}
                  </span>
                )}
              </label>
            </div>
            <button
              type="submit"
              class="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBusInventory;
