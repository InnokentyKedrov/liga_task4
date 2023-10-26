import URI_API from "./const.js";

export default class XMLClass {
  getTask(taskId) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `${URI_API}/${taskId}`);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = function () {
      console.log("XMLHttpRequest getTask ok", xhr.response);
    };
    xhr.onerror = function () {
      console.warn("XMLHttpRequest getTask error!", xhr.status);
    };
  }

  getAllTasks() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", URI_API);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = function () {
      console.log("XMLHttpRequest getAllTask ok", xhr.response);
    };
    xhr.onerror = function () {
      console.warn("XMLHttpRequest getAllTask error!", xhr.status);
    };
  }

  postTask(postData) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", URI_API);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify(postData));
    xhr.responseType = "json";
    xhr.onload = function () {
      console.log("XMLHttpRequest postTask ok", xhr.response);
    };
    xhr.onerror = function () {
      console.warn("XMLHttpRequest postTask error!", xhr.status);
    };
  }

  putTask(taskId, putData) {
    const xhr = new XMLHttpRequest();
    xhr.open("PUT", `${URI_API}/${taskId}`);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify(putData));
    xhr.responseType = "json";
    xhr.onload = function () {
      console.log("XMLHttpRequest putTask ok", xhr.response);
    };
    xhr.onerror = function () {
      console.warn("XMLHttpRequest putTask error!", xhr.status);
    };
  }

  patchTask(taskId, patchData) {
    const xhr = new XMLHttpRequest();
    xhr.open("PATCH", `${URI_API}/${taskId}`);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify(patchData));
    xhr.responseType = "json";
    xhr.onload = function () {
      console.log("XMLHttpRequest patchTask ok", xhr.response);
    };
    xhr.onerror = function () {
      console.warn("XMLHttpRequest patchTask error!", xhr.status);
    };
  }

  deleteTask(taskId) {
    const xhr = new XMLHttpRequest();
    xhr.open("DELETE", `${URI_API}/${taskId}`);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = function () {
      console.log("XMLHttpRequest deleteTask ok", xhr.response);
    };
    xhr.onerror = function () {
      console.warn("XMLHttpRequest deleteTask error!", xhr.status);
    };
  }
}
