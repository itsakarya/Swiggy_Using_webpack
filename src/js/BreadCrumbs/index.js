import { createDomElement } from "../helper";
import { createBreadCrumbsItems } from "./breadCrumbsItem";

export function createBreadCrumbs() {
    const section = createDomElement({
        elementTag: "SECTION",
        className: "link-nav",
        id: "breadCrumbsContainer",
    });
    document.body.appendChild(section);
    createBreadCrumbsItems(section.id);    
}