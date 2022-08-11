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

const posts = [
  {
    id: 1,
    title: "간단한 HTTP API 개발 시작!",
    content: "Node.js에 내장되어 있는 http 모듈을 사용해서 HTTP server를 구현.",
    userId: 1,
  },
  {
    id: 2,
    title: "HTTP의 특성",
    content: "Request/Response와 Stateless!!",
    userId: 1,
  },
];

const createUser = (req, res) => {
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

  res.status(200).json();
};

const createPost = (req, res) => {
  const post = req.body.post;

  posts.push({
    id: post.id,
    title: post.tile,
    content: post.content,
    userId: post.userId,
  });

  res.json({
    message: "POST_CREATED",
  });

  res.status(200).json();
};

module.exports = { createUser, createPost };
