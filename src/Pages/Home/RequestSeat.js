import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { TimePicker } from "antd";

import moment from "moment";

const RequestSeat = () => {
  const [time, setTime] = useState();
  const onChange = (time, timeString) => {
    // console.log(time._d, timeString);
    const x = new Date(time?._d);
    console.log(Math.floor(x));
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
    console.log(data);
  };
  return (
    <div>
      <div className="w-1/4 mx-auto mt-20">
        <h3 className="text-2xl text-center">Request Seat</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
          <div className="form-control">
            <input
              {...register("startTime")}
              type="text"
              placeholder="Start Time"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Add</button>
          </div>
        </form>
      </div>
      <div>
        <TimePicker
          onChange={onChange}
          defaultOpenValue={moment("00:00:00", "HH:mm:ss")}
        />
      </div>
    </div>
  );
};

export default RequestSeat;
