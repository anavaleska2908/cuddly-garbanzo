import { Routes as RoutesDom, Route } from "react-router-dom";
import { Login } from "../pages/Login";

export const Routes = () => {
	return (
		<RoutesDom>
			<Route index path="/" element={<Login />} />
		</RoutesDom>
	);
};
