const openEl = document.getElementById("openEl");
const closeEl = document.getElementById("closeEl");
const navEls = document.querySelector("nav");

openEl.addEventListener("click", () =>{
    navEls.style.display = "flex";
    openEl.style.display="none";
    closeEl.style.display="block";
});
closeEl.addEventListener("click", () =>{
    navEls.style.display = "none";
    openEl.style.display="block";
    closeEl.style.display="none";
});

//getting items
const orderBtnEls = document.querySelectorAll("#order-btn");
const cartmen = [];

orderBtnEls.forEach((orderBtn) => {
    orderBtn.addEventListener("click",() => {
        const parentEl = orderBtn.parentElement;
        
        const men = {
            image: parentEl.querySelector('img').src,
            price:  parentEl.querySelector("#nam").innerHTML,
            name: parentEl.querySelector(".name").innerHTML,
            quantity: 1,
            id: Math.floor(Date.now() + Math.random()),
        }
        console.log(cartmen);
        
        addTocart(men)
    });
});

function addTocart(item){
    const cartItem = JSON.parse(localStorage.getItem('cart-item')) || []
    cartItem.unshift(item)

    localStorage.setItem('cart-item', JSON.stringify(cartItem))

}






