const user = {
  userName: "revanthyadav13",
  lastActivityTime: new Date(),
  userPosts: [],
};

const userCreatePost = async (newPost) => {
  const createPost = new Promise((resolve, reject) => {
    user.userPosts.push(newPost);
    if (newPost) resolve(newPost);
    else reject("Invalid post");
  });

  const updateLastUserActivityTime = new Promise((resolve, reject) => {
    setTimeout(() => {
      user.lastActivityTime = new Date();
      if (user.lastActivityTime) resolve(user.lastActivityTime);
      else reject("Unkown last user activity.");
    }, 1000);
  });

  return Promise.all([createPost, updateLastUserActivityTime]);
};

const userDeletePost = async (newPost) => {
  const deletePost = new Promise((resolve, reject) => {
    if (user.userPosts.length != 0) resolve(user.userPosts.pop());
    else reject("There are no posts available.");
  });

  const updateLastUserActivityTime = new Promise((resolve, reject) => {
    setTimeout(() => {
      user.lastActivityTime = new Date();
      if (user.lastActivityTime) resolve(user.lastActivityTime);
      else reject("Unkown last user activity.");
    }, 1000);
  });

  return Promise.all([deletePost, updateLastUserActivityTime]);
};

console.log(
  `Before updated a post, last activity time = ${user.lastActivityTime}`
);

userCreatePost({ POST: "My First Post" }).then((result) => {
  console.log(`${result[0].POST}, last activity time = ${result[1]}`);
});

userDeletePost({ POST: "My First Post" }).then((result) => {
  console.log(`${result[0].POST}, last activity time = ${result[1]}`);
});