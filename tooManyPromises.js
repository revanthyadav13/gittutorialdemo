const user = {
  userName: "revanthyadav13",
  lastActivityTime: new Date(),
  userPosts: [],
};

function createPost(post) {
  return new Promise((resolve, reject) => {
    user.userPosts.push(post);
    if (post) resolve(post);
    else reject("Invalid post");
  });
}

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      user.lastActivityTime = new Date();
      if (user.lastActivityTime) resolve(user.lastActivityTime);
      else reject("Unkown last user activity.");
    }, 1000);
  });
}

function deletePost() {
  return new Promise((resolve, reject) => {
    if (user.userPosts.length != 0) resolve(user.userPosts.pop());
    else reject("There are no posts on the timeline.");
  });
}

function printPosts() {
  return new Promise((resolve, reject) => {
    if (user) resolve(user.userPosts);
    else reject("User not found!");
  });
}

console.log(
  `Before user created a post, user last activity time = ${user.lastActivityTime}`
);

Promise.all([
  createPost({ POST: "This is my first post" }),
  updateLastUserActivityTime(),
])
  .then((result) => {
    console.log(
      `${result[0].POST}, User's last activity time = ${user.lastActivityTime}`
    );
  })
  .then(printPosts)
  .then((posts) => {
    posts.forEach((post) => {
      console.log(post.POST);
    });
    console.log("Last activity = " + user.lastActivityTime);
  })
  .then(() => {
    Promise.all([
      createPost({ POST: "This is my second post" }),
      updateLastUserActivityTime(),
    ]).then((result) => {
      console.log(
        `${result[0].POST}, User's last activity time = ${user.lastActivityTime}`
      );
    });
  })
  .then(printPosts)
  .then((posts) => {
    posts.forEach((post) => {
      console.log(post.POST);
    });
    console.log("Last activity = " + user.lastActivityTime);
  })
  .then(deletePost)
  .then((result) => {
    console.log(result.POST);
  })
  .then(printPosts)
  .then((posts) => {
    posts.forEach((post) => {
      console.log(post.POST);
    });
    console.log("Last activity = " + user.lastActivityTime);
  })
  .then(deletePost)
  .then((result) => {
    console.log(result.POST);
  })
  .then(deletePost)
  .then((result) => {
    console.log(result.POST);
  })
  .catch((err) => {
    console.log(err);
  });