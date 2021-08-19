const movieList = [
  {
    name: "Trạng Tí Phiêu Lưu Ký",
    startDate: "30.04.2021",
    time: "100 phút",
    evaluate: "hài hước",
    poster: "poster.png",
    trailer: "trailer.vn",
  },
  {
    name: "Lật Mặt: 48h",
    startDate: "16.04.2021",
    time: "100 phút",
    evaluate: "kịch tính",
    poster: "poster.png",
    trailer: "trailer.vn",
  },
  {
    name: "Kẻ Vô Danh - Nobody - C18",
    startDate: "07.05.2021",
    time: "92 phút",
    evaluate: "Hành động",
    poster: "poster.png",
    trailer: "trailer.vn",
  },
  {
    name: "Detective Conan: Scarlet Bullet - Thám Tử Lừng Danh Conan: Viên Đạn Đỏ - C13",
    startDate: "23.04.2021",
    time: "110 phút",
    evaluate: "Hoạt hình",
    poster: "poster.png",
    trailer: "trailer.vn",
  },
];

import { Movie } from "../models";

const createMovie = () => {
  const data = movieList.forEach(async (seed) => {
    await Movie.create({
      name: seed.name,
      startDate: seed.startDate,
      time: seed.time,
      evaluate: seed.evaluate,
      poster: seed.poster,
      trailer: seed.trailer,
    });
  });
};
export { createMovie };
