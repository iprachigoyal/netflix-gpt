import { IMG_CDN } from "../utils/constant";

const Moviecard = ({poster_path}) => {
    if(!poster_path)return null;
    return ( <div className=" w-36 md:w-48 pr-4">
        <img src={IMG_CDN+poster_path} alt="Movie Card" />
    </div> );
}
 
export default Moviecard;