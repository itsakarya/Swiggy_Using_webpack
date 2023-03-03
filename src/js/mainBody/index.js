import { createDomElement } from "../helper";
import { createAsideSection } from "./aside";
import { createSideNavListSection } from "./sideNav";
import { createResturantFoodItemsSection } from "./foodItem";

export function createBody(){
    const section = createDomElement({
        elementTag: "SECTION",
        className: "body",
        id: "bodyItem",
    });
    document.body.appendChild(section);
    createSideNavListSection(section.id);
    createResturantFoodItemsSection(section.id);
    createAsideSection(section.id);
}