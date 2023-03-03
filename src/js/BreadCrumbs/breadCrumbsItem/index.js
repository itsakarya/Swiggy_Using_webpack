import { createDomElement, appendChildrensInParent } from "../../helper";
import { createBreadCrumbsItem } from "./helper";

export function createBreadCrumbsItems(parentId) {
    const navList = createDomElement({
        elementTag: "UL",
        className: 'link-nav-items',
        id: "navListItems",
    });
    appendChildrensInParent(parentId,[navList]);

    const home=createBreadCrumbsItem({
        displayText: "Home /"
    });
    const city=createBreadCrumbsItem({
        displayText: "Banglore /"
    });
    const location=createBreadCrumbsItem({
        displayText: "Brookfield /"
    });
    const resturantName=createBreadCrumbsItem({
        displayText: "Meghna Food"
    });
    appendChildrensInParent(navList.id,[home,city,location,resturantName]);
}
