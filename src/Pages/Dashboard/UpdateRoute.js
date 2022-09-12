import React from "react";
import { useLocation } from "react-router-dom";

const UpdateRoute = () => {
  const location = useLocation();
  let routeNumber = location.state.routeNumber;
  console.log(routeNumber);
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default UpdateRoute;
