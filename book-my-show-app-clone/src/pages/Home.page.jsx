import axios from 'axios';
import React, { useEffect, useState } from 'react'

//Layout Hoc
import DefaultLayoutHoc from "../layout/Default.layout";

//Components
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.Component";
import PosterSlider from '../components/PosterSlider/PosterSlider.Components';
import EntertainmentCardSlider from '../components/Entertainment/EntertainmentCard.Component';


const HomePage = () => {
  const [recommendedMovies, setRecommendedMovies] = useState();
  const [onlineStreamEvents, setOnlineStreamEvents] = useState();
  const [premierMovies, setPremierMovies] = useState();

  useEffect(() => {
    const requestTopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=38858108da13da79e7cf650a5cd7c46c"
      );
      setRecommendedMovies(getTopRatedMovies.data.results);
    };
    requestTopRatedMovies();
  }, []);

  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=38858108da13da79e7cf650a5cd7c46c"
      );
      setPremierMovies(getPopularMovies.data.results);
    };
    requestPopularMovies();
  }, []);

  useEffect(() => {
    const requestUpcomingMovies = async () => {
      const getUpcomingMovies = await axios.get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=38858108da13da79e7cf650a5cd7c46c"
      );
      setOnlineStreamEvents(getUpcomingMovies.data.results);
    };
    requestUpcomingMovies();
  }, []);

  return (
    <>
      <HeroCarousel />

      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
          The Best of Entertainment
        </h1>
        <EntertainmentCardSlider />
      </div>

      <div className="container mx-auto px-4 md:px-12m my-8">
        <PosterSlider
          title="Recommended Movies"
          subtitle="List of recommended Movies"
          posters={recommendedMovies}
          isDark={false}
        />
      </div>

      <div className="bg-slate-800 py-12">
        <div className="container mx-auto px-4 md:px-12m my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img
              src=""
              
              alt="Rupay"
              // https://th.bing.com/th/id/R.48eaeab4cb35b98326e25a71479a5d19?rik=BTpamseHj921GA&riu=http%3a%2f%2fegov.eletsonline.com%2fwp-content%2fuploads%2f2015%2f03%2fRuPay.svg_.png&ehk=cXM%2bS%2f1N%2fCAoeUqAw5wMHW8czKqh3G%2bG%2fL%2bjOvXQeyk%3d&risl=&pid=ImgRaw&r=0
              className="w-full h-full"
            ></img>
          </div>

          <PosterSlider
            title="Premiers"
            subtitle="Brand new releases every Friday"
            posters={premierMovies}
            isDark={true}
          />
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-12m my-8">
        <PosterSlider
          title="Online Streaming Events"
          subtitle="Online Streaming Events"
          posters={onlineStreamEvents}
          isDark={false}
        />
      </div>
    </>
  );
};

export default DefaultLayoutHoc(HomePage);

