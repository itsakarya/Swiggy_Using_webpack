import { basket } from "../../../../../../aside";
import { createDishCradAddBtn } from "./foodCardAddBtn";
import { cehck }  from "./foodCardAddBtnhelper";


export function addToCart(itemId) {
    console.log("dec called");
    let found=false;
    let result = 1;
    basket.forEach((item, i)=> {
    if( item.id === itemId) {
        found=true;
        basket[i].quantity = basket[i].quantity + 1;
        result = basket[i].quantity;
    }
    }) 
    if(found=== false) {
        basket.push({
            id : itemId,
            quantity: 1
        })
    }
//   console.log(basket);
document.getElementById(`quantity-${itemId}`).innerHTML = result;
}

export function removeFromCart(itemId) {
    console.log("dec called");
    let result=1;
     let currItemIndex = basket.findIndex(item => item.id === itemId);
     if(currItemIndex === -1){
     } else if(basket[currItemIndex].quantity === 1) {
        basket = basket.filter(item => item.id != itemId);
        document.getElementById(itemId).innerHTML=cehck(itemId);
        
     } else {
        basket[currItemIndex].quantity = basket[currItemIndex].quantity - 1;
        result = basket[currItemIndex].quantity;
     }

    document.getElementById(`quantity-${itemId}`).innerHTML = result;
    //  console.log(basket);
}



