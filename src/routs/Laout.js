import React from "react";
import { Outlet, Link } from "react-router-dom";
function Laout() {
  return (
    <div>
      <Link to={'/'}>Home</Link>
      <Link to={"about"}>About</Link>
      <Link to={"info"}>Info</Link>
      <Outlet />
    </div>
  );
}

export default Laout;
