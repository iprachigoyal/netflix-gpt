import Moviecard from "./MovieCard";

const MovieList = ({ title, movies }) => {

  return (
    <div className="px-4 ">
        <h1 className=" text-lg md:text-2xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies && movies?.map((movie) => (
            <Moviecard key={movie.id} poster_path={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
