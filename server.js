import express from "express";
import path from "path";
import "dotenv/config";
import rootRouter from "./app/routes/root.router";
import { connect } from "./app/config/db.config";
import { db as DATABASE } from "./app/config/db.config";

import { createCinema } from "./app/seeders/seedCinema";
import { createCineplex } from "./app/seeders/cineplex.seeder";
import { createUser } from "./app/seeders/user.seeder";

const app = express();

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Static files
app.use("/public", express.static(path.join(__dirname, "public")));
// Kiểm tra kết nối database
connect();
// Router
app.use(rootRouter);

// Database
DATABASE.sync({ force: false }).then(() => {
  // createCineplex();
  // createCinema();
  // createUser();
  // Port
  const port = process.env.PORT || 8100;
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
});
