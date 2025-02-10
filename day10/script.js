fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(result => console.log(result));

async function fetchProducts(){
    let response = await fetch("https://fakestoreapi.com/products");
    console.log(response);
}
fetchProducts(10)