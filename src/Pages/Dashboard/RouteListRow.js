import React from "react";
import { Link, useNavigate } from "react-router-dom";

const RouteListRow = ({ route, refetch }) => {
  const navigate = useNavigate();
  const { _id, routeNumber } = route;
  // const updateRoute = (routeNumber) => {
  //   console.log(routeNumber);
  //   navigate("/updateRoute", { state: { routeNumber: routeNumber } });
  // };
  const deleteRoute = (routeNumber) => {
    fetch(`http://localhost:5000/route/${routeNumber}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
        }
      });
  };
  return (
    <tr>
      <td>{route?.routeNumber}</td>
      <td>{route?.location?.label}</td>
      <td>
        <Link
          to="/updateRoute"
          // onClick={() => updateRoute(routeNumber)}
          className="btn btn-xs btn-success"
        >
          Update
        </Link>
      </td>
      <td>
        <button
          onClick={() => deleteRoute(routeNumber)}
          className="btn btn-xs btn-error"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default RouteListRow;
