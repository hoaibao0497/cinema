import { Cineplex } from "../models";

const cineplexSeeders = [
  {
    name: "BHD",
    logo: "http://logo/cineplex/BHD",
  },
  {
    name: "CNS",
    logo: "http://logo/cineplex/CNS",
  },
  {
    name: "DDC",
    logo: "http://logo/cineplex/DDC",
  },
  {
    name: "Lotte",
    logo: "http://logo/cineplex/Lotte",
  },
];

const createCineplex = () => {
  cineplexSeeders.forEach(async (seed) => {
    await Cineplex.create({
      name: seed.name,
      logo: seed.logo,
    });
  });
};

export { createCineplex };
