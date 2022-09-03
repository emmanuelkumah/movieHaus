import { useState, useEffect } from "react";
import Image from "next/image";
const baseURL = "https://image.tmdb.org/t/p/original/";

function MovieBanner({ banner }) {
  const [movieTitle, setMovieTitle] = useState({
    title: "",
    backdrop: "",
    overview: "",
  });

  useEffect(() => {
    const randNo = Math.floor(Math.random() * banner.results.length);

    console.log(banner.results[randNo]);
    setMovieTitle((movieTitle) => ({
      ...movieTitle,
      title: banner.results[randNo].title,
      backdrop: banner.results[randNo].backdrop_path,
      overview: banner.results[randNo].overview,
    }));
  }, []);
  return (
    <section className="relative">
      <Image
        src={`${baseURL}${movieTitle.backdrop}`}
        alt="backgroundIng"
        width={16}
        height={8}
        layout="responsive"
        objectFit="cover"
      />
      <div className="absolute top-10 left-5 mt-10">
        <h1 className="text-6xl py-6">{movieTitle.title}</h1>
        {/* <p className="pr-30">{movieTitle.overview}</p> */}
        <div>
          <button>Action</button>
          <button>Drama</button>
        </div>
      </div>
    </section>
  );
}

export default MovieBanner;
