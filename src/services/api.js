import axios from "axios";
const API_URL = "https://cricket-live-line1.p.rapidapi.com"; //sir's url
//const API_URL = "https://cricket-live-line1.p.rapidapi.com/playerRanking/1"; //url from my account in rapidapi
const HEADERS = {
  "x-rapidapi-key": "60af64af2bmsh2265032cba6c184p1e9ac3jsnca5a6bee2c22",
  "x-rapidapi-host": "cricket-live-line1.p.rapidapi.com",
  //MY KEY IS NOT WORKING. TO CHECK THAT I PASTED MY KEY IN SIR'S api.js PAGE AND IT COULD NOT LOAD ANY DATA THERE.
  //SO.. DUE TO NO LUCK I AM HAVING TO USE SIR'S KEY (SORRY!)
  //"x-rapidapi-key": "c07eca4e51mshee0bb2bab90b68bp13327djsnfd12e3698a2b", //my key
  //"x-rapidapi-host": "cricket-live-line1.p.rapidapi.com"     //my host address
};

export const getPointsTable = async () => {
  const options = {
    method: "GET",
    url: `${API_URL}/series/336/pointsTable`,
    headers: HEADERS,
  };

  try {
    const response = await axios.request(options);
    console.log("Points table data", response.data);

    if (!response.data?.status || !response.data?.data?.A) {
      throw new Error("Invalid points table data format");
    }

    return response.data.data.A.map((team) => ({
      team: team.teams,
      played: team.P,
      won: team.W,
      loss: team.L,
      points: team.Pts,
      nrr: team.NRR,
      flag: team.flag,
    }));
  } catch (error) {
    console.error("Error fetching the data");
    throw error;
  }
};
