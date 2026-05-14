const trash = `<i data-lucide="trash-2"></i>`;
let input = document.getElementById("tex");
let c2 = document.getElementById("contain-2");
let p = document.getElementById("para");
let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  let data = [];
  if (data.indexOf(input.value) != -1) p.textContent = "Data already exists";
  else {
    data.push(input.value);
    data.forEach((d) => {
      let label = document.createElement("label");
      label.innerHTML += `<span class="text">${d}</span>  <i data-lucide="square-pen" class="icon"></i> <i data-lucide="trash-2"  class="icon delete-btn"></i>`;
      c2.append(label);
      const del = label.querySelector(".delete-btn");
      del.addEventListener("click", () => {
        let text = label.querySelector(".text").textContent;
        data = data.filter((t) => {
          return t !== text;
        });
        label.remove();
      });
      lucide.createIcons();
    });
    console.log(data);
  }
});
lucide.createIcons();
