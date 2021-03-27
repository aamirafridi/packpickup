import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

export const Home: FunctionComponent = () => {
  return (
    <>
      <div>Home</div>
      <Link to="/detail">Go to Detail</Link>
    </>
  );
};
