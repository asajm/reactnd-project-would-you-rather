import React from "react";
import { useLocation } from 'react-router-dom'

export default function NoFound() {
  let location = useLocation();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="error-template text-center mt-5">
            <h1>Oops!</h1>
            <div className="error-details">
              Sorry, an error has occured, Requested page not found!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}