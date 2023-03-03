import { createDomElement } from "../../helper";

export function createBreadCrumbsItem({
    displayText
}) {
    const elemet=createDomElement({
    elementTag: "LI",
    className: "link-nav-items-content",
    innerHtml: displayText
    })
    return elemet;
}