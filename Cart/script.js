const products = [
  {
    id: 1,
    name: "Laptop",
    price: 55000,
    category: "Electronics",
    stock: 12,
    img: "https://plus.unsplash.com/premium_photo-1681566925324-ee1e65d9d53e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGxhcHRvcHxlbnwwfDB8MHx8fDA%3D",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 25000,
    category: "Electronics",
    stock: 20,
    img: "https://plus.unsplash.com/premium_photo-1680985551022-ad298e8a5f82?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHNtYXJ0cGhvbmV8ZW58MHwwfDB8fHww",
  },
  {
    id: 3,
    name: "Headphones",
    price: 2000,
    category: "Accessories",
    stock: 35,
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lfGVufDB8MHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    name: "Keyboard",
    price: 1500,
    category: "Accessories",
    stock: 18,
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8S2V5Ym9hcmR8ZW58MHwwfDB8fHww",
  },
  {
    id: 5,
    name: "Mouse",
    price: 800,
    category: "Accessories",
    stock: 40,
    img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91c2V8ZW58MHwwfDB8fHww",
  },
  {
    id: 6,
    name: "Monitor",
    price: 12000,
    category: "Electronics",
    stock: 10,
    img: "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TW9uaXRvcnxlbnwwfDB8MHx8fDA%3D",
  },
  {
    id: 7,
    name: "Tablet",
    price: 18000,
    category: "Electronics",
    stock: 15,
    img: "https://plus.unsplash.com/premium_photo-1680371834119-bc9d0057ddec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGFibGV0fGVufDB8MHwwfHx8MA%3D%3D",
  },
  {
    id: 8,
    name: "Camera",
    price: 32000,
    category: "Electronics",
    stock: 7,
    img: "https://images.unsplash.com/photo-1516724562728-afc824a36e84?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENhbWVyYXxlbnwwfDB8MHx8fDA%3D",
  },
  {
    id: 9,
    name: "Printer",
    price: 9000,
    category: "Office",
    stock: 9,
    img: "https://images.unsplash.com/photo-1650094980833-7373de26feb6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8UHJpbnRlcnxlbnwwfDB8MHx8fDA%3D",
  },
  {
    id: 10,
    name: "Speaker",
    price: 3500,
    category: "Audio",
    stock: 25,
    img: "https://images.unsplash.com/photo-1531104985437-603d6490e6d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BlYWtlcnxlbnwwfDB8MHx8fDA%3D",
  },
];

lucide.createIcons();

const icon = document.querySelector(".icon");
let cart = document.querySelector(".cart");
const x = document.querySelector(".x");
icon.addEventListener("click", () => {
  cart.style.right = "0%";
});
x.addEventListener("click", () => {
  cart.style.right = "-100%";
});
let carts = [];
let product = document.querySelector(".product");
let total = 0;
function get() {
  let items = `<div class="container my-5">
  <div class="row">`;
  products.map((p) => {
    items += `
    <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
      <div class="card h-100 shadow-sm">
        <img src="${p.img}" class="card-img-top object-fit-cover" alt="${p.name}" style="height: 200px;">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title fs-6">${p.name}</h5>
          <p class="card-text text-muted small flex-grow-1">${p.category}</p>
          <div class="d-flex justify-content-between align-items-center mt-3">
            <span class="fw-bold">$${p.price}</span>
            <button class="btn btn-primary btn-sm" onclick="addToCart(${p.id})">Add</button>
          </div>
        </div>
      </div>
    </div>`;
  });
  items += `  </div>
</div>`;
  product.innerHTML = items;
}
get();
let contain = document.querySelector(".cart-contain");
contain.innerHTML = `<div class="empty"><h1>Your cart is empty</h1></div>`;

const para = document.querySelector(".para");
function addToCart(id) {
  const exists = carts.some((p) => p.id === id);
  if (!exists) {
    products.filter((p) => {
      p.quantity = 1;
      p.stock -= 1;
      if (p.id === id && p.stock != 0) carts = [...carts, p];
    });
    console.log(carts);
  }
  addProduct();
}
function addProduct() {
  let total = 0;
  let tags = "";
  carts.map((c) => {
    total += c.quantity * c.price;
    console.log(total);
    tags += `<div class="card shadow-sm border-light mb-3" style="max-width: 540px;">
  <div class="row g-0 align-items-center">
    
    <div class="col-4 col-sm-3">
      <img src=${c.img}
           class="img-fluid rounded-start object-fit-cover w-100" 
           alt=${c.name} 
           style="height: 110px;">
    </div>
    <div class="col-8 col-sm-9">
      <div class="card-body p-3">
        <div class="d-flex justify-content-between align-items-start mb-1">
          <h6 class="card-title mb-0 text-truncate fw-semibold" style="max-width: 180px;">
            ${c.name}
          </h6>
          <button type="button" class="btn-close small" aria-label="Remove item" onclick="removeProduct(${c.id})" style="font-size: 0.75rem;"></button>
        </div>
        
        <p class="card-text small text-muted mb-2">${c.category}</p>
        
        <div class="d-flex justify-content-between align-items-center">
          <span class="fw-bold text-dark">  $${c.price}</span>
          <div class="input-group input-group-sm" style="width: 90px;">
            <button class="btn btn-outline-secondary px-2" type="button" onclick="quantityM(${c.id})">-</button>
            <input type="text" class="form-control text-center p-0" value=${c.quantity} readonly>
            <button class="btn btn-outline-secondary px-2" type="button" onclick="quantityP(${c.id})">+</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
 `;
  });
  if (carts.length == 0) {
    tags = `<div class="empty"><h1>Your cart is empty</h1></div>`;
  }
  contain.innerHTML = tags;
  para.textContent = carts.length == 0 ? "" : carts.length;
  console.log(total);
}

function removeProduct(id) {
  carts = carts.filter((p) => {
    if (p.id != id) return p;
  });
  addProduct();
}
function quantityP(p) {
  carts.filter((c) => {
    if (c.id === p && c.stock != 0) {
      c.quantity += 1;
      c.stock -= 1;
      console.log(c.stock);
    } else {
      window.alert("Stock not available");
    }
    addProduct();
  });
}
function quantityM(p) {
  carts.filter((c) => {
    if (c.id === p) {
      c.quantity -= 1;
      c.stock += 1;
      if (c.quantity == 0) removeProduct(c.id);
    }
  });
  addProduct();
}
