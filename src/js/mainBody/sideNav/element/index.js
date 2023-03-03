import { createDomElement, appendChildrensInParent } from "../../../helper";
import { createSideNavListSectionListItem } from "./helper";

export function createSideNavListSectionList(parentId) {
    const list=createDomElement({
        elementTag:"UL",
        className:"side-nav-bar-items",
        id:"navItems"
    });
    appendChildrensInParent(parentId,[list]);

    const item=[{innerHtml:"Recommended", className:"side-nav-bar-items-style"},
                {innerHtml:"Dimsums & Baos"},
                {innerHtml:"Appetizers"},
                {innerHtml:"Signature Bowls"},
                {innerHtml:"Rice & Noodles"},
                {innerHtml:"Make Your Own Bowl"},
                {innerHtml:"Steamy Soups"},
                {innerHtml:"Work-tossed Gravies"}
    ];        
    const listItem = item.map(createSideNavListSectionListItem);
    appendChildrensInParent(list.id,listItem);
}