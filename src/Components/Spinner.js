import React from "react";
import loading from "./Loading.gif";
const Spinner = () => {
  return (
    <div className="text-center">
      <img
        style={{ height: "50px", margin: "30px" }}
        src={loading}
        alt="Loading"
      />
    </div>
  );
};
export default Spinner;
