let image = [
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8MHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJlfGVufDB8MHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1438786657495-640937046d18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1700486006783-8121c874543c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM3fHxuYXR1cmV8ZW58MHwwfDB8fHww",
];

const img = document.querySelector("img");
let i = 0;
img.src = image[i];
let check = document.getElementById("check");
console.log(check);
let interval;
check.addEventListener("change", () => {
  if (check.checked) {
    interval = setInterval(() => {
      if (i == image.length - 1) i = 0;
      else i++;
      return (img.src = image[i]);
    }, 1000);
  } else clearInterval(interval);
  console.log(check.checked);
});

function changeP() {
  if (i == image.length - 1) i = 0;
  else i++;
  return (img.src = image[i]);
}
function changeM() {
  if (i == 0) i = image.length - 1;
  else i--;
  return (img.src = image[i]);
}
