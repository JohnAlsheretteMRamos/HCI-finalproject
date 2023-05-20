 const product = [
    {
        id: 0,
        img: 'images/dishes/product-dishes1.jpg',
        name: 'CREPE',
        amt: 200,
    },
    {
        id: 1,
		img: 'images/dishes/product-dishes2.jpg',
        name: 'DUCK CONFIT',
        amt: 220,
    },
    {
        id: 2,
        img: 'images/dishes/product-dishes3.jpg',
        name: 'SLOW COOKER COQ AU VIN',
        amt: 230,
    },
    {
        id: 3,
        img: 'images/dishes/product-dishes4.jpg',
        name: 'BEEF BOURGUIGNON',
        amt: 240,
    },

    {
        id: 4,
        img: 'images/dishes/product-dishes5.jpg',
        name: 'RATATOUILLI',
        amt: 250,
    },

    {
        id: 5,
        img: 'images/dishes/product-dishes6.jpg',
        name: 'FRENCH ONION SOUP',
        amt: 260,
    },

    {
        id: 6,
        img: 'images/dishes/product-dishes7.jpg',
        name: 'STEAK TARTARE',
        amt: 270,
    },

    {
        id: 7,
        img: 'images/dishes/product-dishes8.jpg',
        name: 'QUICHE LORRAINE',
        amt: 280,
    },

    {
        id: 8,
        img: 'images/dishes/product-dishes9.jpg',
        name: 'TARTE TATIN',
        amt: 290,
    },
    
    {
        id: 9,
        img: 'images/dishes/product-dishes10.jpg',
        name: 'ESCARGOTS DE BOURGOGNE',
        amt: 300,
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