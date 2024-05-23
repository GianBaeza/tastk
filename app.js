const input = document.querySelector("#input");
const boton = document.querySelector("#boton");
const lista = document.querySelector("#lista-desordenada");

boton.addEventListener("click", agregarTask);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    agregarTask();
  }
});

function agregarTask() {
  let valorCampo = input.value.trim();

  if (valorCampo.length === 0) {
    return false;
  }

  const newElemet = document.createElement("li");
  newElemet.classList.add("lista-task");
  newElemet.textContent = valorCampo;

  const botonTareaCompletada = document.createElement("button");
  botonTareaCompletada.id = "completada";
  botonTareaCompletada.classList.add("boton-completado");
  botonTareaCompletada.textContent = "completada";

  const botonEliminarTarea = document.createElement("button");
  botonEliminarTarea.id = "eliminar";
  botonEliminarTarea.classList.add("boton-eliminada");
  botonEliminarTarea.textContent = "eliminar";

  botonTareaCompletada.addEventListener("click", function () {
    newElemet.classList.add("tarea-completada");
  });
  botonEliminarTarea.addEventListener("click", function () {
    newElemet.textContent = "";
    newElemet.classList.remove("lista-task");
    newElemet.style.listStyleType = "none";
  });

  newElemet.append(botonTareaCompletada, botonEliminarTarea);
  lista.appendChild(newElemet);
  input.value = "";
}
