import { createDomElement } from "../../../helper";
export function createSideNavListSectionListItem({
    innerHtml, className, id
}){
    const item=createDomElement({
        elementTag:"LI",
        innerHtml:innerHtml,
        className:className,
        id:id
    });
    return item;
}