import React, { useState } from "react";
import "./main.css";
export function Main() {

  return (
    <>
      <div className="main_container">
        <div className="text_container">
          <h1>
            Submit Your Letter to Santa!
          </h1>
          <p>Just hopping you've been good this year</p>
        </div>

        <div className="background_forms">
          <img src="./tree.svg" alt="tree" className="tree_decoration" />
          <img src="./ho-ho-ho.svg" alt="ho-ho-ho" className="hohoho_decoration" />
        </div>
      </div>
    </>
  );
}
