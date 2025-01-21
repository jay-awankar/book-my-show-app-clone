import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import { FaCcVisa, FaCcApplePay } from "react-icons/fa"
import PosterSlider from "../components/PosterSlider/PosterSlider.Components";
import MovieHero from "../components/MovieHero/MovieHero.Component";
//Layout Hoc
import MovieLayoutHoc from "../layout/Movie.layout";
//Context
import MovieContext from "../context/Movie.context";


const MoviePage = () => {
  const { id } = useParams();

  const { movie, setMovie } = useContext(MovieContext)

  const [cast, setCast] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([])
  const [similarMovies, setSimilarMovies] = useState([])

  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(`/movie/${id}/credits`);
      setCast(getCast.data.cast);
    };
    requestCast();
  }, [id]);

  useEffect(() => {
    const requestSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
      setSimilarMovies(getSimilarMovies.data.results);
    };
    requestSimilarMovies();
  }, [id]);

  useEffect(() => {
    const requestRecommededMovies = async () => {
      const getRecommendedMovies = await axios.get(
        `/movie/${id}/recommendations`
      );
      setRecommendedMovies(getRecommendedMovies.data.results);
    };
    requestRecommededMovies();
  }, [id]);

  useEffect(() => {
    const requestMovie = async () => {
      const getMovieDate = await axios.get(`/movie/${id}`);
      setMovie(getMovieDate.data.cast);
    };
    requestMovie();
  }, [id]);

  const settingsCast = {}

  const settings = {}
  return (
    <>
    <MovieHero />
      <div className="my-12 container px-4 lg-ml-20 lg:w-2/1">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-gray-800 font-bold gap-3 text-2xl">
            About the movie
          </h1>
          <p>{movie.overview}</p>
        </div>
        <div classname="my-8">
          <hr />
        </div>
      </div>
    </>
  );
};

export default MovieLayoutHoc(MoviePage);
