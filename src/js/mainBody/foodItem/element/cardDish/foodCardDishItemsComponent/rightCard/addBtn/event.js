import { appendChildrensInParent, createDomElement } from "../../../../../../../helper";
import { addToCart, removeFromCart} from "./cardfunctions";

export function createQuanityBtn(btnId) {
    document.getElementById(btnId).innerHTML='';
    // let target=document.getElementById(btnId);
    // target.disabled=true;

    const dec = createDomElement ({
        elementTag : "button",
        innerHtml:'<i class="bi bi-dash"></i>'
    });
    dec.addEventListener("click", () => {removeFromCart(btnId)});

    const quantity= createDomElement({
        elementTag:"div",
        id:`quantity-${btnId}`,
        innerHtml:'1'
    });
    const inc = createDomElement({
        elementTag:"button",
        innerHtml:'<i class="bi bi-plus"></i>'
    });
    inc.addEventListener("click", () => {addToCart(btnId)});
    appendChildrensInParent(btnId,[dec,quantity,inc]);
    
}

export function cardButtonClicked(btnId) {
    
    return () => {
        const target = document.getElementById(btnId);
        // console.log("target : ", target);
        if(target != null){
            target.disabled = true;
        }
        createQuanityBtn(btnId);
        addToCart(btnId);
    
        // console.log(btnId);
        // document.getElementById(btnId).innerHTML=`
        // <button onclick=${removeFromCart(btnId)}>
        // <i class="bi bi-dash"></i>
        // </button>
        // <div id="quantity-${btnId}" class="quantity">
        // 0
        // </div>
        // <button onclick=${addToCart(btnId)}>
        // <i class="bi bi-plus"></i>
        // </button>
        // `
    // const inc=createDomElement({
    //     elementTag:"DIV",
    //     innerHtml:"-",
    //     // className:btnId,
    //     id:`inrement-${btn.id}`
    // });
    
    // const counter=createDomElement({
    //     elementTag:"DIV",
    //     innerHtml:"count",
    //     // className:btnId,
    //     id:`quantity-${btn.id}`
    // });
    // const dec=createDomElement({
    //     elementTag:"DIV",
    //     innerHtml:"+",
    //     // className:btnId,
    //     id:`decrement${btn.id}`
    // });
    
    // appendChildrensInParent(btn.id,[inc,counter,dec]);   
    }

    // btn.id.innerHtml = 'nceua';

}