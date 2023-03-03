import { createDomElement } from "../../helper";

export function createHeaderMenuItem ({
    svg, displayText
}) {
    const menuItem = createDomElement({
        elementTag: "LI",
        innerHtml: svg,
        className: 'icon-content-items'
    });
    const menuItemText = createDomElement({
        elementTag: "SPAN",
        innerHtml: displayText,
        className: "icon-content-text"
    });
    menuItem.appendChild(menuItemText);
    return menuItem;
}