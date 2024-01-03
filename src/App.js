// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import LoadingBar from "react-top-loading-bar"; //for install---> npm i react-top-loading-bar

export default function App() {  document.body.style.backgroundColor = "Gainsboro";
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);
  const newsType = [
    general,
    business,
    entertainment,
    health,
    science,
    sports,
    technology,
  ];
  const capitalizer = (news) =>
    news.charAt(0).toUpperCase() + news.slice(1, news.length);

  return (
    <Router>
      <LoadingBar color="#f11946" progress={progress} />
      <Navbar />
      <Routes>
        { 
        newsType.map((news) => {
          return (
            <Route
              exact
              path={`/${news}`}
              element={
                <News
                  setProgress={() => capitalizer(news)}
                  apiKey={apiKey}
                  newsType={"Top Headlines"}
                  pageSize={8}
                  key={news}
                  country="in"
                  category={news}
                />
              }

          )
        }
        )
      }
      </Routes>
    </Router>
  );}
