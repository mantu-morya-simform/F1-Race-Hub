import Circuits from "../pages/Circuits";
import Dashboard from "../pages/Dashboard";
import DriverDetails from "../pages/DriverDetails";
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
      { path: "drivers/:id", element: <DriverDetails /> },
      { path: "circuits", element: <Circuits /> },
      { path: "standings", element: <Standings /> },
      { path: "races", element: <RaceSchedule /> },
    ],
  },
];
