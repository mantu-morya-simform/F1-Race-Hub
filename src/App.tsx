import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import type { DispatchType } from "./Redux/store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import fetchDriversThunk from "./Redux/features/drivers/driverThunk";
import fetchTeamsThunk from "./Redux/features/teams/teamsThunk";
import fetchRaceThunk from "./Redux/features/races/raceThunk";
import fetchCircuitsThunk from "./Redux/features/circuits/circuitThunk";
import fetchStandingsThunk from "./Redux/features/standings/standingThunk";

function App() {
  const dispatch: DispatchType = useDispatch();
  useEffect(() => {
    console.log("erffect");
    dispatch(fetchDriversThunk());
    dispatch(fetchTeamsThunk());
    dispatch(fetchRaceThunk());
    dispatch(fetchCircuitsThunk());
    dispatch(fetchStandingsThunk());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
