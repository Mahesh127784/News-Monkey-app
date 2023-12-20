// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import LoadingBar from "react-top-loading-bar"; //for install---> npm i react-top-loading-bar

export default function App() {
  document.body.style.backgroundColor = "Gainsboro";
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);

  return (
    <Router>
      <LoadingBar color="#f11946" progress={progress} />
      <Navbar />
      <Routes>
        <Route
          // exact
          path="/"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              newsType={"Top Headlines"}
              pageSize={8}
              country="in"
              category="general"
            />
          }
        ></Route>
        <Route
          exact
          path="/general"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              newsType={"Top Headlines"}
              pageSize={8}
              key="general"
              country="in"
              category="general"
            />
          }
        ></Route>
        <Route
          exact
          path="/business"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              newsType={"Business"}
              pageSize={8}
              key="business"
              country="in"
              category="business"
            />
          }
        ></Route>
        <Route
          exact
          path="/entertainment"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              newsType={"Entertainment"}
              pageSize={8}
              country="in"
              key="entertainment"
              category="entertainment"
            />
          }
        ></Route>
        <Route
          exact
          path="/health"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              newsType={"Health"}
              pageSize={8}
              key="health"
              country="in"
              category="health"
            />
          }
        ></Route>
        <Route
          exact
          path="/science"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              newsType={"Science"}
              pageSize={8}
              key="science"
              country="in"
              category="science"
            />
          }
        ></Route>
        <Route
          exact
          path="/sports"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              newsType={"Sports"}
              pageSize={8}
              key="sports"
              country="in"
              category="sports"
            />
          }
        ></Route>
        <Route
          exact
          path="/technology"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              newsType={"Technology"}
              pageSize={8}
              key="technology"
              country="in"
              category="technology"
            />
          }
        ></Route>
      </Routes>
    </Router>
  );
}
