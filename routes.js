import React from "react";

const Landing = React.lazy(() => import("./src/contents/Home/Landing"));
const Details= React.lazy(() => import("./src/contents/Tables/QualityCheckTable"));
const LeftTable= React.lazy(() => import("./src/contents/Tables/TableView"));


const routes = [
  { path: "/home", name: "Landing", element: Landing },
  { path: "/data", name: "Details", element: Details},
  { path: "/leads", name: "leftData", element: LeftTable},
]

export default routes;
