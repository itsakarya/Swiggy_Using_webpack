import { createDomElement } from "../helper";
import { createHeaderLeftSection } from "./pageHeaderleft/pageHeaderLeft";
import { createHeaderRightSection } from "./pageHeaderRight/pageHeaderRight";

export function createHeaderSection () {
    const section = createDomElement({
        elementTag: "SECTION",
        className: "top-banner",
        id: "headerContainer",
    });
    document.body.appendChild(section);
    createHeaderLeftSection(section.id);
    createHeaderRightSection(section.id);
}