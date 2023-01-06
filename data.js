const menuArray = [
    {
        name: "Pizza",
        ingredients: ["pepperoni", "mushroom", "mozarella"],
        id: 0,
        price: 14,
        emoji: "🍕"
    },
    {
        name: "Hamburger",
        ingredients: ["beef", "cheese", "lettuce"],
        price: 12,
        emoji: "🍔",
        id: 1
    },
    {
        name: "Beer",
        ingredients: ["grain, hops, yeast, water"],
        price: 12,
        emoji: "🍺",
        id: 2
    }
]

let main = document.getElementById("main");
for(let i=0; i<menuArray.length; i++){
        main.innerHTML += `
        <div class="pizza">
            <div class="order-photo">${menuArray[i].emoji} </div>
            <div class="order-description">
                <span class="name">${menuArray[i].name}</span>
                <span class="ingredients">${menuArray[i].ingredients}</span>
                <span class="price"> $ ${Number(menuArray[i].price)}</span>
            </div>
            <div class="btn">
            <button id=${"addbtn" + i } class="addbtn" onclick = "addOrder(${i})" onclick = "priceCollection(${i})"}>+</button>
            </div>
        </div> 
        <hr class="line">`
}

let order = document.getElementById("orderList");
function addOrder (i){
    order.innerHTML += `
    <ul>
        <li id='ordername'> ${menuArray[i].name}</li>
        <li class=${"price"} id=${price}  > $ ${Number(menuArray[i].price)}</li>
    </ul>
  `
}



// let price = document.getElementById("price");
// let allprice ;
// allprice +=price ;
// let collection = document.getElementById("collection");
//     collection.innerHTML = `<ul>
//     <li style="font-size: larger; font-weight: 600;" >Total Price: </li>
//     <li class="total"> ${allprice}</li>
//     </ul>`





let footer = document.getElementById("footer");
let popUp = document.getElementById("popup");
let finalDivs = document.getElementById("finaldivs");

function parOrder(){
    popUp.classList.add("open-form");
}
function completeOrder(){
    popUp.classList.remove("open-form");
    footer. innerHTML = `
        <div class = "final-div"> Thanks, James! Your order is on its way!</div>
    `
}