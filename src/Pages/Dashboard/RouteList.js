import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import RouteListRow from "./RouteListRow";

const RouteList = () => {
  const {
    data: routes,
    isLoading,
    refetch,
  } = useQuery("routes", () =>
    fetch("http://localhost:5000/route").then((res) => {
      refetch();
      return res.json();
    })
  );
  return (
    <div>
      <div className="overflow-x-auto">
        <h3 className="text-3xl text-center">Routes</h3>
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>Route Number</th>
              <th>Starting Point</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {routes?.data?.map((route, index) => (
              <RouteListRow
                key={routes._id}
                route={route}
                refetch={refetch}
                index={index}
              ></RouteListRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RouteList;
