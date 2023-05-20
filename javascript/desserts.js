 const product = [
    {
        id: 0,
        img: 'images/desserts/product-desserts1.jpg',
        name: '	MACARONS',
        amt: 100,
    },
    {
        id: 1,
		img: 'images/desserts/product-desserts2.jpg',
        name: 'PROFITEROLE',
        amt: 110,
    },
    {
        id: 2,
        img: 'images/desserts/product-desserts3.jpg',
        name: 'RELIGIEUSE',
        amt: 120,
    },
    {
        id: 3,
        img: 'images/desserts/product-desserts4.jpg',
        name: 'PAIN AU CHOCOLAT',
        amt: 130,
    },

    {
        id: 4,
        img: 'images/desserts/product-desserts5.jpg',
        name: 'MILLE FEUILLE',
        amt: 140,
    },

    {
        id: 5,
        img: 'images/desserts/product-desserts6.jpg',
        name: 'ECLAIR',
        amt: 150,
    },

    {
        id: 6,
        img: 'images/desserts/product-desserts7.jpg',
        name: 'MADELEINE',
        amt: 160,
    },

    {
        id: 7,
        img: 'images/desserts/product-desserts8.jpg',
        name: 'CANNELE',
        amt: 170,
    },

    {
        id: 8,
        img: 'images/desserts/product-desserts9.jpg',
        name: 'KOUIGN AMANN',
        amt:180,
    },
    
    {
        id: 9,
        img: 'images/desserts/product-desserts10.jpg',
        name: 'CHOUQUETTE',
        amt: 190,
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


