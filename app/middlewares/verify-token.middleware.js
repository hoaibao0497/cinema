import jwt from "jsonwebtoken";
import "dotenv/config";

const { SECRETKEY } = process.env;
const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["access-token"];
  if (!token) {
    return res.json({ error: "A token is required for authentication" });
  }
  try {
    const decoded = jwt.verify(token, SECRETKEY);
    req.user = decoded;
  } catch (error) {
    return res.json("Invalid Token");
  }
  return next();
};

export { verifyToken };
