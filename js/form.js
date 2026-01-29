import { addItem } from "./app.js";

export function createForm(editId, itemToEdit) {
  const form = document.createElement("form");
  form.innerHtml = `
    <h2>Grocery</h2>
          <div class="form-control">
            <input type="text" class="form-input" placeholder="e.g., Rice"/>
            <button type="submit" class="btn">Add Item</button>
          </div>`;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = form.querySelector(".form-input");
    const value = input.value.trim();

    if (!value) {
      alert("Please provide value");
      return;
    }

    addItem(value);

    input.value = "";
  });
  return form;
}
