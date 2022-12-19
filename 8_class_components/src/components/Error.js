import { useRouteError } from "react-router-dom";

const Error = () => {
	const errorData = useRouteError();
	return (
		<div className="centered-div">
			<h2>Oops! Something went wrong!</h2>
			<p>{`${errorData.statusText} : ${errorData.message}`}</p>
		</div>
	);
};

export default Error;
