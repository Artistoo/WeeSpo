import { loader } from "../assets";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
const Loader = ({title}) => {
  return(
    <div className="w-full flex justify-center items-center flex-col  ">
      <img src={loader} alt= 'loader' className="w-32 h-32"/>
      <h1 className="font-bold text-2x1 text-white mt-2">{title || "Loading .. "}</h1>
    </div>
  )
}

export default Loader;
