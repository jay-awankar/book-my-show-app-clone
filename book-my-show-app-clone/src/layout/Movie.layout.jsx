import React from "react";
import MovieNavbar from "../components/Navbar/MovieNavbar.Components";

const MovieLayoutHoc =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <MovieNavbar />
        <Component {...props} />
        <div>Footer</div>
      </div>
    );
  };

export default MovieLayoutHoc;
