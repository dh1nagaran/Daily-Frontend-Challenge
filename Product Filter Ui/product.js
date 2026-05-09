const products = [
  {
    id: 1,
    name: "iPhone 15",
    category: "Electronics",
    img: "https://images.unsplash.com/photo-1695048132854-8d9e119f957b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGlQaG9uZSUyMDE1fGVufDB8MHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    name: "Samsung TV",
    category: "Electronics",
    img: "https://plus.unsplash.com/premium_photo-1681044639299-3d461cbb9f8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U2Ftc3VuZyUyMHR2fGVufDB8MHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    name: "Laptop",
    category: "Electronics",
    img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fExhcHRvcHxlbnwwfDB8MHx8fDA%3D",
  },

  {
    id: 4,
    name: "Nike Shoes",
    category: "Footwear",
    img: "https://images.unsplash.com/photo-1644426059269-36535c7c00fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TmlrZSUyMFNob2VzfGVufDB8MHwwfHx8MA%3D%3D",
  },
  {
    id: 5,
    name: "Adidas Shoes",
    category: "Footwear",
    img: "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QWRpZGFzJTIwU2hvZXN8ZW58MHwwfDB8fHww",
  },

  {
    id: 6,
    name: "T-Shirt",
    category: "Clothing",
    img: "https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VC1TaGlydHxlbnwwfDB8MHx8fDA%3D",
  },
  {
    id: 7,
    name: "Jeans",
    category: "Clothing",
    img: "https://images.unsplash.com/photo-1527016021513-b09758b777bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGplYW5zfGVufDB8MHwwfHx8MA%3D%3D",
  },

  {
    id: 8,
    name: "Refrigerator",
    category: "Appliances",
    img: "https://images.unsplash.com/photo-1657462216514-d16d2717c373?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fFJlZnJpZ2VyYXRvciUyMGZybyUyMHNhbHxlbnwwfDB8MHx8fDA%3D",
  },
  {
    id: 9,
    name: "Washing Machine",
    category: "Appliances",
    img: "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2FzaGluZyUyME1hY2hpbmV8ZW58MHwwfDB8fHww",
  },

  {
    id: 10,
    name: "Notebook",
    category: "Stationery",
    img: "https://plus.unsplash.com/premium_photo-1677187301411-eaab5702a215?q=80&w=1223&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
let cate = [
  "All",
  ...new Set(
    products.map((m) => {
      return m.category;
    }),
  ),
];
let div = document.querySelector(".main");
let divv = document.querySelector(".button_header");
let btns;
cate.map((c) => {
  let btnn = document.createElement("button");
  btnn.innerText = c;
  btnn.addEventListener("click", () => {
    get(c);
  });
  divv.append(btnn);
});
function get(category) {
  let all;
  if (category === "All") {
    all = products;
  } else {
    all = products.filter((p) => {
      if (p.category === category) return p;
    });
  }

  let card_product = "";
  all.map((p) => {
    card_product =
      card_product +
      `
        <div class="col-4">
          <div class="card m-2">
            <img src=${p.img} alt="..." />
            <div class="card-body">
              <h5 class="card-title">${p.name}</h5>
              <p class="card-text">
              ${p.category}
              </p>
              <a href="#" class="btn btn-primary">Add Card</a>
            </div>
          </div>
        </div>`;
  });
  console.log("card_product", card_product);
  div.innerHTML = card_product;
}
get("All");
