import jwt from "jsonwebtoken";

const generateToken = (user, secretKey, tokenLife) => {
  return new Promise(async (resolve, reject) => {
    const userData = {
      _id: user._id,
      email: user.email,
      role: user.role,
    };
    jwt.sign(
      { data: userData },
      secretKey,
      {
        algorithm: "HS256",
        expiresIn: tokenLife,
      },
      (err, token) => {
        if (err) {
          return reject(err);
        }
        resolve(token);
      }
    );
  });
};

const verifyToken = (token, secretKey) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return reject(err);
      }
      resolve(decoded);
    });
  });
};

export default { generateToken, verifyToken };
