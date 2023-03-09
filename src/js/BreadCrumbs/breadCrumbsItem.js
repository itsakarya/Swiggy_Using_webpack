import { createDomElement } from "../helper";
// import { createBreadCrumbsItems } from "./breadCrumbsItem";
import { createBreadCrumbsItems } from "../BreadCrumbs/breadCrumbsItem/index";

export function createBreadCrumbs() {
    const section = createDomElement({
        elementTag: "SECTION",
        className: "link-nav",
        id: "breadCrumbsContainer",
    });
    document.body.appendChild(section);
    // console.log(createBreadCrumbsItems);
    console.log("I am Running ...");
    createBreadCrumbsItems(section.id);    
}