import { createDomElement, appendChildrensInParent } from "../../helper";
import { createSideNavListSectionList } from "./element";

export function createSideNavListSection(parentId) {
    const sidenav=createDomElement({
        elementTag:"DIV",
        className:"side-nav-bar",
        id: "navContainer"
    });
    appendChildrensInParent(parentId,[sidenav]);
    createSideNavListSectionList(sidenav.id);
}