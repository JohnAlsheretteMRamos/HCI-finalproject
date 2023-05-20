 const product = [
    {
        id: 0,
        img: 'images/drinks/product-drinks1.jpg',
        name: 'CHERRY COCKTAIL',
        amt: 100,
    },
    {
        id: 1,
		img: 'images/drinks/product-drinks2.jpg',
        name: 'ANISE DRINKS',
        amt: 100,
    },
    {
        id: 2,
        img: 'images/drinks/product-drinks3.jpg',
        name: 'WHISKY',
        amt: 100,
    },
    {
        id: 3,
        img: 'images/drinks/product-drinks4.jpg',
        name: 'BIERE',
        amt: 100,
    },

    {
        id: 4,
        img: 'images/drinks/product-drinks5.jpg',
        name: 'CHAMPAIGNE',
        amt: 100,
    },

    {
        id: 5,
        img: 'images/drinks/product-drinks6.jpg',
        name: 'ABSINTHE',
        amt: 100,
    },

    {
        id: 6,
        img: 'images/drinks/product-drinks7.jpg',
        name: 'PINEAU DES CHARENTES',
        amt: 100,
    },

    {
        id: 7,
        img: 'images/drinks/product-drinks8.jpg',
        name: 'CREME DE BANANE',
        amt: 100,
    },

    {
        id: 8,
        img: 'images/drinks/product-drinks9.jpg',
        name: 'KIR ROYALE',
        amt: 100,
    },
    
    {
        id: 9,
        img: 'images/drinks/product-drinks10.jpg',
        name: 'MONACO',
        amt: 100,
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

