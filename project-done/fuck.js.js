//* scroll*/
window.onscroll = function() {myFunction()};
    var navbar = document.getElementById('navbar');
    var sticky = navbar.offsetTop;

    function myFunction(){
        if(window.pageYOffset > sticky) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    }
//* scroll-end*/.
//* yourcart*/
function cartFunction() {
    var yourCart = document.getElementById('yourCart0');
    if (yourCart.style.display === "none"){
        yourCart.style.display = "block";
    } else {
        yourCart.style.display = "none";
    }
}
//* your cart-end*/




//** images for products and button for it */
const images = ["images3/1024.png", "images3/51LCsoHTenL.jpg", "images3/gf.png", "images3/tt.png"]; // Add more image paths as needed
let currentImageIndex = 0;


function showImage() {
    const imageContainer = document.getElementById("image-container");
    imageContainer.innerHTML = `<img src="${images[currentImageIndex]}" alt="Image ${currentImageIndex + 1}">`;
}


function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage();
}


const nextButton = document.getElementById("nextButton");
nextButton.addEventListener("click", nextImage);


showImage();
//**images for products and button for it-end*/
//** to open featured product */
function nvidiaFunction() {
    var overlay = document.getElementById('overlay');
    var nvidiaCart = document.getElementById('nvidiaMax');
    if (nvidiaCart.style.display === "none"){
        nvidiaCart.style.display = "block";
        overlay.style.display = 'block';
        nvidia.style.position = 'fixed';
      
    } else {
        overlay.style.display = 'none';
        nvidiaCart.style.display = "none";
    }
}
//** to open featured product-end */
//* to close the featured product//
var nvidia = document.getElementById('nvidiaMax');
var closeBtn = document.getElementById('closeBtn');
var overlay = document.getElementById('overlay');

function closeDiv() {
    nvidia.style.display = 'none';
    overlay.style.display = 'none';

}

closeBtn.addEventListener('click', closeDiv);

//** to clsoe the featured product-end */
//** wishlist open images */
var  wishListCount = 0;
function toggleWishlist(productName, imageUrl) {
    var wishlistItems = document.getElementById('wishlist-items');
    var existingItem = Array.from(wishlistItems.children).find(item => item.textContent === productName);
 
    

   

    var addBtn = document.getElementById('addBtn');
    if(addBtn.textContent === 'Add to Wishlist'){
      addBtn.textContent = 'Added to Wishlist';
    } else {
        addBtn.textContent = 'Add to Wishlist';
    }

    if (existingItem) {
        // If the product is already in the wishlist, remove it
        wishlistItems.removeChild(existingItem);
        wishListCount--;
    } else {
        // If the product is not in the wishlist, add it
        var listItem = document.createElement('li');
        listItem.textContent = productName;

        // Create an image element and set its source attribute
        var productImage = document.createElement('img');
        productImage.src = imageUrl;
        productImage.alt = productName;
        productImage.width = 50;
        wishListCount++; // Set the image width as per your requirement

        // Append the image to the list item before appending the list item to the wishlist
        listItem.appendChild(productImage);

        // Append the list item to the wishlist
        wishlistItems.appendChild(listItem);
    }
    document.getElementById('wishlist-count').textContent = wishListCount;
}
//** wishlist open images-end */
//** to open the wishlist display */
function clickFunction (){
    
    var wishListhid = document.getElementById('wishlist');
    var overlay = document.getElementById('overlay');
    if (overlay.style.display === 'block'){
        overlay.style.display = 'none';
        wishlist.style.display = 'none';
    } else {
        overlay.style.display = 'block';
        wishlist.style.display = 'block';
    }
    
}
//** to open the wishlist display-end */
//** to close wishlist display button */
var wishlist = document.getElementById('wishlist');
var wiscanBtn = document.getElementById('wiscanBtn');

function closeWish (){
    if (wishlist.style.display === 'block'){
        wishlist.style.display = 'none';
        overlay.style.display = 'none';
      
    } else {
        wishlist.style.display = 'block';
        overlay.style.display = 'block';
        
    }
}
wiscanBtn.addEventListener('click', closeWish);
//* to close wishlist display button-end/

//* profile Function*/
function profileFunction(){
    var profF = document.getElementById('profF');
    var profileTab = document.getElementById('profileTab');
    var overlay = document.getElementById('overlay');
    if (profileTab.style.display === 'none'){
        profileTab.style.display = 'block';
      

    } else {
        profileTab.style.display = 'none';
      
    }
    
}

//* profile function-end*/
//* productopen*//
var products = [
    { name: "Nvidia GeForce RTX 4080", price: 94113, image: "images3/1024.png" },
    { name: "Product 2", price: 15, image: "images3/razer-blackshark-v2-x-removebg-preview.png" }
];

function addToCart(index) {
    var quantityInput = document.getElementById("quantity" + (index + 1));
    var quantity = parseInt(quantityInput.value);

    if (isNaN(quantity) || quantity <= 0) {
        alert("Please enter a valid quantity.");
        return;
    }

    var product = products[index];
    var cartItem = document.createElement("li");
    cartItem.innerHTML = `<img src="${product.image}" alt="${product.name}" class="cart-image">
                          ${product.name}  (${quantity}) - ₱${product.price * quantity}
                          <button onclick="removeFromCart(this, ${product.price * quantity})">Remove</button>`;
    document.getElementById("cart-list").appendChild(cartItem);

    var totalPrice = parseFloat(document.getElementById("total-price").textContent);
    totalPrice += product.price * quantity;
    document.getElementById("total-price").textContent = totalPrice.toFixed(2);
}

function removeFromCart(button, price) {
    var item = button.parentNode;
    item.parentNode.removeChild(item);

    var totalPrice = parseFloat(document.getElementById("total-price").textContent);
    totalPrice -= price;
    document.getElementById("total-price").textContent = totalPrice.toFixed(2);
}



//*productopen-end*//
//* cart-items add*//

//*cart-item add-end*//
//* razerFUnction //*
function razerFunction(){
    var razerBocs = document.getElementById('razerBocs');
    var overlay = document.getElementById('overlay');
    
    if (razerBocs.style.display === 'none'){
     
        razerBocs.style.display = 'block';
        overlay.style.display = 'block';
    } else {
        razerBocs.style.transition = '0.4s, ease';
        razerBocs.style.display = 'none';
        overlay.style.display = 'none';
    }
}
//* razerFunction-close//*