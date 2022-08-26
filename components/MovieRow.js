import React from 'react'

function MovieRow({titles}) {
//    const genre = titles.genres.map((title)=> <h2 key={title.id}>{title.name}</h2>)

const filteredGenres = titles.genres.filter((genre)=> genre.id === 28  || genre.id === 16 || genre.id === 53);

console.log(filteredGenres)
const genre = filteredGenres.map((genre) => <h2 key={genre.id}>{genre.name}</h2>)
  return (
    <div>
        <section>{genre}</section>
    </div>
  )
}

export default MovieRow