const btnSubmit = document.querySelector("input[type=submit");
const titleInput = document.querySelector("input[type=text");
const dateInput = document.querySelector("input[type=date]");
const textarea = document.querySelector("textarea");
const noteContainer = document.getElementsByClassName("note-container")[0];

btnSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  const newNote = document.createElement("div");
  newNote.className = "note";
  newNote.innerHTML = `
            <div>
              <div class="modify-note"><i class="fa-solid fa-pencil"></i></div>
              <div class="delete-note"><i class="fa-solid fa-circle-xmark"></i></div>
            </div>
            <div class="note-title">
              <p>${titleInput.value}</p>
            </div>
            <div class="note-date">
              <p>${dateInput.value}</p>
            </div>
            <div class="note-description">
              ${textarea.value}
            </div>`;
  noteContainer.appendChild(newNote);
});

noteContainer.addEventListener("click", (event) => {
  if (event.target.closest(".delete-note")) {
    const noteToDelete = event.target.closest(".note");
    noteContainer.removeChild(noteToDelete);
  }
});
