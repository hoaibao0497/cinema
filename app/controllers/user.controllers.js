import User from "../models";
const userList = (req, res) => {
  try {
    new Promise(async (resolve, reject) => {
      const user = await User.findAll({ raw: true });
      if (user) {
        resolve(res.json(user));
      } else {
        reject(res.json("User Not Found"));
      }
    });
  } catch (error) {
    res.json(error);
  }
};
const userDetail = (req, res) => {
  try {
    new Promise(async (resolve, reject) => {
      const id = req.params.id;
      const user = await User.findOne({ where: { id }, raw: true });
      if (user) {
        resolve(res.json(user));
      } else {
        reject(res.json("User Not Found"));
      }
    });
  } catch (error) {
    res.json(error);
  }
};
const createUser = async (req, res) => {
  try {
    new Promise(async (resolve, reject) => {
      const { name, email, password } = req.body;
      const user = await User.create({ name, email, password });
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
const updateUser = async (req, res) => {
  try {
    new Promise(async (resolve, reject) => {
      const { id } = req.params;
      const { name, email, password } = req.body;
      const user = await User.findOne({ where: { id } });
      if (user) {
        await User.update({ name, email, password }, { where: { id } });
        const newUser = await User.findOne({ where: { id } });
        resolve(res.json(newUser));
      } else {
        reject(res.json("User Not Found"));
      }
    });
  } catch (error) {
    res.json(error);
  }
};
const deleteUser = async (req, res) => {
  try {
    new Promise(async (resolve, reject) => {
      const { id } = req.params;
      const user = await User.findOne({ where: { id } });
      if (user) {
        await User.destroy({ where: { id } });
        resolve(res.json(user));
      } else {
        reject(res.json("User Not Found"));
      }
    });
  } catch (error) {
    res.json(error);
  }
};
export default { userList, createUser, deleteUser, userDetail, updateUser };
