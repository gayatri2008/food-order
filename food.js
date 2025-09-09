
const modal = document.getElementById("productModal");
const modalImg = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const closeBtn = document.querySelector(".close");
const addToCartBtn = document.getElementById("addToCartBtn");

// Store current product
let currentProduct = {};

// Open modal when clicking dish card
document.querySelectorAll(".dish-card").forEach(card => {
  card.addEventListener("click", () => {
    const img = card.querySelector("img").src;
    const title = card.querySelector("h3").innerText;
    const price = card.querySelector("p").innerText;

    currentProduct = { img, title, price };

    modalImg.src = img;
    modalTitle.innerText = title;
    modalPrice.innerText = price;
    modal.style.display = "block";
  });
});

// Close modal
closeBtn.onclick = () => { modal.style.display = "none"; };
window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; };

// Add to Cart
addToCartBtn.addEventListener("click", () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(currentProduct);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(currentProduct.title + " added to cart 🛒");
  modal.style.display = "none";
});
  document.getElementById("food").addEventListener("click", function (e) {
    e.preventDefault();
    
    const tracker = document.getElementById("order-tracker");
    tracker.classList.remove("hidden");

    // Simulate status change
    let status = document.getElementById("order-status");
    status.innerText = "Preparing";

    setTimeout(() => status.innerText = "Cooking", 2000);
    setTimeout(() => status.innerText = "Out for Delivery", 4000);
    setTimeout(() => status.innerText = "Delivered 🚀", 6000);
  });

  function filterDishes() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const dishCards = document.querySelectorAll(".dish-card");

    dishCards.forEach((card) => {
      const title = card.querySelector("h3").innerText.toLowerCase();
      if (title.includes(input)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }
  // Save order after payment
function saveOrder(order) {
  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push({ ...order, status: "Pending" });
  localStorage.setItem("orders", JSON.stringify(orders));
}

// Load orders and display in orders.html
function loadOrders() {
  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  let container = document.getElementById("orders-list");

  if (!orders.length) {
    container.innerHTML = "<p>No orders yet.</p>";
    return;
  }

  container.innerHTML = orders.map((o, i) => `
    <div class="order-card">
      <h3>Order #${i + 1}</h3>
      <p>Items: ${o.items || "N/A"}</p>
      <p>Total: $${o.total || 0}</p>
      <p>Status: <strong>${o.status}</strong></p>
    </div>
  `).join("");
}
// Existing functions: saveOrder, loadOrders ...

// Load orders for admin view
function loadAdminOrders() {
  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  let container = document.getElementById("admin-orders");

  if (!orders.length) {
    container.innerHTML = "<p>No orders found.</p>";
    return;
  }

  container.innerHTML = orders.map((o, i) => `
    <div class="order-card">
      <h3>Order #${i + 1}</h3>
      <p>Items: ${o.items || "N/A"}</p>
      <p>Total: $${o.total || 0}</p>
      <label for="status-${i}">Status:</label>
      <select id="status-${i}" onchange="updateOrderStatus(${i}, this.value)">
        <option value="Pending" ${o.status === "Pending" ? "selected" : ""}>Pending</option>
        <option value="Preparing" ${o.status === "Preparing" ? "selected" : ""}>Preparing</option>
        <option value="Out for Delivery" ${o.status === "Out for Delivery" ? "selected" : ""}>Out for Delivery</option>
        <option value="Delivered" ${o.status === "Delivered" ? "selected" : ""}>Delivered</option>
      </select>
    </div>
  `).join("");
}

// Update order status
function updateOrderStatus(index, newStatus) {
  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  if (orders[index]) {
    orders[index].status = newStatus;
    localStorage.setItem("orders", JSON.stringify(orders));
    alert(`Order #${index + 1} status updated to: ${newStatus}`);
  }
}
