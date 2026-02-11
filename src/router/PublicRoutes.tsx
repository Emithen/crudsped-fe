import { type RouteObject } from "react-router-dom";
import { ROUTES } from "./path";
import { LoginPage } from "../pages/Login";

export const publicRoutes: RouteObject[] = [
  {
    children: [
      {
        path: ROUTES.LOGIN,
        element: <LoginPage />,
      },
    ],
  },
];
