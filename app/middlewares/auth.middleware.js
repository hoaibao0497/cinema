import JWTToken from "../services/JWT.token";
import "dotenv/config";

const { SECRETKEY } = process.env;
const accessTokenSecret = SECRETKEY;

const isAuth = async (req, res, next) => {
  const tokenClient = req.headers["access-token"];
  if (tokenClient) {
    try {
      const decoded = await JWTToken.verifyToken(
        tokenClient,
        accessTokenSecret
      );
      req.jwtDecoded = decoded;
      next();
    } catch (err) {
      return res.json({ message: "Unauthorized" });
    }
  } else {
    return res.json({ message: "No token provided." });
  }
};

export default isAuth;
