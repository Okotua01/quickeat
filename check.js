const loud = JSON.parse(localStorage.getItem('cart-item'));
console.log(loud);

const loudEl = document.querySelector(".loud");

loud.forEach((item) => {
    const divEl = document.createElement("div");
    divEl.classList.add("loud");

    const innerHTML = `<img src="${item?.image}" alt="food-2">
    <p>${item?.name}</p>
    <p class="price">${item?.price}</p>
    <button>-</button>
    <p class="num">${item?.quantity}</p>
    <button>+</button>
    `;

    divEl.innerHTML = innerHTML
    loudEl.append(divEl)

});

function handleIncrement(item) {
    const cart_item = getItem();
    const newCartItem = cart_items.map((cart_item) => {
        if (cart_item.id == item.id) {
            return {...cart_item, quantity: cart_item.quantity + 1};
        

        } else{
            return cart_item;

        }

        
    });
    localStorage.setItem("cart-items", JSON.stringify(newCartItem));

}

function getItem() {
    
}