// AXIOS GLOBALS
axios.defaults.headers.common["X-Auth-Token"] =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

// GET REQUEST
function getTodos() {
  console.log('GET Request');
  // axios({
  //   method: "get",
  //   url: "https://jsonplaceholder.typicode.com/todos",
  //   params: {
  //     _limit: 5,
  //   },
  // })
  //   .then((response) => showOutput(response))
  //   .catch((err) => console.log(err));
  axios
    .get("https://jsonplaceholder.typicode.com/todos?_limit=5", {
      timeout: 5000,
    })
    .then((response) => showOutput(response))
    .catch((err) => console.log(err));
}

// POST REQUEST
function addTodo() {
  console.log('POST Request');
  axios
    .post("https://jsonplaceholder.typicode.com/todos", {
      title: "New Todo",
      complete: false,
    })
    .then((response) => showOutput(response))
    .catch((err) => console.log(err));
}

// PUT/PATCH REQUEST
function updateTodo() {
  console.log('PUT/PATCH Request');
  axios
    .patch("https://jsonplaceholder.typicode.com/todos/1", {
      title: "Updated Todo",
      completed: true,
    })
    .then((response) => showOutput(response))
    .catch((err) => console.log(err));
}

// DELETE REQUEST
function removeTodo() {
  console.log('DELETE Request');
  axios
    .delete("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => showOutput(response))
    .catch((err) => console.log(err));
}

// SIMULTANEOUS DATA
function getData() {
  console.log('Simultaneous Request');
  axios
    .all([
      axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5"),
      axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5"),
    ])
    .then(axios.spread((todos, posts) => showOutput(posts)))
    .catch((err) => console.log(err));
}

// CUSTOM HEADERS
function customHeaders() {
  console.log('Custom Headers');
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "sometoken",
    },
  };
  axios
    .post(
      "https://jsonplaceholder.typicode.com/todos",
      {
        title: "New Todo",
        complete: false,
      },
      config
    )
    .then((response) => showOutput(response))
    .catch((err) => console.log(err));
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  console.log('Transform Response');
  const options = {
    method: "post",
    url: "https://jsonplaceholder.typicode.com/todos",
    data: {
      title: "Hello World",
    },
    transformResponse: axios.defaults.transformResponse.concat((data) => {
      data.title = data.title.toUpperCase();
      return data;
    }),
  };
  axios(options).then((res) => showOutput(res));
}

// ERROR HANDLING
function errorHandling() {
  console.log('Error Handling');
  axios
    .get("https://jsonplaceholder.typicode.com/todoss", {
      // validateStatus: (status) => {
      //   return status < 500; // Reject only if greater or equal to 500
      // },
    })
    .then((response) => showOutput(response))
    .catch((err) => {
      if (err.response) {
        // Server responded with a status other than 200 range
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);

        if (err.response.status === 404) {
          alert("Error: Page Not Found");
        }
      } else if (err.request) {
        // Request was made but no reponse
        console.error(err.request);
      } else {
        console.error(err.message);
      }
    });
}

// CANCEL TOKEN
function cancelToken() {
  console.log('Cancel Token');
  const source = axios.CancelToken.source();

  axios
    .get("https://jsonplaceholder.typicode.com/todos", {
      cancelToken: source.token,
    })
    .then((response) => showOutput(response))
    .catch((thrown) => {
      if (axios.isCancel(thrown)) {
        console.log("Request cancelled", thrown.message);
      }
    });

  if (true) {
    source.cancel("Request cancelled.");
  }
}

// INTERCEPTING REQUESTS & RESPONSES
axios.interceptors.request.use(
  (config) => {
    console.log(
      `${config.method.toUpperCase()} request sent to ${
        config.url
      } at ${new Date().getTime()}`
    );
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// AXIOS INSTANCES
const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// axiosInstance.get("/comments").then((res) => showOutput(res));

// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  document.getElementById("res").innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>
@@ -84,14 +206,14 @@ function showOutput(res) {
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document.getElementById("get").addEventListener("click", getTodos);
document.getElementById("post").addEventListener("click", addTodo);
document.getElementById("update").addEventListener("click", updateTodo);
document.getElementById("delete").addEventListener("click", removeTodo);
document.getElementById("sim").addEventListener("click", getData);
document.getElementById("headers").addEventListener("click", customHeaders);
document
  .getElementById('transform')
  .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);
  .getElementById("transform")
  .addEventListener("click", transformResponse);
document.getElementById("error").addEventListener("click", errorHandling);
document.getElementById("cancel").addEventListener("click", cancelToken);