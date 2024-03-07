import React from "react";

const Landing = React.lazy(() => import("./src/contents/Home/Landing"));

const routes = [
  { path: "/", name: "Landing", element: Landing },
]

export default routes;
