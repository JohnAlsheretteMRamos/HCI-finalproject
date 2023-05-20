//NAVIGATION BAR

document.addEventListener('scroll', () => {
	const nav = document.querySelector('nav');
	
	if (window.scrollY > 0) {
		nav.classList.add('scrolled');
	} else {
		nav.classList.remove('scrolled');
	}
	
});



function displaycart() {
  let j = 0,
    total = 0;
  document.getElementById('count').innerHTML = cart.length;
  if (cart.length == 0) {
    document.getElementById('left-bar').innerHTML = '<p>Your cart is empty</p>';
    document.getElementById('total').innerHTML = '₱ ' + 0 + '.00';
  } else {
    document.getElementById('left-bar').innerHTML = cart
      .map((items) => {
        var { img, name, amt } = items;
        total = total + amt;
        document.getElementById('total').innerHTML = '₱ ' + total + '.00';
        return `
          <div class='box'>
            <div class='row-img'>
              <img class='rowimg' src=${img}>
            </div>
        <div class = 'content'>
            <h3>${name}</h3>
            <h4>₱ ${amt}.00</h4>
            <button class ='btn-area' onclick='delElement(${j++})'> <ion-icon name="trash"></ion-icon>Remove </button>
        </div>
            </div>
        `;
      })
      .join('');
  } 
    
    
}

