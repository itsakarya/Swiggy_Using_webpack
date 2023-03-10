import { createDomElement, appendChildrensInParent } from "../../helper";
import { createBannerTabsSectionItem } from "./resturantBannerTabContainerItems";

export function createBannerTabsSection(parentId){
    const tabSection=createDomElement({
        elementTag:"DIV",
        className:"resturant-tabs",
        id:"resturantBannerTabContainer"
    });
    appendChildrensInParent(parentId,[tabSection]);
    createBannerTabsSectionItem(tabSection.id);
}