import { createDomElement, appendChildrensInParent } from "../../../helper";
import { contentItem } from "./helper";
import { ratingTimimgCostContainerItems } from "./rtcContainer";

export function contentItems(parentId) {
    const resturantName=contentItem({
      classId:"resturant-description-content-items-header",
      displayText:"Auntie Fung's"
    });
    const retsturantType=contentItem({
        classId:"resturant-description-content-items-header-style",
        displayText:"Thai, Chinese"
    });
    const resturantLocation=contentItem({
        classId:"resturant-description-content-items-header-style",
        displayText:'Munnekollal, Marathahalli | <b>Change Outlet<i class="bi bi-chevron-down bi-chevron-down-mod"></i></b>'
    });
    const ratingTimingCostContainer=createDomElement({
        elementTag:"DIV",
        className: "resturant-description-content-items-container",
        id:"rtcContainer"
    });
    appendChildrensInParent(parentId,[resturantName,retsturantType,resturantLocation,ratingTimingCostContainer]);
    ratingTimimgCostContainerItems(ratingTimingCostContainer.id);
}