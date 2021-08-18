import { User } from "../models";
import bcrypt from "bcryptjs";
import "dotenv/config";
import JWTToken from "../services/JWT.token";

let tokenList = {};

console.log(tokenList);

const accessTokenLife = process.env.EXPIRATION || "10m";

const accessTokenSecret = process.env.SECRETKEY || "bao";

const refreshTokenLife = process.env.REFRESH_TOKEN_LIFE || "30d";

const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET || "bao";

const register = (req, res) => {
  try {
    const { name, email, password, phone, role } = req.body;
    return new Promise(async (resolve, reject) => {
      const salt = bcrypt.genSaltSync(10);
      const hashPassword = bcrypt.hashSync(password, salt);
      const user = await User.create({
        name,
        email,
        password: hashPassword,
        phone,
        role,
      });
      if (user) {
        resolve(res.json(user));
      } else {
        reject();
      }
    });
  } catch (error) {
    res.json(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    return new Promise(async (resolve, reject) => {
      if (!email || !password) {
        reject(res.json("Please enter email address or password"));
      } else {
        const user = await User.findOne({ where: { email } });
        if (user) {
          const pass = bcrypt.compareSync(password, user.password);
          if (pass) {
            const payload = {
              _id: user.id,
              email: user.email,
              role: user.role,
            };
            // Tạo mã token thời gian sống 10 phút
            const accessToken = await JWTToken.generateToken(
              payload,
              accessTokenSecret,
              accessTokenLife
            );
            // Tạo mã refresh token thời gian sống 1 tháng
            const refreshToken = await JWTToken.generateToken(
              payload,
              refreshTokenSecret,
              refreshTokenLife
            );
            tokenList[refreshToken] = { accessToken, refreshToken };
            console.log(tokenList[refreshToken]);

            resolve(
              res.json({
                message: "Login successfully",
                email,
                accessToken,
                refreshToken,
              })
            );
          } else {
            resolve(res.json("Wrong Password"));
          }
        } else {
          resolve(res.json("Email not found"));
        }
      }
    });
  } catch (error) {
    res.json(error);
  }
};
let refreshToken = async (req, res) => {
  const refreshTokenClient = req.body.refreshToken;
  console.log(tokenList);
  //   if (refreshTokenClient && tokenList[refreshTokenClient]) {
  if (refreshTokenClient) {
    try {
      const decoded = await JWTToken.verifyToken(
        refreshTokenClient,
        refreshTokenSecret
      );
      const userData = decoded.data;
      console.log(userData);
      const accessToken = await JWTToken.generateToken(
        userData,
        accessTokenSecret,
        accessTokenLife
      );
      return res.json({ accessToken });
    } catch (error) {
      return res.json({ message: "No token provided." });
    }
  }
};

export default { register, login, refreshToken };
