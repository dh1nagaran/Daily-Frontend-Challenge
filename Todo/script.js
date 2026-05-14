let input = document.getElementById("tex");
let c2 = document.getElementById("contain-2");
let p = document.getElementById("para");
let btn = document.querySelector("button");
let data = [];
btn.addEventListener("click", () => {
  if (!input.value) p.textContent = "Enter the List";
  else if (data.indexOf(input.value) != -1)
    p.textContent = "List Already Exists";
  else {
    p.textContent = "";
    data.push(input.value);
    let label = "";
    data.map((d) => {
      label += `<div class="list-contain"><span class="text">${d}</span>  <i data-lucide="trash-2" class="icon delete-btn" ></i></div>`;
      lucide.createIcons();
    });
    c2.innerHTML = label;
    lucide.createIcons();

    c2.addEventListener("click", (e) => {
      const btnn = e.target.closest(".delete-btn");
      if (btnn) {
        const pdiv = btnn.closest(".list-contain");
        const textToRemove = pdiv.querySelector(".text").textContent;
        data = data.filter((item) => item !== textToRemove);
        pdiv.remove();
      }
    });
    input.value = "";
  }
});
lucide.createIcons();
