const checkEmail = (Modal) => async (req, res, next) => {
  const user = await Modal.findOne({ where: { email: req.body.email } });
  if (user) {
    return res.json("User Already Exists. Please Login!");
  } else {
    next();
  }
};

export default checkEmail;
