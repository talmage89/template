import * as React from "react";
import "./Home.scss";

export const Home = () => {
  return (
    <div className="Home flex-column-center">
      <h1>Home page</h1>
      <p>This is the default home page.</p>
      <span className="flex">
        <p>See template code base </p>
        <a href="https://github.com/talmage89/template" target="_blank">here</a>
      </span>
    </div>
  );
};
