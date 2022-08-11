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

// #1 유저 회원가입 하기
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

// #2 게시글 등록하기
const createPost = (req, res) => {
  const post = req.body.data;

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

// #3 게시글 목록 조회하기
const showPost = (req, res) => {
  const postsWithUserName = posts.map((post) => {
    const user = users.find((user) => post.userId === user.id);

    return {
      postId: post.id,
      postTitle: post.title,
      postContent: post.content,
      userId: post.userId,
      userName: user.name,
    };
  });

  res.json({ data: postsWithUserName });
};

// #4 게시글 수정하기
const modifyPost = (req, res) => {
  const { id, content } = req.body;

  const post = posts.find((post) => post.id === id);
  post.content = content;

  const user = users.find((user) => post.userId === user.id);

  const updatedPost = {
    userId: post.id,
    userName: user.name,
    postingId: id,
    postingTitle: post.title,
    postingContent: content,
  };

  res.json({ data: updatedPost });
};

module.exports = { createUser, createPost, showPost, modifyPost };
