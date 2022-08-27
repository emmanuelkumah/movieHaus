import React from "react";
import Image from "next/image";

const baseURL = "https://image.tmdb.org/t/p/original/";

function MovieRow({ movies, genre }) {
  const crime = movies.results.map((movie) => (
    <div key={movie.id}>
      <Image
        src={`${baseURL}${movie.poster_path}`}
        alt={movie.title}
        width={800}
        height={500}
      />
    </div>
  ));
  return (
    <div>
      <section>
        <h2>{genre}</h2>
        <div className="flex flex-row w-100">{crime}</div>
      </section>
    </div>
  );
}

export default MovieRow;
