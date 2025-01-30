import { IMG_CDN } from "../utils/constant";

const Moviecard = ({poster_path}) => {
    return ( <div className="w-48 pr-4">
        <img src={IMG_CDN+poster_path} alt="Movie Card" />
    </div> );
}
 
export default Moviecard;