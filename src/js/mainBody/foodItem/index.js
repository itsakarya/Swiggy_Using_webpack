import { createDomElement, appendChildrensInParent } from "../../helper";
import { createResturantFoodItemsSectionItems } from "./element";

export function createResturantFoodItemsSection(parentId) {
    const centerBody=createDomElement({
        elementTag :"DIV",
        className:"center-body",
        id:"centerBody"
    });
    appendChildrensInParent(parentId,[centerBody]);
    createResturantFoodItemsSectionItems(centerBody.id);
}