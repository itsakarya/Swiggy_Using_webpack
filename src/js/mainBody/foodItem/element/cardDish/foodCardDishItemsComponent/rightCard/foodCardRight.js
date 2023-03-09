import { createDomElement, appendChildrensInParent } from "../../../../../../helper";
import { createDishCradAddBtn } from "./addBtn/foodCardAddBtn";
// import { cardButtonClicked } from "./addBtn/event";

export function createDishCardRight(image, subElementRightId, individualId, btnId){
    const right=createDomElement({
        elementTag:"DIV",
        className:"center-body-card-img",
        id: subElementRightId, 
    });
    appendChildrensInParent(individualId,[right]);

    const dishImage=createDomElement({
        elementTag:"DIV",
        className:"center-body-card-img-item",
        innerHtml:image
    });

    const addBtn=createDishCradAddBtn(btnId);
 

    const display=createDomElement({
        elementTag:"DIV",
        className:"center-body-card-img-btn-below-content",
        innerHtml:"customisable"
    });
    appendChildrensInParent(right.id,[dishImage,addBtn,display]);
  
    return right;
}