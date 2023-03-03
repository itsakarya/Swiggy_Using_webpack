import { createDomElement } from "../../../../helper";

export function ratingTimimgCostContainerItem({
    parentClass, childClass, parentText, childText
}) {
    const parentElement=createDomElement({
        elementTag: "DIV",
        className:parentClass,
        innerHtml:parentText
    });
    const childElement=createDomElement({
        elementTag:"DIV",
        className:childClass,
        innerHtml:childText
    });
    parentElement.appendChild(childElement);
    return parentElement;
}