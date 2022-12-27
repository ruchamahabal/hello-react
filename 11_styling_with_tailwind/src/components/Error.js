import { useRouteError } from "react-router-dom";

const Error = () => {
	const errorData = useRouteError();

	return (
		<div className="centered-div flex min-h-screen flex-col items-center justify-center gap-7 p-4 text-xl font-bold leading-7">
			<h2>Oops! Something went wrong!</h2>
			<p>{errorData.statusText || errorData.message}</p>
		</div>
	);
};

export default Error;
