# Book My Show Clone

This is a Clone of Book My Show Web App using REACT

## Structure

Pages > Home
        Movie
        Play

Components > Cast
             Entertainment
             HeroCarousel
             MovieHero
             Navbar
             PaymentModal
             PlayFilters
             Poster
             PosterSlider
             
Context > MovieContext

Layout > DefaultLayout
         MovieLayout

### API Reference

The Movie DataBase

#### Commands

npx create-react-app .

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

"./src/**/*.{js,jsx,ts,tsx}" insert into content of tailwind.config.js

@tailwind base;
@tailwind components;
@tailwind utilities; insert into index.css

react stylesheet:
npm install react-slick (--save)or

npm install slick-carousel

In App.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

Axios:
npm i axios

headless UI:
npm install @headlessui/react

React Icons:
npm i react-icons

Browser Router:
npm i react-router-dom
import {BrowserRouter} from "react-router-dom"; in index.js

Routes:
import { Routes, Route } from 'react-router-dom'; in App.js
