import { createDomElement, appendChildrensInParent } from "../../helper";
import { createHeaderMenuItems } from "./rightSectionMenuItems";

export function createHeaderRightSection(parentId) {
    const headerRightSection = createDomElement({
        elementTag: "DIV",
        id: "headerRightSection",
    });
    appendChildrensInParent(parentId, [headerRightSection]);
    createHeaderMenuItems(headerRightSection.id);
}
