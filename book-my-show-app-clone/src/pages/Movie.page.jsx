import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

//Layout Hoc
import MovieLayoutHoc from "../layout/Movie.layout";

const MoviePage = () => {
  const { id } = useParams();

  const [cast, setCast] = useState();

  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(`/movie/${id}/credits`);
      setCast(getCast.data.cast);
    };
    requestCast();
  }, []);
  return <div>MoviePage</div>;
};

export default MovieLayoutHoc(MoviePage);
