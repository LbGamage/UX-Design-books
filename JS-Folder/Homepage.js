
//Lihini Start
function searchBar() {
  var searchInput = document.getElementById('search');
    var x = document.getElementById("searchDrop");
    if (searchInput.value!=='') {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function menuBar(){
    var x = document.getElementById("menuDrop");
    var background = document.getElementById("bg");
    if (x.style.display === "none") {
      background.style.display = "block";
      x.style.display = "block";
    } else {
      background.style.display ="none";
      x.style.display = "none";
    }
  }

  function descripDrop(){
    var x = document.getElementById("descripText");
    var arrow = document.querySelector('.descrip-arrow');
    if (x.style.display === "none") {
      x.style.display = "block";
      arrow.classList.toggle('rotate');
    } else {
      x.style.display = "none";
      arrow.classList.remove('rotate');

    }
  }

  document.getElementById("linkHome").onclick = function () {
    location.href = "index.html";
}

function openCart() {
  var background = document.getElementById("bg");
  var div = document.getElementById("sideBar");
  
  if (div.style.display === "none") {
    background.style.display = "block";
    div.style.display = "block";
    document.body.style.overflow = "hidden"; // Hide the scrollbar
  } else {
    background.style.display = "none";
    div.style.display = "none";
    document.body.style.overflow = "auto"; // Show the scrollbar
  }
}

function addedCart(){
  const addedToCart = document.getElementById('addCart');
  const notif = document.getElementById('cartNotif');
  const cartItem =document.getElementById('popCart');
  const emptyCart = document.getElementById('emptyCart');

    notif.style.display = "block";
    cartItem.style.display = "block";
    emptyCart.style.display="none";
  
  addedToCart.innerText = "Added to Cart";
  addedToCart.style.backgroundColor="#F9C290"
  addedToCart.style.color="black"
  setTimeout(()=>{
    addedToCart.innerText ="Add to Cart"
    addedToCart.style.backgroundColor="#A1483D"
    addedToCart.style.color="white"
}, 2000);
}

function rightScroll() {
  const left = document.querySelector(".scroll-images");
  left.scrollBy(200, 0);
}
function leftScroll() {
  const right = document.querySelector(".scroll-images");
  right.scrollBy(-200, 0);
}



//lihini end