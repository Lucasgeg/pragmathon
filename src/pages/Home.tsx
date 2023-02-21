import { Link } from "react-router-dom";

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
