let products = []

let loadProducts = () => {

}

let addProduct = () => {
  let pId = document.getElementById('new_product_id').value
  let pName = document.getElementById('new_product_name').value
  let pQuantity = document.getElementById('new_product_quantity').value
  let pSize = document.getElementById('new_product_size').value
  let pPrice = document.getElementById('new_product_price').value

  products = [
    ...products,
    {
      "id": pId,
      "name": pName,
      "quantity": pQuantity,
      "size": pSize,
      "price": pPrice
    }
  ]
  console.log({
    "id": pId,
    "name": pName,
    "quantity": pQuantity,
    "size": pSize,
    "price": pPrice
  });
  loadProducts()

  document.getElementById('new_product_id').value = ''
  document.getElementById('new_product_name').value = ''
  document.getElementById('new_product_quantity').value = ''
  document.getElementById('new_product_size').value = ''
  document.getElementById('new_product_price').value = ''
}

// document.getElementById('add_product_btn').addEventListener('click', () => {
//   addProduct()
// });