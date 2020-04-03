let cart = document.querySelectorAll(".add-cart");

let foods = [
    {
        name:"bread",
        tag:"bread",
        price:75,
        incart:0
    },
    {
        name:"cookie",
        tag:"cookie",
        price:15,
        incart:0
    },
    {
        name:"bred",
        tag:"bred",
        price:10,
        incart:0
    }

]

for(let i = 0; i < cart.length; i++){
    cart[i].addEventListener('click', () =>{
        cartNumbers(foods[i]);
        totalCost(foods[i]);
        
    })
};
function onLoadCartNumber(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(food){
    // console.log(food);
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    }else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(food);
}
function setItems(food){
    let cartItems = localStorage.getItem('foodInCart');
    cartItems = JSON.parse(cartItems);
    console.log(cartItems);

    if(cartItems != null){
        if(cartItems[food.tag] == undefined){
            cartItems = {
                ...cartItems,
                [food.tag]: food
            }
        }
        cartItems[food.tag].incart += 1;
    }else{
        food.incart = 1;
        cartItems = {
            [food.tag]: food
        }
    }
    localStorage.setItem('foodInCart', JSON.stringify(cartItems));  
}
function totalCost(food){
    // console.log(food.price);
    let cartCost = localStorage.getItem('totalCost');
    console.log("the total cost is",cartCost);
    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + food.price)
    }else{
        localStorage.setItem('totalCost', food.price);
    } 
}
function displayCart(){
    let cartItems = localStorage.getItem('foodInCart');
    cartItems = JSON.parse(cartItems);
    let foodContainer = document.querySelector(".product");
    if(cartItems && foodContainer){
        foodContainer.innerHTML = "";
        Object.values(cartItems).map(item =>{
            foodContainer.innerHTML += `<div class="product">
            <ion-icon name="close-circle"></ion-icon>
            <span>${item.name}</span>
            </div> 
            <div class="priced">${item.price}</div>
            <div class="quantity">
            <ion-icon name="caret-back-circle-outline"></ion-icon>
            <span>${item.incart}</span> 
            <ion-icon name="caret-forward-circle-outline"></ion-icon>
            </div>
            `
        })
        
    }
    
}

{/* <img class="icom" src="./images/${item.tag}.jpeg"> */}
onLoadCartNumber();
displayCart();
// 
// const searchBar = document.querySelector('input');
// searchBar.addEventListener('keyup', (e) => {
//   const term = e.target.value.toLowerCase();
//   const books = document.getElementsByTagName('h3');
//     const title = book.firstElementChild.textContent;
//     if(title.toLowerCase().indexOf(e.target.value) != -1){
//       book.style.display = 'block';
//     } else {
//       book.style.display = 'none';
//     }
// });
// menu adding
let list = document.querySelector("#menu-list ul");
let button = document.querySelector("#button");
let input = document.querySelector('#input');
let dues = document.querySelector('#dues');

// delete
list.addEventListener('click', (e) => {
    if(e.target.className == 'delete'){
        const ease = e.target.parentElement;
        ease.parentNode.removeChild(ease);
    }
});
//add
button.addEventListener('click', (e) => {
    e.preventDefault();
    let value = input.value;
    let due = dues.value;
    let span = document.createElement('span');
    let quit = document.createElement('span');
    let amount = document.createElement('span')
    let add = document.createElement('li');

    quit.textContent = "delete";
    span.textContent = value;
    amount.textContent = `$ ${due}`;
   
    quit.classList.add('delete');
    span.classList.add('ting');
    amount.classList.add('amount');

    span.appendChild(amount);
    span.appendChild(quit);
    add.appendChild(span);
    list.appendChild(add);
    // amount

    
})