document.addEventListener("DOMContentLoaded", () => {
  const table = document.getElementById("numberTable");
  const selectedColorInput = document.getElementById("selectedColor");

  let counter = 1;
  for (let row = 0; row < 6; row++) {
    const tr = document.createElement("tr");
    for (let col = 0; col < 6; col++) {
      const td = document.createElement("td");
      td.textContent = counter;
      td.dataset.number = counter;
      tr.appendChild(td);
      counter++;
    }
    table.appendChild(tr);
  }

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  table.addEventListener("mouseover", (e) => {
    if (e.target.tagName === "TD" && e.target.dataset.number == 9) {
      e.target.style.backgroundColor = getRandomColor();
    }
  });

  table.addEventListener("click", (e) => {
    if (e.target.tagName === "TD" && e.target.dataset.number == 9) {
      e.target.style.backgroundColor = selectedColorInput.value;
    }
  });

  table.addEventListener("dblclick", (e) => {
    if (e.target.tagName === "TD" && e.target.dataset.number == 9) {
      const columnIndex = e.target.cellIndex;
      const rows = table.querySelectorAll("tr");

      for (let i = e.target.parentElement.rowIndex; i < rows.length; i += 2) {
        rows[i].children[columnIndex].style.backgroundColor =
          selectedColorInput.value;
      }
    }
  });
});
