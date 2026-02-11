import { DashboardPage } from "../pages/Dashboard";
import { ROUTES } from "./path";
import { type RouteObject } from "react-router-dom";

export const protectedRoutes: RouteObject[] = [
  {
    children: [
      {
        path: ROUTES.DASHBOARD,
        element: <DashboardPage />,
      },
    ],
  },
];
