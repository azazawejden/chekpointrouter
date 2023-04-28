import React from "react";
import { Link } from "react-router-dom";
function MovieCard({ title, description, posterURL, rating,trailerLink }) {
  return (
    <div>
      <h2>{title}</h2>
      <img src={posterURL} alt={title} />
      <p>{description}</p>
      <p>Rating: {rating}</p>
      <iframe
        src={trailerLink}
        title={`${title} Trailer`}
        width="560"
        height="315"
        frameBorder="0"
        allowFullScreen
      ></iframe>
     
    </div>
  );
}
export default MovieCard;
