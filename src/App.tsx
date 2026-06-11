import { useDispatch, useSelector } from "react-redux";
import type { DispatchType, StoreType } from "./Redux/store";
import fetchDriversThunk from "./Redux/features/drivers/driverThunk";
import fetchTeamsThunk from "./Redux/features/teams/teamsThunk";
import fetchRaceThunk from "./Redux/features/races/raceThunk";
import fetchCircuitsThunk from "./Redux/features/circuits/circuitThunk";
import fetchStandingsThunk from "./Redux/features/standings/standingThunk";

function App() {
  const data = useSelector((store: StoreType) => store);
  const dispatch: DispatchType = useDispatch();

  console.log(data);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-black">
      <h1 className="text-5xl font-bold text-red-500">F1 Car Race</h1>

      <div className="flex gap-4 flex-wrap justify-center">
        <button
          onClick={() => dispatch(fetchDriversThunk())}
          className="bg-red-500 text-white px-5 py-2 rounded-lg hover:scale-105 transition"
        >
          Fetch Drivers
        </button>

        <button
          onClick={() => dispatch(fetchTeamsThunk())}
          className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:scale-105 transition"
        >
          Fetch Teams
        </button>

        <button
          onClick={() => dispatch(fetchRaceThunk())}
          className="bg-green-500 text-white px-5 py-2 rounded-lg hover:scale-105 transition"
        >
          Fetch Races
        </button>

        <button
          onClick={() => dispatch(fetchCircuitsThunk())}
          className="bg-emerald-500 text-white px-5 py-2 rounded-lg hover:scale-105 transition"
        >
          Fetch Circuits
        </button>

        <button
          onClick={() => dispatch(fetchStandingsThunk())}
          className="bg-yellow-500 text-black px-5 py-2 rounded-lg hover:scale-105 transition"
        >
          Fetch Standings
        </button>
      </div>
    </div>
  );
}

export default App;
