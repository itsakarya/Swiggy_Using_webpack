import { createDomElement, appendChildrensInParent } from "../../../../../helper";
import { createDishCardRight } from "./rightCard/foodCardRight";
import { createDishCardleft } from "./leftCard/foodCardLeft";

export function createDishCard(
    {icon, dishName, price, description, image, subElemenLefttId, subElementRightId, individualId, parentId, btnId}
) {
    const container=createDomElement({
        elementTag:"DIV",
        className:"center-body-card",
        id:individualId
    });
    appendChildrensInParent(parentId, [container]);

    const leftDishCard=createDishCardleft(icon, dishName, price, description, subElemenLefttId, individualId);
    const righttDishCard=createDishCardRight(image, subElementRightId, individualId, btnId);

    appendChildrensInParent(individualId,[leftDishCard,righttDishCard]);
    return container;

}