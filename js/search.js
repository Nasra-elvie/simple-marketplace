const products = [
  { name: "Apples", category: "fruit" },
  { name: "Carrots", category: "vegetable" },
  { name: "Tomatoes", category: "vegetable" },
  { name: "Bananas", category: "fruit" }
];

const searchInput = document.getElementById("search");
const categoryFilter = document.getElementById("categoryFilter");
const productList = document.getElementById("product-list");

function displayProducts(filtered) {
  productList.innerHTML = filtered
    .map(p => `<div>${p.name} (${p.category})</div>`)
    .join("");
}

function filterProducts() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;

  const filtered = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm);
    const matchesCategory = selectedCategory ? p.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  displayProducts(filtered);
}

searchInput.addEventListener("input", filterProducts);
categoryFilter.addEventListener("change", filterProducts);

displayProducts(products);
