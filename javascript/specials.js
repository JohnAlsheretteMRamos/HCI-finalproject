 const product = [
    {
        id: 0,
        img: 'images/specials/product-special1.jpg',
        name: 'SALMON EN PAPILLOTE',
        amt: 400,
    },
    {
        id: 1,
		img: 'images/specials/product-special2.jpg',
        name: 'DAUPHINOISE POTATOES',
        amt: 400,
    },
    {
        id: 2,
        img: 'images/specials/product-special3.jpg',
        name: 'CREPES SUZETTE',
        amt: 400,
    },
    {
        id: 3,
        img: 'images/specials/product-special4.jpg',
        name: 'BOUILLABAISSE',
        amt: 400,
    },

    {
        id: 4,
        img: 'images/specials/product-special5.jpg',
        name: 'SALADE LANDAISE',
        amt: 400,
    },

    {
        id: 5,
        img: 'images/specials/product-special6.jpg',
        name: 'PATE EN CROUTE',
        amt: 400,
    },

    {
        id: 6,
        img: 'images/specials/product-special7.jpg',
        name: 'FINANCIER',
        amt: 400,
    },

    {
        id: 7,
        img: 'images/specials/product-special8.jpg',
        name: 'TERRINE',
        amt: 400,
    },

    {
        id: 8,
        img: 'images/specials/product-special9.jpg',
        name: 'SOLE MEUNIERE',
        amt: 400,
    },
    
    {
        id: 9,
        img: 'images/specials/product-special10.jpg',
        name: 'CROQUE MONSIEUR',
        amt: 400,
    },
    
    
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

const categories = [...new Set(product.map((item) => item))];
let i = 0;

document.addEventListener('DOMContentLoaded', () => {
  displaycart();

});

document.getElementById('container').innerHTML = categories
  .map((item) => {
    var { img, name, amt } = item;
    return `
            <div class='items'>
                <img src=${img}></img>
                <h4> ${name}</h4>
                 <p>₱ ${amt}.00</p>
                    <button onclick='addtocart(${i++})'>Add to cart</button>
            </div>
    `;
  })
  .join('');

function addtocart(a) {
  cart.push({ ...categories[a] });
  localStorage.setItem('cart', JSON.stringify(cart));
  added();
  displaycart();

}

function added() {
    alert("This product is added to your cart. press ok to proceed");
  }
function delElement(a) {
  cart.splice(a, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  displaycart();

}

