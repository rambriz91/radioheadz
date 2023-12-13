import Body from "../components/Body";

import { useAuthRedirect } from "../utils/hooks";

const Home = () => {
  useAuthRedirect();
  return (
    <div className="container my-2">
      <Body />
    </div>
  );
};

export default Home;
