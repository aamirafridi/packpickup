import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

export const Detail: FunctionComponent = () => {
  return (
    <>
      <div>Details</div>
      <Link to="/">Go to Home</Link>
    </>
  );
};
