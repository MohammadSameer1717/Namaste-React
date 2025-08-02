import React from "react";
import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="error-page">
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="home-button">
        Go Back Home
      </Link>
      <h3>{err.statusText}</h3>
    </div>
  );
};

export default ErrorPage;