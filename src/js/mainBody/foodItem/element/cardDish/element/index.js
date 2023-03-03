import { createDomElement, appendChildrensInParent } from "../../../../../helper";
import { createDishCradRight } from "./rightCard";
import { createDishCradleft } from "./leftCard";

export function createDishCrad(
    {icon, dishName, price, description, image, subElemenLefttId, subElementRightId, individualId, parentId, btnId}
) {
    const container=createDomElement({
        elementTag:"DIV",
        className:"center-body-card",
        id:individualId
    });
    appendChildrensInParent(parentId, [container]);

    const leftDishCard=createDishCradleft(icon, dishName, price, description, subElemenLefttId, individualId);
    const righttDishCard=createDishCradRight(image, subElementRightId, individualId, btnId);

    appendChildrensInParent(individualId,[leftDishCard,righttDishCard]);
    return container;

}