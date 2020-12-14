import { Reef } from "../store/Reefs/types";

export const mockReef: Reef = {
  id: 1,
  name: "",
  polygon: {
    coordinates: [0, 0],
    type: "Point",
  },
  spotterId: null,
  maxMonthlyMean: 0,
  depth: 0,
  status: "in_review",
  videoStream: null,
  region: { name: "Hawaii" },
  admins: [],
  stream: null,
  liveData: {
    reef: { id: 1 },
    bottomTemperature: {
      value: 39,
      timestamp: "2020-07-01T14:25:18.008Z",
    },
    satelliteTemperature: {
      value: 29,
      timestamp: "2020-07-01T14:25:18.008Z",
    },
    degreeHeatingDays: {
      value: 34,
      timestamp: "2020-07-01T14:25:18.008Z",
    },
  },
  dailyData: [
    {
      id: 171,
      date: "2020-07-01T16:40:19.842Z",
      minBottomTemperature: 37,
      maxBottomTemperature: 39,
      avgBottomTemperature: 38,
      degreeHeatingDays: 34,
      surfaceTemperature: 29,
      satelliteTemperature: 23,
      minWaveHeight: 2,
      maxWaveHeight: 4,
      avgWaveHeight: 3,
      waveDirection: 205,
      wavePeriod: 28,
      minWindSpeed: 3,
      maxWindSpeed: 5,
      avgWindSpeed: 4,
      windDirection: 229,
    },
  ],
  latestDailyData: {
    id: 171,
    date: "2020-07-01T16:40:19.842Z",
    minBottomTemperature: 37,
    maxBottomTemperature: 39,
    avgBottomTemperature: 38,
    degreeHeatingDays: 34,
    surfaceTemperature: 29,
    satelliteTemperature: 23,
    minWaveHeight: 2,
    maxWaveHeight: 4,
    avgWaveHeight: 3,
    waveDirection: 205,
    wavePeriod: 28,
    minWindSpeed: 3,
    maxWindSpeed: 5,
    avgWindSpeed: 4,
    windDirection: 229,
  },
};
