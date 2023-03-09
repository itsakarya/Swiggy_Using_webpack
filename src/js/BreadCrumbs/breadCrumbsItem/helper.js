import { createDomElement } from "../../helper";

export function createBreadCrumbsItem({
    displayText
}) {
    const element=createDomElement({
    elementTag: "LI",
    className: "link-nav-items-content",
    innerHtml: displayText
    })
    return element;
}