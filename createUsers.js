const users = [
  {
    id: 1,
    name: "Rebekah Johnson",
    email: "Glover12345@gmail.com",
    password: "123qwe",
  },
  {
    id: 2,
    name: "Fabian Predovic",
    email: "Connell29@gmail.com",
    password: "password",
  },
];

const createUsers = (req, res) => {
  const user = req.body.user;

  users.push({
    id: user.id,
    name: user.name,
    email: user.email,
    password: user.password,
  });

  res.json({
    message: "USER_CREATED",
  });
};

module.exports = { createUsers };
