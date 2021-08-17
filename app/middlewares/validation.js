const validation = (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name) {
    res.json("Tên không được bỏ trống!");
  } else if (!email) {
    res.json("Email không được bỏ trống!");
  } else if (!password) {
    res.json("Mật khẩu không được bỏ trống!");
  } else {
    next();
  }
};
export { validation };
