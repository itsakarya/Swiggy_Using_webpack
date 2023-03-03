import { createDomElement, appendChildrensInParent } from "../../helper";
import { createBannerightSectionItems } from "./element";

export function createBannerightSection(parentId) {
    const offerContainer=createDomElement({
        elementTag:"DIV",
        className:"resturant-offer-items",
        id:"offerContainer"
    });
    appendChildrensInParent(parentId,[offerContainer]);
    createBannerightSectionItems(offerContainer.id);
}