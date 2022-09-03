import React from "react";
import Image from "next/image";
const baseURL = "https://image.tmdb.org/t/p/original/";

function MovieRow({ movies, genre }) {
  const crime = movies.results.map((movie) => (
    <div key={movie.id}>
      <Image
        src={`${baseURL}${movie.poster_path}`}
        alt={movie.title}
        width={150}
        height={350}
        layout="fixed"
      />
    </div>
  ));
  return (
    <div>
      <section>
        <h2 className="text-2xl py-10">{genre}</h2>
        <div className="flex flex-row w-100 gap-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide whitespace-nowrap rounded-2xl ">
          {crime}
        </div>
      </section>
    </div>
  );
}

export default MovieRow;
