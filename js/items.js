import { createSingleItem } from "./single-item";

export function createItems(itemsArray) {
  const container = document.createElement("div");
  container.className = "items";

  itemsArray.forEach((item) => {
    const itemElemet = createSingleItem(item);
    container.appendChild(itemElemet);
  });
  return container;
}
