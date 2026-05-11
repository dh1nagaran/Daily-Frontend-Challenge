let theme = document.querySelector(".theme");
let light = document.querySelector(".light");
let h2 = document.querySelector("h2");
let h5 = document.querySelector("h5");
// theme.innerHTML = `<i data-lucide="sun" class="light active" onclick="change()"></i>`;

function change() {
  light.classList.toggle("dark");
  const dark = document.querySelector(".dark");
  if (dark)
    theme.innerHTML = `<i data-lucide="moon" class="moon" onclick="change()"></i>`;
  else
    theme.innerHTML = `<i data-lucide="sun"  class="sun" onclick="change()"></i>`;
  lucide.createIcons();
}
lucide.createIcons();
let interval = setInterval(() => {
  let d = new Date();
  h2.innerHTML = `${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`;
  h5.innerHTML = `<i data-lucide="calendar-days" class="day"></i>  ${d.getDate()} / ${d.getMonth()} / ${d.getFullYear()}   `;
  lucide.createIcons();
}, 1000);
