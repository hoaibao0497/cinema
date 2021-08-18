import User from "../models";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

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
  const { SECRETKEY, EXPIRATION } = process.env;
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
              id: user.id,
              email: user.email,
              role: user.role,
            };
            const token = jwt.sign(payload, SECRETKEY, {
              expiresIn: EXPIRATION,
            });
            resolve(
              res.json({
                message: "Login successfully",
                email,
                token,
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

export default { register, login };
