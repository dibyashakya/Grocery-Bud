import { addItem, updateItemName } from "./app";

export function createForm(editId, itemToEdit) {
  const form = document.createElement("form");
  form.innerHtml = `
    <h2>Grocery</h2>
          <div class="form-control">
            <input type="text" class="form-input" placeholder="e.g., Rice" value="${itemToEdit ? itemToEdit.name : ""}"/>
            <button type="submit" class="btn">${editId ? "edit item" : "Add Item"}</button>
          </div>`;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = form.querySelector(".form-input");
    const value = input.value.trim();

    if (!value) {
      alert("Please provide value");
      return;
    }

    if (editId) {
      updateItemName(value);
    } else {
      addItem(value);
    }

    input.value = "";
  });
  return form;
}
