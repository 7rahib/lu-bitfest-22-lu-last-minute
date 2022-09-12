import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { TimePicker } from "antd";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const Transports = () => {
  const navigate = useNavigate();
  const [time, setTime] = useState();
  const onChange = (time, timeString) => {
    // console.log(time._d, timeString);
    const x = new Date(time?._d);
    setTime(Math.floor(x));
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [route, setRoute] = useState();

  const {
    data: routes,
    isLoading,
    refetch,
  } = useQuery("routes", () =>
    fetch("http://localhost:5000/route").then((res) => {
      refetch();
      const data = res.json();
      return data;
    })
  );

  const onSubmit = (data) => {
    const newDemand = {
      startTimes: time,
      numOfStudents: parseInt(data.numOfStudent),
      routeNumber: parseInt(data.route),
    };
    console.log(newDemand);
    fetch("http://localhost:5000/transport", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...newDemand }),
    })
      .then((res) => res.json())
      .then((fetchedData) => {
        console.log(fetchedData);
        if (fetchedData._id) {
          alert("collected");
        } else {
          alert("not collected");
        }
      });
  };

  return (
    <div className="w-1/2 mx-auto">
      <h3 className="text-2xl text-center">Transport Demand</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <input
            {...register("numOfStudent")}
            type="number"
            placeholder="Number of students"
            className="input input-bordered"
          />
        </div>

        <div className="mb-2">
          <select
            {...register("route")}
            name="route"
            className="select w-full p-4 pr-12 text-xs border-gray-200 rounded-lg shadow-sm"
            onChange={async (e) => {
              const rn = parseInt(e.target.value);
              setRoute(e.target.value);
            }}
          >
            <option value="">Select your route</option>
            {routes?.data?.map((route, index) => {
              return <option>{route?.routeNumber}</option>;
            })}
          </select>
        </div>
        <div>
          <TimePicker
            onChange={onChange}
            defaultOpenValue={moment("00:00:00", "HH:mm:ss")}
            className="w-full font-xl"
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  );
};

export default Transports;
