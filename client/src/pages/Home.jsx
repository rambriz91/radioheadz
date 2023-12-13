import Body from "../components/Body";

import { useAuthRedirect } from "../utils/hooks";

const Home = () => {
  useAuthRedirect();
  return (
    <div className="flex justify-stretch container my-2">
      <Body />
    </div>
  );
};

export default Home;
