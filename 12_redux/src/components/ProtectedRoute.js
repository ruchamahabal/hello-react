import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
	const isLoggedIn = useSelector((store) => store.user.isLoggedIn);

	if (!isLoggedIn) {
		return <Navigate to="/login" replace />;
	} else {
		return <>{children}</>;
	}
};

export default ProtectedRoute;
