import { appendChildrensInParent, createDomElement } from "../../../../../../../helper";
import { cardButtonClicked } from "./event";
// import  {cehck }from "./foodCardAddBtnhelper";

export function createDishCradAddBtn(btnId){
    const btn=createDomElement({
        elementTag:"BUTTON",
        className:"center-body-card-img-btn",
        innerHtml:"ADD",
        id:btnId
    });
    // cehck(btnId);
    btn.addEventListener("click",cardButtonClicked(btnId));
   
    const plus=createDomElement({
        elementTag:"DIV",
        className:"center-body-card-img-btn-plus-icon",
        innerHtml:"+"
    });
    btn.appendChild(plus);
    return btn;

}

