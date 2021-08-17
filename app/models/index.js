import { db } from "../config/db.config";
import user from "./user.model";

const User = db.define("user", user);
export default User;
