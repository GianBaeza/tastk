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
  const nuevatarea = createTarea(valorCampo);
  lista.appendChild(nuevatarea);
  input.value = " ";
}

function createTarea(valorCampo) {
  const nuevatarea = document.createElement("li");
  nuevatarea.classList.add("lista-task");
  nuevatarea.textContent = valorCampo;

  const botonTareaCompletada = createButton("Completada", "boton-completado");
  botonTareaCompletada.addEventListener("click", handleTareaCompletada);

  const botonEliminarTarea = createButton("Eliminar", "boton-eliminada");
  botonEliminarTarea.addEventListener("click", handleTareaEliminada);

  nuevatarea.append(botonTareaCompletada, botonEliminarTarea);
  return nuevatarea;
}

function createButton(texto, clase) {
  const boton = document.createElement("button");
  boton.classList.add(clase);
  boton.textContent = texto;
  return boton;
}

function handleTareaCompletada(e) {
  const tarea = e.target.parentNode;
  tarea.classList.add("tarea-completada");
}

function handleTareaEliminada(e) {
  const tarea = e.target.parentNode;
  tarea.remove();
}

function handleEnterTeclado(e) {
  if (e.key === "Enter") {
    agregarTask();
  }
}
