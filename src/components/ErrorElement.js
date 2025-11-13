import { useRouteError } from "react-router";
const ErrorElement = () => {
  const err = useRouteError();
  return (
    <div >
      <h1>Oops! An Error Occurred.</h1>
      <h2>{err.status + ": " + err.statusText}</h2>
    </div>
  );
};
export default ErrorElement;