import { createDomElement, appendChildrensInParent } from "../../../helper";
import { createResturantDishesCard } from "./cardDish";

export function createResturantFoodItemsSectionItems(parentId) {
    const header=createDomElement({
        elementTag:"DIV",
        className:"center-body-header",
        innerHtml:"Recommended"
    });
    const noOfItems=createDomElement({
        elementTag:"DIV",
        className:"center-body-num-of-items",
        innerHtml:"39 ITEMS"
    });
    const cardsSection=createDomElement({
        elementTag:"DIV",
        className:"center-body-card-items",
        id:"cardContainer"
    });
    appendChildrensInParent(parentId,[header,noOfItems,cardsSection]);
    createResturantDishesCard(cardsSection.id);
}