import React from "react";
import "./App.css";
import Feeds from "./Feeds";
import Header from "./Header";
import PostField from "./PostField";

function App() {
  return (
    <div className="app">
      <Header />
      <PostField />
      <Feeds />
    </div>
  );
}

export default App;
