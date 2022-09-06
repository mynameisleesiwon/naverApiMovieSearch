import React from "react";
import { Routes, Route } from "react-router-dom";
import Search_Movie from "./routes/Search_Movie";

const App = () => {
  return (
    <Routes>
      <Route path="/" exact={true} element={<Search_Movie />} />
    </Routes>
  );
};

export default App;
