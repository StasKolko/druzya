import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { RouteProps } from "react-router-dom";

export type AppRoutes = "main" | "about" | "not_found";

export const routePath: Record<AppRoutes, string> = {
  main: "/",
  about: "/about",
  not_found: "*",
};

export const routeConfig: RouteProps[] = [
  {
    path: routePath.main,
    element: <MainPage />,
  },
  {
    path: routePath.about,
    element: <AboutPage />,
  },
  {
    path: routePath.not_found,
    element: <NotFoundPage />,
  },
];
