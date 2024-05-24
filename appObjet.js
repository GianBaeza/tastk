class Task {
  constructor(content) {
    this.content = content;
    this.element = this.createTaskElemt();
  }
  createTaskElemt() {
    const taskElemt = document.createElement("li");
    taskElemt.classList.add("lista-task");
    taskElemt.textContent = this.content;

    const botonTareaCompletada = this.creaTeButton(
      "Completada",
      "boton-completado"
    );
    botonTareaCompletada.addEventListener("click", () =>
      this.marcarCompleted(taskElemt)
    );

    const botonEliminarTarea = this.creaTeButton("Eliminar", "boton-eliminada");
    botonEliminarTarea.addEventListener("click", () =>
      this.deleteTask(taskElemt)
    );
    taskElemt.append(botonTareaCompletada, botonEliminarTarea);
    return taskElemt;
  }

  creaTeButton(texto, clase) {
    const button = document.createElement("button");
    button.classList.add(clase);
    button.textContent = texto;
    return button;
  }

  marcarCompleted(taskElemt) {
    taskElemt.classList.add("tarea-completada");
  }
  deleteTask(taskElemt) {
    taskElemt.remove();
  }
}

class TaskManager {
  constructor(inputSelector, buttonSelector, listSelector) {
    this.input = document.querySelector(inputSelector);
    this.button = document.querySelector(buttonSelector);
    this.list = document.querySelector(listSelector);
    this.initialize();
  }

  initialize() {
    this.button.addEventListener("click", () => this.addTask());
    this.input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        this.addTask();
      }
    });
  }

  addTask() {
    const taskContent = this.input.value.trim();
    if (taskContent.length === 0) {
      return false;
    }
    const task = new Task(taskContent);
    this.list.appendChild(task.element);
    this.input.value = " ";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const taskManager = new TaskManager("#input", "#boton", "#lista-desordenada");
  
});
