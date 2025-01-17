import React from "react";
import MovieNavbarComponents from "../components/Navbar/MovieNavbar.Components";

const MovieLayoutHoc =
  (ParentComponent) =>
  ({ ...Props }) => {
    return (
      <>
        <MovieNavbarComponents />
        <ParentComponent {...Props} />
        <div>Footer</div>
      </>
    );
  };

export default MovieLayoutHoc;
