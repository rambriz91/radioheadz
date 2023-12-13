import Tuner from "./Tuner";
import Presets from "../components/Presets";
import { useQuery } from "@apollo/client";
import { QUERY_STATIONS, QUERY_USER } from "../utils/queries";
import AuthUtil from "../utils/auth";

const Body = () => {
  const { loading, data } = useQuery(QUERY_STATIONS);
  const stations = data?.stations || [];
  const userProfile = AuthUtil.getProfile(); // pull token form local storage.

  console.log("userProfile: ", userProfile);

  const { loading: stationLoading, data: stationData } = useQuery(QUERY_USER, {
    variables: { userId: userProfile?.data?._id },
  });
  const user = stationData?.user || [];
  return (
    <>
      <div>
        {stationLoading ? <div> Loading...</div> : <Presets user={user} />}
      </div>
      <div className="flex w-full justify-center content-center h-full">
        {loading ? <div> Loading...</div> : <Tuner stations={stations} />}
      </div>
    </>
  );
};

export default Body;
