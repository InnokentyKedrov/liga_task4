import URI_API from "./const.js";

export default class FetchClass {
  getTask(taskId) {
    fetch(`${URI_API}/${taskId}`)
      .then((data) => data.json())
      .then((data) => console.log("fetch getTask ok", data))
      .catch((err) => console.warn("fetch getTask error", err));
  }

  getAllTasks() {
    fetch(URI_API)
      .then((data) => data.json())
      .then((data) => console.log("fetch getAllTasks ok", data))
      .catch((err) => console.warn("fetch getAllTasks error", err));
  }

  postTask(postData) {
    fetch(URI_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((data) => data.json())
      .then((data) => console.log("fetch postTask ok", data))
      .catch((err) => console.warn("fetch postTask error", err));
  }

  putTask(taskId, putData) {
    fetch(`${URI_API}/${taskId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(putData),
    })
      .then((data) => data.json())
      .then((data) => console.log("fetch putTask ok", data))
      .catch((err) => console.warn("fetch putTask error", err));
  }

  patchTask(taskId, patchData) {
    fetch(`${URI_API}/${taskId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(patchData),
    })
      .then((data) => data.json())
      .then((data) => console.log("fetch patchTask ok", data))
      .catch((err) => console.warn("fetch patchTask error", err));
  }

  deleteTask(taskId) {
    fetch(`${URI_API}/${taskId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => console.log("fetch deleteTask ok", data))
      .catch((err) => console.warn("fetch deleteTask error", err));
  }
}
