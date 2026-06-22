import type { DriverDataType } from "@/Redux/features/driverTypes";
import { FaBirthdayCake, FaGlobe } from "react-icons/fa";

const DriverData = ({ driver }: { driver: DriverDataType }) => {
  return (
    <div
      className="bg-gray-800 text-white rounded-xl p-5
                shadow-md hover:shadow-xl transition-all duration-300
                border border-gray-700 hover:border-red-500
                flex flex-col justify-between h-full"
    >
      <div>
        {/* driver name */}
        <h3 className="text-lg font-semibold text-red-400 mb-3 line-clamp-2 min-h-[48px]">
          {driver.name} {driver.surname}
        </h3>

        {/* nationality */}
        <p className="text-sm text-gray-300 flex items-center gap-2">
          <FaGlobe className="text-red-400" />
          {driver.nationality}
        </p>

        {/* birthday */}
        <p className="text-sm text-gray-400 mt-2 flex items-center gap-2">
          <FaBirthdayCake className="text-red-400" />
          {driver.birthday}
        </p>
      </div>

      {/* footer */}
      <div className="mt-4 flex justify-between items-center">
        <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded-md">
          Driver ID: {driver.driverId}
        </span>

        <a
          href={driver.url}
          target="_blank"
          className="text-xs text-blue-400 hover:underline"
        >
          Profile
        </a>
      </div>
    </div>
  );
};

export default DriverData;
