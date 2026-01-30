export async function registerUserAuth(req, res) {
  console.log(req.body.username);

  return res.json({ message: "Register" });
}

export async function loginUserAuth(req, res) {
  return res.json({ message: "Login" });
}
