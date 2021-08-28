const seatList = [
  {
    name: "A",
    status: true,
    price: 100,
    type: "Normal",
    showtimeId: 1,
  },
  {
    name: "B",
    status: true,
    price: 500,
    type: "VIP",
    showtimeId: 2,
  },
  {
    name: "C",
    status: true,
    price: 200,
    type: "Advanced",
    showtimeId: 1,
  },
];

import { Seat } from "../models";

const createSeat = () => {
  const data = seatList.forEach(async (seed) => {
    await Seat.create({
      name: seed.name,
      status: seed.status,
      price: seed.price,
      type: seed.type,
      showtimeId: seed.showtimeId,
    });
  });
};
export { createSeat };
