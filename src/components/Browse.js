
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryConatiner from "./SecondaryConatiner";
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
    return ( <div>
        <Header/>
        <MainContainer/>
        <SecondaryConatiner/>
    </div> );
}
 
export default Browse;