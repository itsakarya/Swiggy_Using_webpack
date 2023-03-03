import { appendChildrensInParent, createDomElement } from "../../../../../../../helper";
// import { cardButtonClicked } from "./event/event";


export function createDishCradAddBtn(btnId){
    const btn=createDomElement({
        elementTag:"BUTTON",
        className:"center-body-card-img-btn",
        innerHtml:"ADD",
        id:btnId
    });
  
    // btn.onclick = (btnId) => {
        
    // };

    const plus=createDomElement({
        elementTag:"DIV",
        className:"center-body-card-img-btn-plus-icon",
        innerHtml:"+"
    });
    btn.appendChild(plus);
    return btn;
}