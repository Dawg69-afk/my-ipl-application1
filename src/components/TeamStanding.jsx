import { useState, useEffect } from "react";
import { getPointsTable } from "../services/api";
import LoadingSpinner from "./ui/Loader";

export default function TeamStanding() {
  const [pointsTable, setPointsTable] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPointsTable = async () => {
      try {
        const data = await getPointsTable();
        console.log("API Data:", data);
        setPointsTable(data);
      } catch (err) {
        setError("Unable to load data");
      } finally {
        setLoading(false);
      }
    };
    fetchPointsTable();
  }, []);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const apiData = await getPointsTable();
  //       setPointsTable(apiData);
  //     } catch (err) {
  //       console.error("API failed, using mock data", err);           ///api was not working so this is to check whether the points table loads or not
  //       const mockData = [
  //         { team: "India", played: 5, won: 4, lost: 1, points: 8, nrr: +0.5, flag: "🇮🇳" },            ///so there is no problem in my code
  //       ];
  //       setPointsTable(mockData);                       ////api is not working
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 p-4">{error}</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-2xl font-bold mb-6">Points Table</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-600">
                Team
              </th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-600">
                P
              </th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-600">
                W
              </th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-600">
                L
              </th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-600">
                Pts
              </th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-600">
                NRR
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {pointsTable.map((item, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-gray-100 transition-colors`}
              >
                <td className="px-4 py-3">
                  <div className="flex items-center space-x-3">
                    <img
                      src={item.flag}
                      alt={item.team}
                      className="w-8 h-8 rounded-full object-contain"
                    />
                    <span>{item.team}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-center text-gray-600">
                  {item.played}
                </td>
                <td className="px-4 py-3 text-center text-gray-600">
                  {item.won}
                </td>
                <td className="px-4 py-3 text-center text-gray-600">
                  {item.lost}
                </td>
                <td className="px-4 py-3 text-center text-gray-600">
                  {item.points}
                </td>
                <td className="px-4 py-3 text-center text-gray-600">
                  {item.nrr}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
