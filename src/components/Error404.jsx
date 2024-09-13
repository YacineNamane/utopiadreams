import { NavLink } from "react-router-dom";
import Error from "../assets/UDImages/Error.png";

function Error404() {
  return (
    <div className="error-containner">
      <div className="error-info">
        <h2>404 - Page Not Found</h2>
        <p>
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <NavLink to="/">Return to the Homepage</NavLink>
      </div>
      <div>
        <img src={Error} className="img-error" alt="Page not found" />
      </div>
    </div>
  );
}
export default Error404;
