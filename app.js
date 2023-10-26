import FetchClass from "./fetchClass.js";
import XMLClass from "./xmlClass.js";

// Константы для примера
const postData = {
  name: "kedr",
  info: "test",
  isImportant: true,
  isCompleted: false,
  id: 0,
};

const putData = {
  name: "kedr",
  info: "test",
  isImportant: true,
  isCompleted: true,
  id: 0,
};

const patchData = {
  isCompleted: true,
};

// -----------------------

class Facade {
  constructor(typeRequest) {
    this.typeRequest = typeRequest;
  }

  getTask(taskId) {
    return this.typeRequest === "fetch"
      ? new FetchClass().getTask(taskId)
      : new XMLClass().getTask(taskId);
  }

  getAllTasks() {
    return this.typeRequest === "fetch"
      ? new FetchClass().getAllTask()
      : new XMLClass().getAllTask();
  }

  postTask(postData) {
    return this.typeRequest === "fetch"
      ? new FetchClass().postTask(postData)
      : new XMLClass().postTask(postData);
  }

  putTask(taskId, putData) {
    return this.typeRequest === "fetch"
      ? new FetchClass().putTask(taskId, putData)
      : new XMLClass().putTask(taskId, putData);
  }

  patchTask(taskId, patchData) {
    return this.typeRequest === "fetch"
      ? new FetchClass().patchTask(taskId, patchData)
      : new XMLClass().patchTask(taskId, patchData);
  }

  deleteTask(taskId) {
    return this.typeRequest === "fetch"
      ? new FetchClass().deleteTask(taskId)
      : new XMLClass().deleteTask(taskId);
  }
}

// Метод запроса (fetch или XMLHttpRequest) меняется в зависимости от аргумента,
// передаваемого в конструктор класса Facade ("fetch" или что-то иное)

const work = new Facade("fetch");
work.patchTask(1, patchData);
