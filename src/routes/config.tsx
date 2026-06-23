import Standing from "@/components/Standing";
import Circuits from "../pages/Circuits";
import Dashboard from "../pages/Dashboard";
import Drivers from "../pages/Drivers";
import RaceSchedule from "../pages/RaceSchedule";
import Standings from "../pages/Standings";
import Layout from "./Layout";

export const routeConfig = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "drivers", element: <Drivers /> },
      { path: "circuits", element: <Circuits /> },
      { path: "standings", element: <Standings /> },
      { path: "standings/:standingsID", element: <Standing /> },
      { path: "races", element: <RaceSchedule /> },
    ],
  },
];
