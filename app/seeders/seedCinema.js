const cinemaSeeder = [
  {
    name: "BHD Star - Bitexco",
    address: "L3-Bitexco Icon 68, 2 Hải Triều, Q.1",
    image: "http://image/cinema/xxx",
    cineplexId: 1,
  },
  {
    name: "BHD Star - Vincom Thảo Điền",
    address: "L5-Megamall, 159 XL Hà Nội, Q.2",
    image: "http://image/cinema/xxx",
    cineplexId: 1,
  },
  {
    name: "BHD Star - Vincom 3/2",
    address: "L5-Vincom 3/2, 3C Đường 3/2, Q.10",
    image: "http://image/cinema/xxx",
    cineplexId: 1,
  },
  {
    name: "BHD Star - Phạm Hùng",
    address: "L4-Satra Phạm Hùng, C6/27 Phạm Hùng, Bình Chánh",
    image: "http://image/cinema/xxx",
    cineplexId: 1,
  },
  {
    name: "BHD Star - Vincom Quang Trung",
    address: "B1-Vincom QT, 190 Quang Trung, Gò Vấp",
    image: "http://image/cinema/xxx",
    cineplexId: 1,
  },
  {
    name: "BHD Star - Vincom Lê Văn Việt",
    address: "L4-Vincom Plaza, 50 Lê Văn Việt, Q.9",
    image: "http://image/cinema/xxx",
    cineplexId: 1,
  },
  {
    name: "CNS - Hai Bà Trưng",
    address: "135 Hai Bà Trưng, Bến Nghé, Q.1",
    image: "http://image/cinema/xxx",
    cineplexId: 2,
  },
  {
    name: "CNS - Quốc Thanh",
    address: "271 Nguyễn Trãi, Q.1",
    image: "http://image/cinema/xxx",
    cineplexId: 2,
  },
  {
    name: "DDC - Đống Đa",
    address: "890 Trần Hưng Đạo, Q.5",
    image: "http://image/cinema/xxx",
    cineplexId: 3,
  },
  {
    name: "Lotte - Nam Sài Gòn",
    address: "L3-Lotte Mart NSG, 469 Nguyễn Hữu Thọ, Q.7",
    image: "http://image/cinema/xxx",
    cineplexId: 4,
  },
  {
    name: "Lotte Cinema Cộng Hòa",
    address: "L4-Pico Plaza, 20 Cộng Hòa, Tân Bình",
    image: "http://image/cinema/xxx",
    cineplexId: 4,
  },
  {
    name: "Lotte Cinema Cantavil",
    address: "L7-Cantavil Premier, Xa Lộ Hà Nội, Q.2",
    image: "http://image/cinema/xxx",
    cineplexId: 4,
  },
  {
    name: "Lotte Cinema Phú Thọ",
    address: "L4-Lotte Mart Phú Thọ, Q.11",
    image: "http://image/cinema/xxx",
    cineplexId: 4,
  },
  {
    name: "Lotte Cinema Gò Vấp",
    address: "L3-Lotte Mart, 242 Nguyễn Văn Lượng, Gò Vấp",
    image: "http://image/cinema/xxx",
    cineplexId: 4,
  },
  {
    name: "Lotte Cinema Thủ Đức",
    address: "L2-Joy Citipoint, KCX Linh Trung, Thủ Đức",
    image: "http://image/cinema/xxx",
    cineplexId: 4,
  },
];

import { Cinema } from "../models";

const createCinema = () => {
  const data = cinemaSeeder.forEach(async (seed) => {
    await Cinema.create({
      name: seed.name,
      address: seed.address,
      image: seed.image,
      cineplexId: seed.cineplexId,
    });
  });
  console.log(data);
};
export { createCinema };
