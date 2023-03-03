import { createDomElement, appendChildrensInParent } from "../../helper";
import { createAsideSectionItems } from "./element";

export function createAsideSection(parentId) {
    const aside= createDomElement({
        elementTag:"DIV",
        className:"aside",
        id:"aisdeItem"
    });
    appendChildrensInParent(parentId,[aside]);
    createAsideSectionItems(aside.id);
}