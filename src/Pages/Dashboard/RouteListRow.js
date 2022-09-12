import React from "react";

const RouteListRow = ({ route, refetch }) => {
  const { _id, routeNumber } = route;
  const updateRoute = (routeNumber) => {};
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
        <button onClick={updateRoute} className="btn btn-xs btn-success">
          Update
        </button>
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
