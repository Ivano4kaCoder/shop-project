//add to cart
let productsCountEl = document.getElementById("products-count");
//console.log(productsCountEl);

let addToCardBtns = document.querySelectorAll(".btn-add-to-cart");
//console.log(addToCardBtns);

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

//like products
let likeBtns = document.querySelectorAll(".like");
//console.log(likeBtns);

likeBtns.forEach((item) => {
  item.addEventListener("click", function () {
    item.classList.toggle("liked");
  });
});

//2 way
/*let isLiked = false;
const likeClick = () => {
  if (!isLiked) {
    buttonLike.classList.add("isLiked");
    isLiked = !isLiked;
  } else {
    buttonLike.classList.remove("isLiked");
    isLiked = !isLiked;
  }
};
//Event Listeners
buttonLike.addEventListener("click", likeClick);
*/

//more details
let moreDetailsBtns = document.querySelectorAll(".btn-more-details");
//console.log(moreDetailsBtns);
let modal = document.querySelector(".modal");
//console.log(modal);
let closeBtn = document.querySelector(".btn-close");
//console.log(closeBtn);

moreDetailsBtns.forEach((item) => {
  item.addEventListener("click", openModal);
});
closeBtn.addEventListener("click", closeModal);

function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
}

function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
}

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal();
  }
});

modal.addEventListener("keydown", function (e) {
  if (e.code === "Escape") {
    closeModal();
  }
});

//slick
$(".slider").slick({ dots: true });
