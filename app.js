//add to cart
let productsCountEl = document.getElementById("products-count");
console.log(productsCountEl);

let addToCardBtns = document.querySelectorAll(".btn-add-to-cart");
console.log(addToCardBtns);

/*for (let i = 0; i < addToCardBtns.length; i++) {
  addToCardBtns[i].addEventListener("click", function () {
    let prevProductsCount = +productsCountEl.textContent;
    productsCountEl.textContent = prevProductsCount + 1;
    //console.log(prevProductsCount);
  });
}*/

addToCardBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    productsCountEl.textContent = +productsCountEl.textContent + 1;
  });
});
