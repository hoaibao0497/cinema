const userList = [
  {
    name: "Bao",
    email: "bao@gmail.com",
    password: "1234",
    phone: "684-591-3213",
    role: "Admin",
  },
  {
    name: "Nam",
    email: "nam@gmail.com",
    password: "9876",
    phone: "682-591-3723",
    role: "Manager",
  },
  {
    name: "sshoubridge2",
    email: "mbrusin2@scribd.com",
    password: "3VqezKQ8vdL",
    phone: "684-501-3226",
    role: "Supervisor",
  },
  {
    name: "hferruzzi3",
    email: "dgiametti3@stanford.edu",
    password: "ymR92wRpTW8",
    phone: "654-591-4023",
    role: "Senior",
  },
  {
    name: "cbeggs4",
    email: "kaubery4@digg.com",
    password: "S1kjNsr7l",
    phone: "714-591-6623",
    role: "Senior",
  },
  {
    name: "opre5",
    email: "dstuckow5@wikia.com",
    password: "dZTutfO",
    phone: "154-591-6323",
    role: "Supervisor",
  },
  {
    name: "fbrisley0",
    email: "lhlavecek0@spiegel.de",
    password: "dz3VArGkRF9M",
    phone: "684-591-3223",
    role: "User",
  },
  {
    name: "mbakey1",
    email: "hjasiak1@sciencedaily.com",
    password: "zHRhoMwjGVc",
    phone: "442-283-0126",
    role: "User",
  },
  {
    name: "pbraunter2",
    email: "cmatuskiewicz2@imdb.com",
    password: "AgNKXq",
    phone: "577-368-7266",
    role: "User",
  },
  {
    name: "mobrien3",
    email: "chanigan3@hhs.gov",
    password: "oOgvxN",
    phone: "288-946-1357",
    role: "User",
  },
  {
    name: "cshouler4",
    email: "lgiovannilli4@google.fr",
    password: "mlqNU0NZ",
    phone: "756-322-3730",
    role: "User",
  },
  {
    name: "ssneesbie5",
    email: "ttuft5@blogspot.com",
    password: "oKonDsk5Rj7",
    phone: "839-657-0645",
    role: "User",
  },
  {
    name: "cbruff6",
    email: "npierrepont6@illinois.edu",
    password: "vELDQUQVrL",
    phone: "171-491-9846",
    role: "User",
  },
  {
    name: "cgert7",
    email: "atosh7@cnet.com",
    password: "GZlWZ8",
    phone: "752-386-8213",
    role: "User",
  },
  {
    name: "akayne8",
    email: "sstoppard8@163.com",
    password: "mBRj0pVQcREX",
    phone: "906-512-4896",
    role: "User",
  },
  {
    name: "rrowaszkiewicz9",
    email: "jborkett9@wired.com",
    password: "2d7YmaMXxqZl",
    phone: "242-102-3275",
    role: "User",
  },
  {
    name: "bmollnara",
    email: "jvandermarka@slashdot.org",
    password: "rUUMHM",
    phone: "820-140-4689",
    role: "User",
  },
  {
    name: "darchanbaultb",
    email: "lrootesb@bigcartel.com",
    password: "9DH949d9Q",
    phone: "575-435-7533",
    role: "User",
  },
  {
    name: "tchanderc",
    email: "bnodesc@ask.com",
    password: "wDSxhjxnw",
    phone: "219-273-8197",
    role: "User",
  },
  {
    name: "asparryd",
    email: "slaidlawd@ovh.net",
    password: "jXm5ggPoD",
    phone: "183-785-9783",
    role: "User",
  },
];

import { User } from "../models";

const createUser = () => {
  const data = userList.forEach(async (seed) => {
    await User.create({
      name: seed.name,
      email: seed.email,
      password: seed.password,
      phone: seed.phone,
      role: seed.role,
    });
  });
};
export { createUser };
