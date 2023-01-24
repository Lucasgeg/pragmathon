import { Link } from "react-router-dom";
import { AuthLoader } from "../utils/AuthLoader";
import { Auth } from "./Auth";

const Home = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Link to="/toto/1">
        <button type="button">Toto</button>
      </Link>
    </div>
  );
};

export default Home;
