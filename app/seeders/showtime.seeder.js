const showtimeList = [
  {
    startTime: "09:00",
    cinemaId: "1",
  },
  //   {
  //     startTime: "13:00",
  //     cinemaId: "1",
  //   },
  //   {
  //     startTime: "17:00",
  //     cinemaId: "1",
  //   },
  //   {
  //     startTime: "21:00",
  //     cinemaId: "1",
  //   },
  //   {
  //     startTime: "09:30",
  //     cinemaId: "2",
  //   },
  //   {
  //     startTime: "12:00",
  //     cinemaId: "2",
  //   },
  //   {
  //     startTime: "21:00",
  //     cinemaId: "2",
  //   },
  //   {
  //     startTime: "11:00",
  //     cinemaId: "3",
  //   },
  //   {
  //     startTime: "14:00",
  //     cinemaId: "3",
  //   },
  //   {
  //     startTime: "09:00",
  //     cinemaId: "7",
  //   },
  //   {
  //     startTime: "15:00",
  //     cinemaId: "7",
  //   },
  //   {
  //     startTime: "22:00",
  //     cinemaId: "7",
  //   },
  //   {
  //     startTime: "10:00",
  //     cinemaId: "9",
  //   },
  //   {
  //     startTime: "12:00",
  //     cinemaId: "9",
  //   },
  //   {
  //     startTime: "16:00",
  //     cinemaId: "9",
  //   },
  //   {
  //     startTime: "09:30",
  //     cinemaId: "14",
  //   },
  //   {
  //     startTime: "11:00",
  //     cinemaId: "14",
  //   },
  //   {
  //     startTime: "12:30",
  //     cinemaId: "14",
  //   },
  //   {
  //     startTime: "15:00",
  //     cinemaId: "14",
  //   },
  //   {
  //     startTime: "10:00",
  //     cinemaId: "15",
  //   },
  //   {
  //     startTime: "19:00",
  //     cinemaId: "15",
  //   },
];

import { Showtime } from "../models";

const createShowTime = () => {
  const data = showtimeList.forEach(async (seed) => {
    await Showtime.create({
      startTime: seed.startTime,
      cinemaId: seed.cinemaId,
    });
  });
};
export { createShowTime };
