import Tuner from "./Tuner";
import Presets from "../components/Presets";
import { useQuery } from "@apollo/client";
import { QUERY_STATIONS } from "../utils/queries";

const Body = () => {
  const { loading, data } = useQuery(QUERY_STATIONS);
  //const { loading, data, refetch } = useQuery(QUERY_FAVORITE_STATIONS);
  const stations = data?.stations || [];

  return (
    <>
      <div>
        <Presets />
      </div>
      <div className="flex w-full justify-center content-center h-full">
        {loading ? <div> Loading...</div> : <Tuner stations={stations} />}
      </div>
    </>
  )
};

export default Body;
