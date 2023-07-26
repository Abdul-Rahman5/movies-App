import React from "react";
import { Link } from "react-router-dom";
import avatar from "../../av.png";
export default function MediaItem({ movie }) {
  return (
    <>
      <div className="col-md-2 mt-5">
        <Link to={`movieDetals/${movie.id}/${movie.media_type}`}>
          <div className="movie position-relative">
            {movie.poster_path ? (
              <img
                className="w-100 rounded-3"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
            ) : (
              ""
            )}
            {movie.profile_path ? (
              <img
                className="w-100  rounded-3"
                src={`https://image.tmdb.org/t/p/w500${movie.profile_path}`}
              />
            ) : (
              ""
            )}
            {!movie.poster_path && !movie.profile_path ? (
              <img className=" rounded-3 w-100" src={avatar} alt="" />
            ) : (
              ""
            )}
            <h6 className="h6 my-2 text-muted fa-bolder">
              {movie.title}
              {movie.name}
            </h6>
            {movie.vote_average ? (
              <div className="vote p-2 text-center  rounded-3  position-absolute top-0 end-0">
                {movie.vote_average?.toFixed(1)}
              </div>
            ) : (
              ""
            )}
          </div>
        </Link>
      </div>
    </>
  );
}
