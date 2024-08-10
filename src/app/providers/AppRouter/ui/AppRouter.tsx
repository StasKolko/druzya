import { PageLoader } from "features/PageLoader";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { routeConfig } from "shared/config/routeConfig";

export const AppRouter = () => (
  <Routes>
    {routeConfig.map(({ path, element }) => (
      <Route
        key={path}
        path={path}
        element={<Suspense fallback={<PageLoader />}>{element}</Suspense>}
      />
    ))}
  </Routes>
);
